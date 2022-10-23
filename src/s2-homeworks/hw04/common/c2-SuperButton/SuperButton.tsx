import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./SuperButton.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
  xType,
  className,
  disabled,
  ...restProps
}) => {
  const finalClassName = `${s.button} ${s.default} ${
    disabled ? s.disabled : ""
  } ${xType && !disabled ? s[xType] : ""} ${className ? className : ""}`;

  return (
    <button disabled={disabled} className={finalClassName} {...restProps} />
  );
};

export default SuperButton;
