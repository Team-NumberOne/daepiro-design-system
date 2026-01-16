/**
 * Modal 컴포넌트 스타일 정의
 */

export type ModalSize = "small" | "medium" | "large";

/**
 * Modal Overlay 스타일
 */
export const overlayStyles = [
  // Base styles
  "fixed inset-0 z-[1000] flex items-center justify-center",
  // Background
  "bg-black/60",
  // Transitions
  "transition-opacity duration-200 ease-in-out",
  // States
  "opacity-0 pointer-events-none",
  "data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto",
  "data-[closing=true]:opacity-0",
] as const;

/**
 * Modal Content 스타일
 */
export const contentBaseStyles = [
  // Base styles
  "relative bg-white rounded-[20px] p-6",
  // Sizing
  "max-w-[90vw] max-h-[90vh] overflow-auto",
  // Shadow
  "shadow-[0_0_8px_0_rgba(0,0,0,0.10),0_0_20px_0_rgba(0,0,0,0.10)]",
  // Transitions
  "transition-transform duration-200 ease-in-out",
  // States
  "scale-95",
  "data-[open=true]:scale-100",
  "data-[closing=true]:scale-95",
] as const;

/**
 * Modal Content Size Variants
 */
export const contentSizeStyles: Record<ModalSize, string> = {
  small: "w-[400px]",
  medium: "w-[600px]",
  large: "w-[800px]",
} as const;

/**
 * Modal CloseButton 스타일
 */
export const closeButtonStyles = [
  // Position
  "absolute top-4 right-4",
  // Sizing
  "w-8 h-8",
  // Layout
  "flex items-center justify-center",
  // Base styles
  "border-none bg-transparent rounded cursor-pointer",
  // Colors
  "text-gray-600",
  // Transitions
  "transition-colors duration-150 ease-in-out",
  // States
  "hover:bg-gray-50",
  "active:bg-gray-100",
  "focus-visible:outline-2 focus-visible:outline-gray-700 focus-visible:outline-offset-2",
] as const;

/**
 * Modal Header 스타일
 */
export const headerStyles = [
  "mt-0 mb-4 text-xl font-semibold leading-7 text-gray-900",
] as const;
