import { InputType, User } from "@/types/input";

export const LoginInput: InputType<User>[] = [
  {
    id: 1,
    label: "",
    name: "email",
    placeholder: "email",
    type: "text",
  },
  {
    id: 2,
    label: "",
    name: "password",
    placeholder: "password",
    type: "password",
  },
];

export const errorMessage: Record<keyof User | string, string> = {
  email: "이메일 형식이 맞지 않습니다",
  password: "영문 + 숫자 포함 6자 이상 입력해 주세요",
};
