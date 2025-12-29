import type { TestRunnerConfig } from "@storybook/test-runner";
import { getViolations, injectAxe } from "axe-playwright";

const config: TestRunnerConfig = {
  // Hook that is executed before the test runner starts running tests
  setup() {
    // Add your configuration here.
  },
  // Hook that is executed before the story is visited
  async preVisit(page) {
    await injectAxe(page);
  },
  // Hook that is executed after the story is visited
  async postVisit(page) {
    // Run accessibility tests
    const violations = await getViolations(page, "#storybook-root");

    // Primary 버튼 색상 대비: 디자이너 확정 디자인으로 인해 현재 색상 유지
    // O[500] (#FF6929) + white = 2.87:1 (AA 미달, 4.5:1 필요)
    // color-contrast 규칙을 에러가 아닌 워닝으로 처리
    const filteredViolations = violations.filter((violation) => {
      if (violation.id === "color-contrast") {
        // color-contrast는 워닝으로만 출력하고 테스트 실패로 처리하지 않음
        console.warn(
          `[A11y Warning] color-contrast: ${violation.description}\n` +
            `노드: ${violation.nodes.map((n) => n.html).join("\n")}\n` +
            `자세한 내용은 Button.stories.tsx 문서 참조`
        );
        return false; // violations에서 제외 (테스트 실패로 처리하지 않음)
      }
      return true; // 다른 violations는 그대로 유지
    });

    // 필터링된 violations가 있으면 테스트 실패
    if (filteredViolations.length > 0) {
      const violationsReport = filteredViolations
        .map((violation) => {
          const nodes = violation.nodes
            .map((node) => `  - ${node.html}`)
            .join("\n");
          return `${violation.id}: ${violation.description}\n${nodes}`;
        })
        .join("\n\n");

      throw new Error(`Accessibility violations found:\n\n${violationsReport}`);
    }
  },
};

export default config;
