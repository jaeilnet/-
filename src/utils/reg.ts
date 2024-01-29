import { InputKeys } from "@/types/input";

export const reg_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const reg_password = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

export const regObj: Partial<Record<keyof InputKeys, RegExp>> = {
  email: reg_email,
  password: reg_password,
  password2: reg_password,
};

interface handleValidation {
  [k: string]: (value: string) => boolean;
}

const handleValidation = (): handleValidation => {
  const emailValidation = (value: string): boolean => {
    const regMatch = reg_email.test(value);

    return regMatch;
  };

  const passwordValidation = (value: string): boolean => {
    const regMatch = reg_password.test(value);

    return regMatch;
  };

  const password2Validation = (value: string): boolean => {
    const regMatch = reg_password.test(value);

    return regMatch;
  };

  return {
    email: emailValidation,
    password: passwordValidation,
    password2: password2Validation,
  };
};

export const validationCheck = handleValidation();
