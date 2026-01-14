import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Modal } from "./Modal";

describe("Modal", () => {
  describe("기본 렌더링", () => {
    it("open이 false일 때 렌더링되지 않는지", () => {
      const { container } = render(
        <Modal open={false} onOpenChange={() => {}}>
          모달 내용
        </Modal>
      );
      expect(container.firstChild).toBeNull();
    });

    it("open이 true일 때 렌더링되는지", () => {
      render(
        <Modal open={true} onOpenChange={() => {}}>
          모달 내용
        </Modal>
      );
      expect(screen.getByText("모달 내용")).toBeInTheDocument();
    });

    it("children이 정상적으로 렌더링되는지", () => {
      render(
        <Modal open={true} onOpenChange={() => {}}>
          <div data-testid="modal-content">커스텀 내용</div>
        </Modal>
      );
      expect(screen.getByTestId("modal-content")).toBeInTheDocument();
    });
  });

  describe("닫기 버튼", () => {
    it("showCloseButton이 true일 때 닫기 버튼이 표시되는지", () => {
      render(
        <Modal open={true} onOpenChange={() => {}} showCloseButton={true}>
          모달 내용
        </Modal>
      );
      const closeButton = screen.getByLabelText("닫기");
      expect(closeButton).toBeInTheDocument();
    });

    it("showCloseButton이 false일 때 닫기 버튼이 표시되지 않는지", () => {
      render(
        <Modal open={true} onOpenChange={() => {}} showCloseButton={false}>
          모달 내용
        </Modal>
      );
      const closeButton = screen.queryByLabelText("닫기");
      expect(closeButton).not.toBeInTheDocument();
    });

    it("닫기 버튼 클릭 시 onOpenChange가 호출되는지", async () => {
      const handleOpenChange = vi.fn();
      const user = userEvent.setup();
      render(
        <Modal open={true} onOpenChange={handleOpenChange}>
          모달 내용
        </Modal>
      );

      const closeButton = screen.getByLabelText("닫기");
      await user.click(closeButton);

      await waitFor(() => {
        expect(handleOpenChange).toHaveBeenCalledWith(false);
      });
    });
  });

  describe("actionButton", () => {
    it("actionButton이 있을 때 버튼이 렌더링되는지", () => {
      render(
        <Modal
          open={true}
          onOpenChange={() => {}}
          actionButton={{ label: "확인", onClick: () => {} }}
        >
          모달 내용
        </Modal>
      );
      expect(screen.getByRole("button", { name: "확인" })).toBeInTheDocument();
    });

    it("actionButton이 없을 때 버튼이 렌더링되지 않는지", () => {
      render(
        <Modal open={true} onOpenChange={() => {}}>
          모달 내용
        </Modal>
      );
      const actionButton = screen.queryByRole("button", { name: "확인" });
      expect(actionButton).not.toBeInTheDocument();
    });

    it("actionButton 클릭 시 onClick이 호출되는지", async () => {
      const handleActionClick = vi.fn();
      const user = userEvent.setup();
      render(
        <Modal
          open={true}
          onOpenChange={() => {}}
          actionButton={{ label: "확인", onClick: handleActionClick }}
        >
          모달 내용
        </Modal>
      );

      const actionButton = screen.getByRole("button", { name: "확인" });
      await user.click(actionButton);

      expect(handleActionClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("오버레이 클릭", () => {
    it("closeOnOverlayClick이 true일 때 오버레이 클릭 시 닫히는지", async () => {
      const handleOpenChange = vi.fn();
      const { container } = render(
        <Modal
          open={true}
          onOpenChange={handleOpenChange}
          closeOnOverlayClick={true}
        >
          모달 내용
        </Modal>
      );

      // 오버레이는 data-open 속성을 가진 div
      const overlay = container.querySelector(
        '[data-open="true"]'
      ) as HTMLElement;
      expect(overlay).toBeInTheDocument();

      // e.target === e.currentTarget 조건을 만족하도록 직접 이벤트 발생
      const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      });
      Object.defineProperty(clickEvent, "target", {
        value: overlay,
        writable: false,
      });
      Object.defineProperty(clickEvent, "currentTarget", {
        value: overlay,
        writable: false,
      });

      await act(async () => {
        overlay.dispatchEvent(clickEvent);
      });

      // 애니메이션 시간(200ms)을 고려하여 대기
      await waitFor(
        () => {
          expect(handleOpenChange).toHaveBeenCalledWith(false);
        },
        { timeout: 500 }
      );
    });

    it("closeOnOverlayClick이 false일 때 오버레이 클릭 시 닫히지 않는지", async () => {
      const handleOpenChange = vi.fn();
      const { container } = render(
        <Modal
          open={true}
          onOpenChange={handleOpenChange}
          closeOnOverlayClick={false}
        >
          모달 내용
        </Modal>
      );

      const overlay = container.querySelector(
        '[data-open="true"]'
      ) as HTMLElement;
      expect(overlay).toBeInTheDocument();

      const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      });
      Object.defineProperty(clickEvent, "target", {
        value: overlay,
        writable: false,
      });
      Object.defineProperty(clickEvent, "currentTarget", {
        value: overlay,
        writable: false,
      });

      overlay.dispatchEvent(clickEvent);

      // 짧은 시간 대기 후 호출되지 않았는지 확인
      await new Promise((resolve) => setTimeout(resolve, 100));
      expect(handleOpenChange).not.toHaveBeenCalled();
    });
  });

  describe("ESC 키", () => {
    it("closeOnEscape가 true일 때 ESC 키로 닫히는지", async () => {
      const handleOpenChange = vi.fn();
      render(
        <Modal open={true} onOpenChange={handleOpenChange} closeOnEscape={true}>
          모달 내용
        </Modal>
      );

      // content에 포커스를 주고 ESC 키 입력
      const content = screen.getByRole("dialog");
      content.focus();

      // 직접 KeyboardEvent 발생
      const escapeEvent = new KeyboardEvent("keydown", {
        key: "Escape",
        code: "Escape",
        bubbles: true,
        cancelable: true,
      });
      content.dispatchEvent(escapeEvent);

      await waitFor(
        () => {
          expect(handleOpenChange).toHaveBeenCalledWith(false);
        },
        { timeout: 500 }
      );
    });

    it("closeOnEscape가 false일 때 ESC 키로 닫히지 않는지", async () => {
      const handleOpenChange = vi.fn();
      render(
        <Modal
          open={true}
          onOpenChange={handleOpenChange}
          closeOnEscape={false}
        >
          모달 내용
        </Modal>
      );

      const content = screen.getByRole("dialog");
      content.focus();

      const escapeEvent = new KeyboardEvent("keydown", {
        key: "Escape",
        code: "Escape",
        bubbles: true,
        cancelable: true,
      });
      content.dispatchEvent(escapeEvent);

      // 짧은 시간 대기 후 호출되지 않았는지 확인
      await new Promise((resolve) => setTimeout(resolve, 100));
      expect(handleOpenChange).not.toHaveBeenCalled();
    });
  });

  describe("크기 옵션", () => {
    it("size prop이 올바르게 적용되는지", () => {
      const { container: smallContainer } = render(
        <Modal open={true} onOpenChange={() => {}} size="small">
          작은 모달
        </Modal>
      );
      const { container: mediumContainer } = render(
        <Modal open={true} onOpenChange={() => {}} size="medium">
          중간 모달
        </Modal>
      );
      const { container: largeContainer } = render(
        <Modal open={true} onOpenChange={() => {}} size="large">
          큰 모달
        </Modal>
      );

      expect(
        smallContainer.querySelector('[role="dialog"]')
      ).toBeInTheDocument();
      expect(
        mediumContainer.querySelector('[role="dialog"]')
      ).toBeInTheDocument();
      expect(
        largeContainer.querySelector('[role="dialog"]')
      ).toBeInTheDocument();
    });
  });

  describe("애니메이션", () => {
    it("닫는 중에도 렌더링되는지", async () => {
      const handleOpenChange = vi.fn();
      const { rerender } = render(
        <Modal open={true} onOpenChange={handleOpenChange}>
          모달 내용
        </Modal>
      );

      expect(screen.getByText("모달 내용")).toBeInTheDocument();

      rerender(
        <Modal open={false} onOpenChange={handleOpenChange}>
          모달 내용
        </Modal>
      );

      // 닫는 중에는 여전히 렌더링되어야 함 (isClosing 상태)
      // useModal의 애니메이션 로직에 의해 isClosing이 true가 되면 렌더링됨
      expect(screen.getByText("모달 내용")).toBeInTheDocument();
    });
  });
});

describe("Modal 컴파운드 패턴", () => {
  describe("Modal.Root", () => {
    it("Modal.Root가 정상적으로 렌더링되는지", () => {
      render(
        <Modal.Root open={true} onOpenChange={() => {}}>
          <Modal.Overlay>
            <Modal.Content>커스텀 레이아웃</Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      );
      expect(screen.getByText("커스텀 레이아웃")).toBeInTheDocument();
    });
  });

  describe("Modal.Header", () => {
    it("Modal.Header가 정상적으로 렌더링되는지", () => {
      render(
        <Modal.Root open={true} onOpenChange={() => {}}>
          <Modal.Overlay>
            <Modal.Content>
              <Modal.Header>모달 제목</Modal.Header>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      );
      expect(screen.getByText("모달 제목")).toBeInTheDocument();
    });
  });

  describe("Modal.CloseButton", () => {
    it("Modal.CloseButton이 정상적으로 렌더링되는지", () => {
      render(
        <Modal.Root open={true} onOpenChange={() => {}}>
          <Modal.Overlay>
            <Modal.Content>
              <Modal.CloseButton />
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      );
      expect(screen.getByLabelText("닫기")).toBeInTheDocument();
    });
  });
});
