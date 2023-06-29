import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: "default" | "";
  children: React.ReactNode;
}

const Button = ({ type = "default", children, ...props }: ButtonProps) => {
  return (
    <button className={styles[type]} {...props}>
      {children}
    </button>
  );
};

export default Button;
