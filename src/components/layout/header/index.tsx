"use client";

import styles from "./header.module.scss";
import Button from "@/components/elements/button";

import Indicator from "@/components/template/indicator";
import { useContext } from "react";
import { DateContext } from "@/context/DateProvider";
import Link from "next/link";
import { ROUTE } from "@/route";
import { usePathname, useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";
import { HEADER_TITLE } from "@/route";

const Header = () => {
  const { month, year, handleMonthClick, handleTodayClick } =
    useContext(DateContext);

  const router = useRouter();
  const pathname = usePathname();

  const split = pathname.split("/");
  const path = split[split.length - 1];

  const handleHeaderTitle = () => {
    const upperPathname = path.toUpperCase();

    if (upperPathname in HEADER_TITLE) {
      return HEADER_TITLE[upperPathname as keyof typeof HEADER_TITLE];
    }

    return "";
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        로고
        <div>캘린더</div>
      </div>
      {pathname === "/" ? (
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
      ) : (
        <div className={styles.logo}>
          <MdArrowBackIosNew size={28} onClick={() => router.back()} />
          <h1>{handleHeaderTitle()}</h1>
        </div>
      )}

      <Link href={ROUTE.LOGIN}>
        <Button>로그인</Button>
      </Link>
    </header>
  );
};

export default Header;
