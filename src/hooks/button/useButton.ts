import type { ConnectApi, ConnectParams, Send } from "@/core/connect";
import React from "react";
import type { ButtonHTMLAttributes } from "react";

/**
 * Button의 상태
 */
type ButtonState = Record<string, never>; // Button은 내부 상태가 없고, props로 제어됨
// 필요시 hover, focus 등의 UI 상태를 추가할 수 있음

/**
 * Button의 맥락 (외부에서 주입되는 옵션)
 */
interface ButtonContext {
  isDisabled: boolean;
}

/**
 * Button의 상호작용 props
 */
export interface ButtonBehaviorProps {
  disabled?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  onFocus?: ButtonHTMLAttributes<HTMLButtonElement>["onFocus"];
  onBlur?: ButtonHTMLAttributes<HTMLButtonElement>["onBlur"];
  onMouseEnter?: ButtonHTMLAttributes<HTMLButtonElement>["onMouseEnter"];
  onMouseLeave?: ButtonHTMLAttributes<HTMLButtonElement>["onMouseLeave"];
}

/**
 * Button의 DOM 바인딩을 위한 connect 함수
 */
function connect({
  state,
  send,
  ctx,
}: ConnectParams<ButtonState, ButtonContext>): ConnectApi<{
  rootProps: ButtonHTMLAttributes<HTMLButtonElement>;
}> {
  return {
    rootProps: {
      type: "button",
      disabled: ctx.isDisabled,
      onClick: (e) => {
        if (!ctx.isDisabled) {
          send({ type: "CLICK", payload: { event: e } });
        }
      },
      onFocus: (e) => {
        if (!ctx.isDisabled) {
          send({ type: "FOCUS", payload: { event: e } });
        }
      },
      onBlur: (e) => {
        send({ type: "BLUR", payload: { event: e } });
      },
      onMouseEnter: (e) => {
        if (!ctx.isDisabled) {
          send({ type: "MOUSE_ENTER", payload: { event: e } });
        }
      },
      onMouseLeave: (e) => {
        send({ type: "MOUSE_LEAVE", payload: { event: e } });
      },
    },
  };
}

/**
 * Button의 상태 관리 및 상호작용 처리 hook
 */
export function useButton(props: ButtonBehaviorProps): ConnectApi<{
  rootProps: ButtonHTMLAttributes<HTMLButtonElement>;
}> {
  const {
    disabled = false,
    onClick,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
  } = props;

  // 콜백 stale 방지
  const onClickRef = React.useRef(onClick);
  const onFocusRef = React.useRef(onFocus);
  const onBlurRef = React.useRef(onBlur);
  const onMouseEnterRef = React.useRef(onMouseEnter);
  const onMouseLeaveRef = React.useRef(onMouseLeave);

  React.useEffect(() => {
    onClickRef.current = onClick;
    onFocusRef.current = onFocus;
    onBlurRef.current = onBlur;
    onMouseEnterRef.current = onMouseEnter;
    onMouseLeaveRef.current = onMouseLeave;
  }, [onClick, onFocus, onBlur, onMouseEnter, onMouseLeave]);

  // send 함수 구현
  const send: Send = React.useCallback(
    (event: { type: string; payload?: unknown }) => {
      switch (event.type) {
        case "CLICK": {
          const payload = event.payload as
            | { event?: React.MouseEvent<HTMLButtonElement> }
            | undefined;
          if (payload?.event) {
            onClickRef.current?.(payload.event);
          }
          break;
        }
        case "FOCUS": {
          const payload = event.payload as
            | { event?: React.FocusEvent<HTMLButtonElement> }
            | undefined;
          if (payload?.event) {
            onFocusRef.current?.(payload.event);
          }
          break;
        }
        case "BLUR": {
          const payload = event.payload as
            | { event?: React.FocusEvent<HTMLButtonElement> }
            | undefined;
          if (payload?.event) {
            onBlurRef.current?.(payload.event);
          }
          break;
        }
        case "MOUSE_ENTER": {
          const payload = event.payload as
            | { event?: React.MouseEvent<HTMLButtonElement> }
            | undefined;
          if (payload?.event) {
            onMouseEnterRef.current?.(payload.event);
          }
          break;
        }
        case "MOUSE_LEAVE": {
          const payload = event.payload as
            | { event?: React.MouseEvent<HTMLButtonElement> }
            | undefined;
          if (payload?.event) {
            onMouseLeaveRef.current?.(payload.event);
          }
          break;
        }
      }
    },
    []
  );

  const state: ButtonState = {};
  const ctx: ButtonContext = React.useMemo(
    () => ({ isDisabled: disabled }),
    [disabled]
  );

  return React.useMemo(() => {
    return connect({ state, send, ctx });
  }, [send, ctx]);
}
