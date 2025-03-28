import { NextPage } from "next";
import { ButtonHTMLAttributes, ReactNode } from "react";
import style from "./Button.module.scss";

type ButtonVariantType =
  | "cta-btn"
  | "text-cta-btn"
  | "ghost-btn"
  | "cta-ghost-btn"
  | "text-center"
  | "secondary-btn"
  | "icon-btn"
  | "section-row-btn";
type ButtonSizeType =
  | "size-xx-small"
  | "size-xx-small--text-mid"
  | "size-x-small"
  | "size-small"
  | "icon-btn-size"
  | "text-btn-size";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  variant?: ButtonVariantType; //버튼 종류
  size?: ButtonSizeType; //버튼 크기
  leftSlot?: ReactNode; //버튼 왼쪽에 넣는 아이콘
  rightSlot?: ReactNode; //버튼 오른쪽에 넣는 아이콘
  isFullWidth?: boolean; //전체 크기 버튼
  isFullHeight?: boolean; //전체 크기 버튼
}

const Button: NextPage<Props> = ({
  // const Button: React.FC<Props> = ({
  children,
  variant,
  size,
  leftSlot,
  rightSlot,
  isFullWidth,
  isFullHeight,
  ...rest
}) => {
  return (
    <>
      <button
        className={`${variant && style[variant]} ${size && style[size]} ${
          isFullWidth ? style["full-width"] : ""
        } ${isFullHeight ? style["full-height"] : ""} ${style["btn-style"]} ${
          leftSlot || rightSlot ? style["btn-style--have-icon"] : ""
        }`}
        {...rest}
      >
        {leftSlot}
        {children}
        {rightSlot}
      </button>
    </>
  );
};

export default Button;
