"use client";

import Button from "@/components/elements/button";
import styles from "./login.module.scss";
import Input from "@/components/elements/input";
import { MdLock, MdOutlineEmail } from "react-icons/md";
import { useInput } from "@/hooks/useInput";
import { User } from "@/types/input";
import Link from "next/link";
import { ROUTE } from "@/router";

const LoginPage = () => {
  const { value, error, disabled, handleOnChange, handleOnSubmit } =
    useInput<User>({
      initVal: {
        email: "",
        password: "",
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
      },
    });

  return (
    <section className={styles.login}>
      <form
        className={styles.form}
        onSubmit={(e) => handleOnSubmit(e, { fetcher: () => {} })}
      >
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

        <div className={styles.formBtn}>
          <Button disabled={disabled}>로그인</Button>
          <Link href={ROUTE.SIGNUP}>
            <Button onClick={() => console.log("first")}>회원가입</Button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
