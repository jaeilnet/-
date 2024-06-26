import {ComponentPropsWithRef} from "react";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
    label: string;
}
export const Button = ({label, ...props}: ButtonProps) => {
    return <button {...props}>{label}</button>;
};
