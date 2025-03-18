import { NextPage } from "next";
import style from "./Input.module.scss";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  errorText?: string;
  successText?: string;
  register?: UseFormRegisterReturn;
  value?: string;
  changeFunc?: () => void;
}

const TextInput: NextPage<Props> = ({
  name,
  label,
  errorText,
  successText,
  register,
  value,
  changeFunc,
  ...rest
}) => {
  return (
    <div className={style["text-input"]}>
      <label htmlFor={name}>{label}</label>

      {register ? (
        <input {...register} {...rest} />
      ) : (
        <input value={value} onChange={changeFunc} {...rest} />
      )}

      {errorText && (
        <span className={style["text-input__error-text"]}>{errorText}</span>
      )}
      {successText && (
        <span className={style["text-input__success-text"]}>{successText}</span>
      )}
    </div>
  );
};

export default TextInput;
