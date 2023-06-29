"use client";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Input = ({ className, label, ...props }: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
