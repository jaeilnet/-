import { ErrorStatus } from "@/types/input";
import styles from "./errorMessage.module.scss";

interface ErrorMessageProps {
  errorMessage: string;
  errorStatus: ErrorStatus;
}

const ErrorMessage = ({ errorMessage, errorStatus }: ErrorMessageProps) => {
  return <p className={styles[errorStatus]}>{errorMessage}</p>;
};

export default ErrorMessage;
