import { useButton } from "@/hooks/button/useButton";
import { type ButtonRecipeProps, button } from "@/recipes/button/button.recipe";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type { ButtonVariant } from "@/recipes/button/button.recipe";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonRecipeProps {
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
  type,
  ...rest
}: ButtonProps) {
  // 기능: 상태 관리 및 상호작용 처리
  const api = useButton(rest);

  // 형태: slot별 className
  const classNames = button({ variant, full });

  // 기능과 형태를 조합하여 최종 렌더링
  const rootClassName = [classNames.root, className].filter(Boolean).join(" ");

  return (
    <button
      {...api.rootProps}
      type={type ?? api.rootProps.type}
      className={rootClassName}
    >
      {leftIconNode ? (
        <>
          <span className={classNames.leftIcon}>{leftIconNode}</span>
          {children}
          <span className={classNames.iconSpacer} />
        </>
      ) : rightIconNode ? (
        <>
          <span className={classNames.iconSpacer} />
          {children}
          <span className={classNames.rightIcon}>{rightIconNode}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
