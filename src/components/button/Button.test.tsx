import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  describe("children 렌더링", () => {
    it("children이 정상적으로 렌더링되는지", () => {
      render(<Button>클릭하세요</Button>);
      expect(
        screen.getByRole("button", { name: /클릭하세요/i })
      ).toBeInTheDocument();
    });

    it("텍스트가 아닌 children도 렌더링되는지", () => {
      render(
        <Button>
          <span data-testid="custom-child">커스텀 자식</span>
        </Button>
      );
      expect(screen.getByTestId("custom-child")).toBeInTheDocument();
    });
  });

  describe("기본 속성", () => {
    it("기본 type이 'button'인지", () => {
      render(<Button>버튼</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", "button");
    });

    it("type을 명시적으로 지정할 수 있는지", () => {
      render(<Button type="submit">제출</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", "submit");
    });
  });

  describe("onClick 이벤트", () => {
    it("onClick이 정상적으로 호출되는지", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(<Button onClick={handleClick}>클릭</Button>);

      const button = screen.getByRole("button");
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("disabled일 때 onClick이 호출되지 않는지", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(
        <Button onClick={handleClick} disabled>
          비활성화
        </Button>
      );

      const button = screen.getByRole("button");
      await user.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("variant에 따른 스타일", () => {
    it("default variant가 적용되는지", () => {
      const { container } = render(<Button variant="default">기본</Button>);
      const button = container.querySelector("button");
      expect(button?.className).toBeDefined();
      expect(button?.className.length).toBeGreaterThan(0);
    });

    it("gray variant가 적용되는지", () => {
      const { container } = render(<Button variant="gray">회색</Button>);
      const button = container.querySelector("button");
      expect(button?.className).toBeDefined();
      expect(button?.className.length).toBeGreaterThan(0);
    });

    it("primary variant가 적용되는지", () => {
      const { container } = render(<Button variant="primary">주요</Button>);
      const button = container.querySelector("button");
      expect(button?.className).toBeDefined();
      expect(button?.className.length).toBeGreaterThan(0);
    });

    it("variant에 따라 다른 className이 적용되는지", () => {
      const { container: defaultContainer } = render(
        <Button variant="default">기본</Button>
      );
      const { container: primaryContainer } = render(
        <Button variant="primary">주요</Button>
      );

      const defaultButton = defaultContainer.querySelector("button");
      const primaryButton = primaryContainer.querySelector("button");

      // vanilla-extract는 해시된 클래스명을 생성하므로, className이 다르다는 것만 확인
      expect(defaultButton?.className).toBeDefined();
      expect(primaryButton?.className).toBeDefined();
      expect(defaultButton?.className).not.toBe(primaryButton?.className);
    });
  });

  describe("fullWidth 스타일", () => {
    it("full prop이 true일 때 fullWidth 클래스가 적용되는지", () => {
      const { container } = render(<Button full>전체 너비</Button>);
      const button = container.querySelector("button");
      expect(button?.className).toBeDefined();
      expect(button?.className.length).toBeGreaterThan(0);
    });

    it("full prop이 false일 때 fullWidth 클래스가 적용되지 않는지", () => {
      const { container: fullContainer } = render(<Button full>전체</Button>);
      const { container: notFullContainer } = render(<Button>일반</Button>);

      const fullButton = fullContainer.querySelector("button");
      const notFullButton = notFullContainer.querySelector("button");

      // className이 다르다는 것만 확인 (vanilla-extract 해시 클래스명)
      expect(fullButton?.className).toBeDefined();
      expect(notFullButton?.className).toBeDefined();
      expect(fullButton?.className).not.toBe(notFullButton?.className);
    });
  });

  describe("아이콘 렌더링", () => {
    it("leftIcon이 있을 때 올바른 구조로 렌더링되는지", () => {
      const { container } = render(
        <Button leftIcon={<span data-testid="left-icon">←</span>}>
          왼쪽 아이콘
        </Button>
      );

      const button = container.querySelector("button");
      const leftIconElement = screen.getByTestId("left-icon");
      const iconSpacer = container.querySelector("span.iconSpacer");

      expect(leftIconElement).toBeInTheDocument();
      expect(leftIconElement.closest("button")).toBe(button);
      // iconSpacer가 렌더링되는지 확인 (vanilla-extract 클래스명은 해시되므로 구조만 확인)
      expect(button?.children.length).toBeGreaterThan(1);
    });

    it("rightIcon이 있을 때 올바른 구조로 렌더링되는지", () => {
      const { container } = render(
        <Button rightIcon={<span data-testid="right-icon">→</span>}>
          오른쪽 아이콘
        </Button>
      );

      const button = container.querySelector("button");
      const rightIconElement = screen.getByTestId("right-icon");

      expect(rightIconElement).toBeInTheDocument();
      expect(rightIconElement.closest("button")).toBe(button);
      // iconSpacer가 렌더링되는지 확인
      expect(button?.children.length).toBeGreaterThan(1);
    });

    it("leftIcon과 rightIcon이 동시에 있을 때 leftIcon이 우선 적용되는지", () => {
      // Button 컴포넌트 로직상 leftIcon이 있으면 rightIcon은 무시됨
      const { container } = render(
        <Button
          leftIcon={<span data-testid="left-icon">←</span>}
          rightIcon={<span data-testid="right-icon">→</span>}
        >
          양쪽 아이콘
        </Button>
      );

      const leftIconElement = screen.getByTestId("left-icon");
      const rightIconElement = screen.queryByTestId("right-icon");

      expect(leftIconElement).toBeInTheDocument();
      // leftIcon이 있으면 rightIcon은 렌더링되지 않음
      expect(rightIconElement).not.toBeInTheDocument();
    });

    it("아이콘이 없을 때 children만 렌더링되는지", () => {
      const { container } = render(<Button>아이콘 없음</Button>);
      const button = container.querySelector("button");

      expect(button?.textContent).toBe("아이콘 없음");
      expect(button?.children.length).toBe(0);
    });
  });
});
