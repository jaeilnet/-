import { InputHTMLAttributes, ReactNode } from "react";

export type ErrorStatus = "success" | "error";

export type Error<T> = {
  [k in keyof T]: {
    message: string;
    status: ErrorStatus;
  };
};

export type User = {
  email: string;
  password: string;
};

export type SignUp = {
  profile: string;
  password2: string;
  dob: string;
} & User;

export type InputKeys = User & SignUp;

export type InputType<K> = {
  id: number | string;
  name: keyof K;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder: string;
  label: JSX.Element | string | ReactNode;
};
