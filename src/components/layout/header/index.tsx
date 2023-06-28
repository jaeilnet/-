import styles from "./header.module.scss";
import Button from "@/components/elements/button";

import Indicator from "@/components/template/indicator";
import { useContext } from "react";
import { DateContext } from "@/context/DateProvider";
import Link from "next/link";
import { ROUTE } from "@/route";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const { month, year, handleMonthClick, handleTodayClick } =
    useContext(DateContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        로고
        <div>캘린더</div>
      </div>
      <div className={styles.indicator}>
        <Indicator
          className={styles.iconBox}
          month={month}
          year={year}
          handleMonthClick={handleMonthClick}
        >
          <Button onClick={handleTodayClick}>오늘</Button>
        </Indicator>
      </div>

      <Link href={ROUTE.LOGIN}>
        <Button>로그인</Button>
      </Link>
    </header>
  );
};

export default Header;
