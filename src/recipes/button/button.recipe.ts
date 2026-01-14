import {
  buttonVariants,
  fullWidth,
  iconSpacer,
  leftIcon,
  rightIcon,
} from "./button.recipe.css";

/**
 * Button의 variant 타입
 */
export type ButtonVariant = "default" | "gray" | "primary";

/**
 * Button recipe의 props
 */
export interface ButtonRecipeProps {
  variant?: ButtonVariant;
  full?: boolean;
}

/**
 * Button의 slot 타입
 */
export type ButtonSlots = "root" | "leftIcon" | "rightIcon" | "iconSpacer";

/**
 * Button recipe의 반환 타입
 */
export type ButtonRecipeResult = Record<ButtonSlots, string>;

/**
 * Button recipe 함수
 * slot별 className을 반환
 */
export function button(props: ButtonRecipeProps = {}): ButtonRecipeResult {
  const { variant = "default", full = false } = props;

  const variantClass = buttonVariants[variant];
  const rootClasses = [variantClass, full ? fullWidth : undefined]
    .filter(Boolean)
    .join(" ");

  return {
    root: rootClasses,
    leftIcon: leftIcon,
    rightIcon: rightIcon,
    iconSpacer: iconSpacer,
  };
}
