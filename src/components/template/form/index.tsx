import ErrorMessage from "@/components/elements/errorMessage";
import Input from "@/components/elements/input";
import { Fragment, ReactNode } from "react";

interface FormTemplateProps {
  children: ReactNode;
  className?: string;
}

const Form = ({ className, children }: FormTemplateProps) => {
  return <div className={className}>{children}</div>;
};

export const FormTemplate = Object.assign(Form, {
  Input: Input,
  ErrorMessage: ErrorMessage,
});
