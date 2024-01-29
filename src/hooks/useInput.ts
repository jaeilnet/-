"use client";

import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { Error } from "@/types/input";
import { errorMessage } from "@/constant/input";
import { validationCheck } from "@/utils/reg";

interface InputHookProps<T> {
  initVal: T;
  initError: Error<T>;
}

export const useInput = <T extends Record<string, string>>({
  initVal,
  initError,
}: InputHookProps<T>) => {
  const [value, setValue] = useState<T>(initVal);
  const [error, setError] = useState<Error<T>>(initError);
  const [disabled, setDisabled] = useState<boolean>(true);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    handleValidation(name, value);

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = (
    e: FormEvent<HTMLFormElement>,
    { fetcher }: { fetcher: () => void }
  ) => {
    e.preventDefault();

    const isValues = disabledCheck();

    if (!isValues) return;

    fetcher();

    console.log(value);
  };

  const handleValidation = (name: string, value: string) => {
    const validation = validationCheck[name](value);

    if (value.length > 0) {
      setError((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          message: !validation ? errorMessage[name] : "",
          status: !validation ? "error" : "success",
        },
      }));
    }

    setDisabled(disabledCheck());
  };

  const disabledCheck = useCallback(
    () =>
      Object.values(error).some(
        (e) => e.status === null || e.status === "error"
      ),
    [error]
  );

  return {
    value,
    error,
    disabled,
    handleOnChange,
    handleOnSubmit,
  };
};
