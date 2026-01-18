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

    it("Modal.CloseButton의 children이 커스텀 아이콘으로 렌더링되는지", () => {
      render(
        <Modal.Root open={true} onOpenChange={() => {}}>
          <Modal.Overlay>
            <Modal.Content>
              <Modal.CloseButton>
                <span data-testid="custom-close">X</span>
              </Modal.CloseButton>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      );
      expect(screen.getByTestId("custom-close")).toBeInTheDocument();
    });
  });

  describe("컨텍스트 에러 처리", () => {
    it("Modal.Overlay를 Modal.Root 밖에서 사용하면 에러가 발생하는지", () => {
      // 에러를 콘솔에 출력하지 않도록 설정
      const consoleError = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      expect(() => {
        render(<Modal.Overlay>테스트</Modal.Overlay>);
      }).toThrow("Modal compound components must be used within Modal.Root");

      consoleError.mockRestore();
    });

    it("Modal.Content를 Modal.Root 밖에서 사용하면 에러가 발생하는지", () => {
      const consoleError = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      expect(() => {
        render(<Modal.Content>테스트</Modal.Content>);
      }).toThrow("Modal compound components must be used within Modal.Root");

      consoleError.mockRestore();
    });

    it("Modal.CloseButton을 Modal.Root 밖에서 사용하면 에러가 발생하는지", () => {
      const consoleError = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      expect(() => {
        render(<Modal.CloseButton />);
      }).toThrow("Modal compound components must be used within Modal.Root");

      consoleError.mockRestore();
    });
  });

  describe("커스터마이징", () => {
    it("Modal.Overlay의 className prop이 적용되는지", () => {
      const { container } = render(
        <Modal.Root open={true} onOpenChange={() => {}}>
          <Modal.Overlay className="custom-overlay">
            <Modal.Content>테스트</Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      );

      const overlay = container.querySelector(".custom-overlay");
      expect(overlay).toBeInTheDocument();
    });

    it("Modal.Content의 className prop이 적용되는지", () => {
      const { container } = render(
        <Modal.Root open={true} onOpenChange={() => {}}>
          <Modal.Overlay>
            <Modal.Content className="custom-content">테스트</Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      );

      const content = container.querySelector(".custom-content");
      expect(content).toBeInTheDocument();
    });

    it("Modal.Header의 className prop이 적용되는지", () => {
      const { container } = render(
        <Modal.Root open={true} onOpenChange={() => {}}>
          <Modal.Overlay>
            <Modal.Content>
              <Modal.Header className="custom-header">제목</Modal.Header>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      );

      const header = container.querySelector(".custom-header");
      expect(header).toBeInTheDocument();
    });

    it("Modal.CloseButton의 className prop이 적용되는지", () => {
      const { container } = render(
        <Modal.Root open={true} onOpenChange={() => {}}>
          <Modal.Overlay>
            <Modal.Content>
              <Modal.CloseButton className="custom-close-button" />
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      );

      const closeButton = container.querySelector(".custom-close-button");
      expect(closeButton).toBeInTheDocument();
    });
  });

  describe("Modal.Root 추가 기능", () => {
    it("Modal.Root의 open이 false일 때 렌더링되지 않는지", () => {
      const { container } = render(
        <Modal.Root open={false} onOpenChange={() => {}}>
          <Modal.Overlay>
            <Modal.Content>테스트</Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      );

      expect(container.firstChild).toBeNull();
    });

    it("Modal.Root의 size prop이 올바르게 전달되는지", () => {
      const { container: smallContainer } = render(
        <Modal.Root open={true} onOpenChange={() => {}} size="small">
          <Modal.Overlay>
            <Modal.Content>작은 모달</Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      );

      const { container: largeContainer } = render(
        <Modal.Root open={true} onOpenChange={() => {}} size="large">
          <Modal.Overlay>
            <Modal.Content>큰 모달</Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      );

      expect(screen.getByText("작은 모달")).toBeInTheDocument();
      expect(screen.getByText("큰 모달")).toBeInTheDocument();
    });
  });

  describe("actionButton 엣지 케이스", () => {
    it("actionButton의 onClick이 undefined일 때도 정상 작동하는지", async () => {
      const user = userEvent.setup();
      render(
        <Modal
          open={true}
          onOpenChange={() => {}}
          actionButton={{ label: "확인", onClick: undefined }}
        >
          모달 내용
        </Modal>
      );

      const actionButton = screen.getByRole("button", { name: "확인" });
      expect(actionButton).toBeInTheDocument();

      // onClick이 undefined여도 에러가 발생하지 않아야 함
      await user.click(actionButton);
      expect(actionButton).toBeInTheDocument();
    });
  });

  describe("actionButton 아이콘", () => {
    it("actionButton에 leftIcon이 표시되는지", () => {
      render(
        <Modal
          open={true}
          onOpenChange={() => {}}
          actionButton={{
            label: "확인",
            leftIcon: <span data-testid="left-icon">←</span>,
          }}
        >
          모달 내용
        </Modal>
      );

      expect(screen.getByTestId("left-icon")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /확인/ })).toBeInTheDocument();
    });

    it("actionButton에 rightIcon이 표시되는지", () => {
      render(
        <Modal
          open={true}
          onOpenChange={() => {}}
          actionButton={{
            label: "확인",
            rightIcon: <span data-testid="right-icon">→</span>,
          }}
        >
          모달 내용
        </Modal>
      );

      expect(screen.getByTestId("right-icon")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /확인/ })).toBeInTheDocument();
    });

    it("actionButton에 leftIcon과 rightIcon이 동시에 표시되는지", () => {
      render(
        <Modal
          open={true}
          onOpenChange={() => {}}
          actionButton={{
            label: "확인",
            leftIcon: <span data-testid="left-icon">←</span>,
            rightIcon: <span data-testid="right-icon">→</span>,
          }}
        >
          모달 내용
        </Modal>
      );

      expect(screen.getByTestId("left-icon")).toBeInTheDocument();
      expect(screen.getByTestId("right-icon")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /확인/ })).toBeInTheDocument();
    });

    it("actionButton의 아이콘과 onClick이 함께 동작하는지", async () => {
      const handleActionClick = vi.fn();
      const user = userEvent.setup();
      render(
        <Modal
          open={true}
          onOpenChange={() => {}}
          actionButton={{
            label: "확인",
            onClick: handleActionClick,
            leftIcon: <span data-testid="left-icon">✓</span>,
          }}
        >
          모달 내용
        </Modal>
      );

      const actionButton = screen.getByRole("button", { name: /확인/ });
      expect(screen.getByTestId("left-icon")).toBeInTheDocument();

      await user.click(actionButton);
      expect(handleActionClick).toHaveBeenCalledTimes(1);
    });
  });
});
