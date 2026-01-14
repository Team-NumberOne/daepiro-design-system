import {
  closeButton,
  content,
  contentSizes,
  header,
  overlay,
} from "./modal.recipe.css";

/**
 * Modal recipe의 props
 */
export interface ModalRecipeProps {
  size?: "small" | "medium" | "large";
}

/**
 * Modal의 slot 타입
 */
export type ModalSlots = "overlay" | "content" | "closeButton" | "header";

/**
 * Modal recipe의 반환 타입
 */
export type ModalRecipeResult = Record<ModalSlots, string>;

/**
 * Modal Header recipe 함수
 */
export function modalHeader(): string {
  return header;
}

/**
 * Modal recipe 함수
 * slot별 className을 반환
 */
export function modal(props: ModalRecipeProps = {}): ModalRecipeResult {
  const { size = "medium" } = props;

  const sizeClass = contentSizes[size];
  const contentClasses = [content, sizeClass].filter(Boolean).join(" ");

  return {
    overlay: overlay,
    content: contentClasses,
    closeButton: closeButton,
    header: modalHeader(),
  };
}
