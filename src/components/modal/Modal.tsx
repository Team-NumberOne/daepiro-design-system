import { Button } from "@/components/button/Button";
import { useModal } from "@/hooks/modal/useModal";
import { Icons } from "@/icons";
import {
  type ModalRecipeProps,
  modal,
  modalHeader,
} from "@/recipes/modal/modal.recipe";
import React, { createContext, useContext } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type { ModalRecipeProps } from "@/recipes/modal/modal.recipe";
export type {
  ModalSlots,
  ModalRecipeResult,
} from "@/recipes/modal/modal.recipe";

/**
 * Modal Context 타입
 */
interface ModalContextValue {
  open: boolean;
  api: ReturnType<typeof useModal>;
  classNames: ReturnType<typeof modal>;
  size: "small" | "medium" | "large";
}

/**
 * Modal Context
 */
const ModalContext = createContext<ModalContextValue | null>(null);

/**
 * Modal Context hook
 * 컴파운드 패턴에서만 사용
 */
function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Modal compound components must be used within Modal.Root");
  }
  return context;
}

/**
 * Modal Root Props
 */
export interface ModalRootProps extends ModalRecipeProps {
  open: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  children: ReactNode;
}

/**
 * Modal Root 컴포넌트
 * 상태 관리 및 Context 제공
 */
function ModalRoot({
  open,
  onOpenChange,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  size = "medium",
  children,
}: ModalRootProps) {
  // 기능: 상태 관리 및 상호작용 처리
  const api = useModal({
    open,
    onOpenChange,
    closeOnOverlayClick,
    closeOnEscape,
  });

  // 형태: slot별 className
  const classNames = modal({ size });

  // 모달이 닫혀있고 닫는 중도 아니면 렌더링하지 않음
  if (!open && !api.isClosing) {
    return null;
  }

  const contextValue: ModalContextValue = {
    open,
    api,
    classNames,
    size,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
}

/**
 * Modal Overlay Props
 */
export interface ModalOverlayProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Modal Overlay 컴포넌트
 */
function ModalOverlay({ className, children, ...rest }: ModalOverlayProps) {
  const { api, classNames } = useModalContext();

  return (
    <div
      {...api.overlayProps}
      className={[classNames.overlay, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * Modal Content Props
 */
export interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Modal Content 컴포넌트
 */
function ModalContent({ className, children, ...rest }: ModalContentProps) {
  const { api, classNames } = useModalContext();

  return (
    <div
      {...api.contentProps}
      className={[classNames.content, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * Modal CloseButton Props
 */
export interface ModalCloseButtonProps
  extends HTMLAttributes<HTMLButtonElement> {}

/**
 * Modal CloseButton 컴포넌트
 */
function ModalCloseButton({
  className,
  children,
  ...rest
}: ModalCloseButtonProps) {
  const { api, classNames } = useModalContext();

  return (
    <button
      {...api.closeButtonProps}
      className={[classNames.closeButton, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children ?? <Icons.Close size="md" />}
    </button>
  );
}

/**
 * Modal Header Props
 */
export interface ModalHeaderProps extends HTMLAttributes<HTMLHeadingElement> {}

/**
 * Modal Header 컴포넌트
 */
function ModalHeader({ className, children, ...rest }: ModalHeaderProps) {
  const headerClassName = modalHeader();

  return (
    <h2
      className={[headerClassName, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </h2>
  );
}

/**
 * 기존 Modal 컴포넌트 (하위 호환성 유지)
 * 내부적으로 컴파운드 패턴 사용
 */
export interface ModalProps extends ModalRootProps {
  showCloseButton?: boolean;
  actionButton?: {
    label: string;
    onClick?: () => void;
  };
}

export function Modal({
  showCloseButton = true,
  children,
  actionButton,
  ...rootProps
}: ModalProps) {
  return (
    <ModalRoot {...rootProps}>
      <ModalOverlay>
        <ModalContent>
          {showCloseButton && <ModalCloseButton />}
          {children}
          {actionButton && (
            <div
              style={{
                marginTop: "32px",
                display: "flex",
              }}
            >
              <Button variant="primary" onClick={actionButton.onClick} full>
                {actionButton.label}
              </Button>
            </div>
          )}
        </ModalContent>
      </ModalOverlay>
    </ModalRoot>
  );
}

// 컴파운드 패턴 컴포넌트 export
Modal.Root = ModalRoot;
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.CloseButton = ModalCloseButton;
Modal.Header = ModalHeader;
