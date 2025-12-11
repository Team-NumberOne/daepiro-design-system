import type { ButtonHTMLAttributes, ReactNode } from "react";
import { floating, rightIcon } from "./Floating.css";

export interface FloatingProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  rightIcon?: ReactNode;
}

export function Floating({
  rightIcon: rightIconNode,
  className,
  children,
  ...rest
}: FloatingProps) {
  const classes = [floating, className].filter(Boolean).join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
      {rightIconNode && <span className={rightIcon}>{rightIconNode}</span>}
    </button>
  );
}

