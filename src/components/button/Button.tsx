import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
  buttonVariants,
  fullWidth,
  iconSpacer,
  leftIcon,
  rightIcon,
} from "./Button.css";

export type ButtonVariant = "default" | "gray" | "primary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  full?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Button({
  variant = "default",
  full = false,
  leftIcon: leftIconNode,
  rightIcon: rightIconNode,
  className,
  children,
  ...rest
}: ButtonProps) {
  const variantClass = buttonVariants[variant];
  const classes = [variantClass, full ? fullWidth : undefined, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={classes} {...rest}>
      {leftIconNode ? (
        <>
          <span className={leftIcon}>{leftIconNode}</span>
          {children}
          <span className={iconSpacer} />
        </>
      ) : rightIconNode ? (
        <>
          <span className={iconSpacer} />
          {children}
          <span className={rightIcon}>{rightIconNode}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
