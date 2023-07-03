"use client";

import Input from "@/components/elements/input";
import styles from "./signup.module.scss";
import { useInput } from "@/hooks/useInput";
import { SignUp } from "@/types/input";
import { MdLock, MdOutlineEmail } from "react-icons/md";
import Calendar from "@/components/template/calendar";

const SignUpPage = () => {
  const { value, error, disabled, handleOnChange, handleOnSubmit } =
    useInput<SignUp>({
      initVal: {
        profile: "",
        email: "",
        password: "",
        password2: "",
        dob: "",
      },
      initError: {
        email: {
          message: "",
          status: "error",
        },
        password: {
          message: "",
          status: "error",
        },
        password2: {
          message: "",
          status: "error",
        },
        dob: {
          message: "",
          status: "error",
        },
        profile: {
          message: "",
          status: "error",
        },
      },
    });

  console.log(value);
  return (
    <section className={styles.signup}>
      <form>
        <Input
          placeholder="email"
          type="text"
          name={"email"}
          value={value.email}
          onChange={handleOnChange}
          label={<MdOutlineEmail />}
          error={error}
        />
        <Input
          placeholder="password"
          type="password"
          name={"password"}
          value={value.password}
          error={error}
          onChange={handleOnChange}
          label={<MdLock />}
        />
        <Input
          placeholder="password2"
          type="password"
          name={"password2"}
          value={value.password2}
          error={error}
          onChange={handleOnChange}
          label={<MdLock />}
        />
        <div>
          <Calendar
            className={styles.signUp_calendar}
            year={new Date().getFullYear()}
            month={new Date().getMonth() + 1}
            onClick={() => console.log("first")}
          />
        </div>
      </form>
    </section>
  );
};

export default SignUpPage;
