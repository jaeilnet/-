import Button from "@/components/elements/button";
import styles from "./login.module.scss";

const LoginPage = () => {
  return (
    <section className={styles.login}>
      <form>
        <label>아이디</label>
        <input type="text" />
        <label>비밀번호</label>
        <input type="text" />

        <Button>로그인</Button>
      </form>
    </section>
  );
};

export default LoginPage;
