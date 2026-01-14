import type { ConnectApi, ConnectParams, Send } from "@/core/connect";
import React from "react";
import type { HTMLAttributes, KeyboardEvent, MouseEvent } from "react";

/**
 * Modal의 상태
 */
interface ModalState {
  isOpen: boolean;
  isClosing: boolean; // 애니메이션 중인지
}

/**
 * Modal의 맥락 (외부에서 주입되는 옵션)
 */
interface ModalContext {
  closeOnOverlayClick: boolean;
  closeOnEscape: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

/**
 * Modal의 상호작용 props
 */
export interface ModalBehaviorProps {
  open: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

/**
 * Modal의 DOM 바인딩을 위한 connect 함수
 */
function connect({
  state,
  send,
  ctx,
}: ConnectParams<ModalState, ModalContext>): ConnectApi<{
  overlayProps: HTMLAttributes<HTMLDivElement> & {
    "data-open"?: boolean;
    "data-closing"?: boolean;
  };
  contentProps: HTMLAttributes<HTMLDivElement>;
  closeButtonProps: HTMLAttributes<HTMLButtonElement>;
}> {
  return {
    overlayProps: {
      onClick: (e: MouseEvent<HTMLDivElement>) => {
        // content 클릭은 무시 (overlay만 클릭했을 때만 닫기)
        if (e.target === e.currentTarget && ctx.closeOnOverlayClick) {
          send({ type: "CLOSE", payload: { source: "overlay" } });
        }
      },
      "data-open": state.isOpen,
      "data-closing": state.isClosing,
    },
    contentProps: {
      role: "dialog",
      "aria-modal": true,
      onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Escape" && ctx.closeOnEscape) {
          send({ type: "CLOSE", payload: { source: "escape" } });
        }
      },
      onClick: (e: MouseEvent<HTMLDivElement>) => {
        // content 내부 클릭은 전파 방지
        e.stopPropagation();
      },
    },
    closeButtonProps: {
      onClick: () => {
        send({ type: "CLOSE", payload: { source: "button" } });
      },
      "aria-label": "닫기",
    },
  };
}

/**
 * Modal의 상태 관리 및 상호작용 처리 hook
 */
export function useModal(props: ModalBehaviorProps): ConnectApi<{
  overlayProps: HTMLAttributes<HTMLDivElement> & {
    "data-open"?: boolean;
    "data-closing"?: boolean;
  };
  contentProps: HTMLAttributes<HTMLDivElement>;
  closeButtonProps: HTMLAttributes<HTMLButtonElement>;
}> & {
  isClosing: boolean;
} {
  const {
    open = false,
    onOpenChange,
    closeOnOverlayClick = true,
    closeOnEscape = true,
  } = props;

  // 콜백 stale 방지
  const onOpenChangeRef = React.useRef(onOpenChange);
  React.useEffect(() => {
    onOpenChangeRef.current = onOpenChange;
  }, [onOpenChange]);

  // 상태 관리
  const [state, setState] = React.useState<ModalState>({
    isOpen: open,
    isClosing: false,
  });

  // props와 동기화
  React.useEffect(() => {
    if (open && !state.isOpen) {
      // 열기
      setState({ isOpen: true, isClosing: false });
    } else if (!open && state.isOpen && !state.isClosing) {
      // 닫기 시작 (애니메이션)
      setState((prev) => ({ ...prev, isClosing: true }));
    }
  }, [open, state.isOpen, state.isClosing]);

  // 애니메이션 완료 후 실제 닫기
  React.useEffect(() => {
    if (state.isClosing) {
      const timer = setTimeout(() => {
        setState({ isOpen: false, isClosing: false });
        onOpenChangeRef.current?.(false);
      }, 200); // 애니메이션 시간 (CSS와 동기화 필요)

      return () => clearTimeout(timer);
    }
  }, [state.isClosing]);

  // send 함수 구현
  const send: Send = React.useCallback(
    (event: { type: string; payload?: unknown }) => {
      if (event.type === "CLOSE") {
        if (state.isOpen && !state.isClosing) {
          setState((prev) => ({ ...prev, isClosing: true }));
        }
      }
    },
    [state.isOpen, state.isClosing]
  );

  const ctx: ModalContext = React.useMemo(
    () => ({
      closeOnOverlayClick,
      closeOnEscape,
      onOpenChange: (isOpen) => {
        onOpenChangeRef.current?.(isOpen);
      },
    }),
    [closeOnOverlayClick, closeOnEscape]
  );

  // body scroll lock (모달이 열려있을 때)
  React.useEffect(() => {
    if (state.isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [state.isOpen]);

  return React.useMemo(() => {
    return {
      ...connect({ state, send, ctx }),
      isClosing: state.isClosing,
    };
  }, [state, send, ctx]);
}
