import styles from "./header.module.scss";
import Button from "@/components/elements/button";
import ClientIndicator from "@/components/client";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        로고
        <div>캘린더</div>
      </div>
      <div className={styles.indicator}>
        <ClientIndicator className={styles.iconBox} />
      </div>

      <Button>로그인</Button>
    </header>
  );
};

export default Header;
