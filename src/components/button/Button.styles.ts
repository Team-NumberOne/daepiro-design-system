/**
 * Button 컴포넌트 스타일 정의
 */

export type ButtonVariant = "default" | "gray" | "primary";

export const baseStyles = [
  // Typography (subtitle-1)
  "font-semibold text-base leading-6 tracking-[0.15px]",
  // Layout
  "rounded-lg px-4 h-12 flex items-center",
  // Base states
  "border-none cursor-pointer",
  "disabled:opacity-50 disabled:cursor-not-allowed",
] as const;

export const variantStyles: Record<ButtonVariant, readonly string[]> = {
  default: [
    "bg-gray-50 text-gray-700",
    "focus-visible:outline-2 focus-visible:outline-gray-700 focus-visible:outline-offset-2",
    "hover:not-disabled:bg-gray-75 hover:not-disabled:text-gray-600",
    "active:not-disabled:bg-gray-75 active:not-disabled:text-gray-600 active:not-disabled:shadow-[0_0_1px_0_rgba(34,37,48,0.15),1px_1px_2px_0_rgba(34,37,48,0.15)]",
  ],
  gray: [
    "bg-gray-700 text-white",
    "focus-visible:outline-2 focus-visible:outline-gray-300 focus-visible:outline-offset-2",
    "hover:not-disabled:bg-gray-600 hover:not-disabled:text-white",
    "active:not-disabled:bg-gray-600 active:not-disabled:text-white active:not-disabled:shadow-[0_0_1px_0_rgba(34,37,48,0.15),1px_1px_2px_0_rgba(34,37,48,0.15)]",
  ],
  primary: [
    "bg-primary-500 text-white",
    "focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2",
    "hover:not-disabled:bg-primary-600 hover:not-disabled:text-white",
    "active:not-disabled:bg-primary-600 active:not-disabled:text-white active:not-disabled:shadow-[0_0_1px_0_rgba(34,37,48,0.15),1px_1px_2px_0_rgba(34,37,48,0.15)]",
  ],
} as const;

export const iconStyles = {
  leftIcon: "inline-flex flex-shrink-0",
  rightIcon: "inline-flex flex-shrink-0",
  iconSpacer: "inline-flex w-6 flex-shrink-0",
} as const;
