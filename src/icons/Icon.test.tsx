import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Icon, Icons, iconSize } from "./index";

describe("Icon", () => {
  describe("정적 아이콘 렌더링", () => {
    it("<Icon.ArrowDown />가 정상적으로 렌더링되는지", () => {
      const { container } = render(<Icons.ArrowDown />);
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });

    it("다른 정적 아이콘들도 렌더링되는지", () => {
      const { container: arrowLeft } = render(<Icons.ArrowLeft />);
      const { container: arrowRight } = render(<Icons.ArrowRight />);
      const { container: close } = render(<Icons.Close />);

      expect(arrowLeft.querySelector("svg")).toBeInTheDocument();
      expect(arrowRight.querySelector("svg")).toBeInTheDocument();
      expect(close.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("동적 아이콘 렌더링", () => {
    it("<Icon name=\"ArrowDown\" />가 정상적으로 렌더링되는지", () => {
      const { container } = render(<Icon name="ArrowDown" />);
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });

    it("다른 아이콘 이름으로도 렌더링되는지", () => {
      const { container: close } = render(<Icon name="Close" />);
      const { container: plus } = render(<Icon name="Plus" />);
      const { container: warning } = render(<Icon name="Warning" />);

      expect(close.querySelector("svg")).toBeInTheDocument();
      expect(plus.querySelector("svg")).toBeInTheDocument();
      expect(warning.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("size 토큰 적용", () => {
    it("size=\"xs\"일 때 width/height가 12px로 설정되는지", () => {
      const { container } = render(<Icon name="ArrowDown" size="xs" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("width", `${iconSize.xs}px`);
      expect(svg).toHaveAttribute("height", `${iconSize.xs}px`);
      expect(svg).toHaveStyle({ width: `${iconSize.xs}px`, height: `${iconSize.xs}px` });
    });

    it("size=\"sm\"일 때 width/height가 16px로 설정되는지", () => {
      const { container } = render(<Icon name="ArrowDown" size="sm" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("width", `${iconSize.sm}px`);
      expect(svg).toHaveAttribute("height", `${iconSize.sm}px`);
      expect(svg).toHaveStyle({ width: `${iconSize.sm}px`, height: `${iconSize.sm}px` });
    });

    it("size=\"md\"일 때 width/height가 24px로 설정되는지 (기본값)", () => {
      const { container } = render(<Icon name="ArrowDown" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("width", `${iconSize.md}px`);
      expect(svg).toHaveAttribute("height", `${iconSize.md}px`);
      expect(svg).toHaveStyle({ width: `${iconSize.md}px`, height: `${iconSize.md}px` });
    });

    it("size=\"lg\"일 때 width/height가 32px로 설정되는지", () => {
      const { container } = render(<Icon name="ArrowDown" size="lg" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("width", `${iconSize.lg}px`);
      expect(svg).toHaveAttribute("height", `${iconSize.lg}px`);
      expect(svg).toHaveStyle({ width: `${iconSize.lg}px`, height: `${iconSize.lg}px` });
    });

    it("size=\"xl\"일 때 width/height가 48px로 설정되는지", () => {
      const { container } = render(<Icon name="ArrowDown" size="xl" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("width", `${iconSize.xl}px`);
      expect(svg).toHaveAttribute("height", `${iconSize.xl}px`);
      expect(svg).toHaveStyle({ width: `${iconSize.xl}px`, height: `${iconSize.xl}px` });
    });

    it("size를 숫자로 직접 지정할 수 있는지", () => {
      const customSize = 20;
      const { container } = render(<Icon name="ArrowDown" size={customSize} />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("width", `${customSize}px`);
      expect(svg).toHaveAttribute("height", `${customSize}px`);
      expect(svg).toHaveStyle({ width: `${customSize}px`, height: `${customSize}px` });
    });
  });

  describe("접근성 속성", () => {
    it("decorative가 true일 때 (기본값) aria-hidden=\"true\"가 설정되는지", () => {
      const { container } = render(<Icon name="ArrowDown" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("aria-hidden", "true");
      expect(svg).not.toHaveAttribute("role");
      expect(svg).not.toHaveAttribute("aria-label");
    });

    it("decorative={true}를 명시적으로 지정했을 때 aria-hidden=\"true\"가 설정되는지", () => {
      const { container } = render(<Icon name="ArrowDown" decorative={true} />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("aria-hidden", "true");
      expect(svg).not.toHaveAttribute("role");
      expect(svg).not.toHaveAttribute("aria-label");
    });

    it("decorative={false}일 때 role=\"img\"가 설정되는지", () => {
      const { container } = render(<Icon name="ArrowDown" decorative={false} />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("role", "img");
      expect(svg).not.toHaveAttribute("aria-hidden");
    });

    it("decorative={false} + aria-label을 지정했을 때 role=\"img\"와 aria-label이 모두 적용되는지", () => {
      const ariaLabel = "화살표 아래 아이콘";
      const { container } = render(
        <Icon name="ArrowDown" decorative={false} aria-label={ariaLabel} />
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("role", "img");
      expect(svg).toHaveAttribute("aria-label", ariaLabel);
      expect(svg).not.toHaveAttribute("aria-hidden");
    });

    it("정적 아이콘에서도 decorative와 aria-label이 적용되는지", () => {
      const ariaLabel = "닫기 아이콘";
      const { container } = render(
        <Icons.Close decorative={false} aria-label={ariaLabel} />
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("role", "img");
      expect(svg).toHaveAttribute("aria-label", ariaLabel);
    });
  });
});

