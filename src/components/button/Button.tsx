"use client";

import { cn } from "@/utils/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
  type ButtonVariant,
  baseStyles,
  iconStyles,
  variantStyles,
} from "./Button.styles";

export type { ButtonVariant };

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
  type = "button",
  disabled,
  ...rest
}: ButtonProps) {
  const layoutStyles =
    leftIconNode || rightIconNode ? "justify-between" : "justify-center gap-1";

  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        baseStyles,
        layoutStyles,
        variantStyles[variant],
        full && "w-full",
        className
      )}
      {...rest}
    >
      {leftIconNode ? (
        <>
          <span className={iconStyles.leftIcon}>{leftIconNode}</span>
          {children}
          <span className={iconStyles.iconSpacer} />
        </>
      ) : rightIconNode ? (
        <>
          <span className={iconStyles.iconSpacer} />
          {children}
          <span className={iconStyles.rightIcon}>{rightIconNode}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
