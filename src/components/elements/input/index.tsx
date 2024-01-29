"use client";

import { InputHTMLAttributes, ReactNode } from "react";
import ErrorMessage from "../errorMessage";
import { Error } from "@/types/input";

import styles from "./input.module.scss";

interface InputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  error?: Error<T>;
  label?: string | JSX.Element;
  className?: string;
  children?: ReactNode;
}

const Input = <T extends Record<string, string>>({
  error,
  className,
  label,
  children,
  ...props
}: InputProps<T>) => {
  return (
    <div className={className ?? styles.default}>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
      {children}

      {error && props.name && error[props.name] ? (
        <ErrorMessage
          errorMessage={error[props.name].message}
          errorStatus={error[props.name].status}
        />
      ) : null}
    </div>
  );
};

export default Input;
