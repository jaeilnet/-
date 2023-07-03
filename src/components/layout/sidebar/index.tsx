"use client";

import Button from "@/components/elements/button";
import styles from "./sidebar.module.scss";
import Calendar from "@/components/template/calendar";
import Indicator from "@/components/template/indicator";
import useDate from "@/hooks/useDate";
import { memo } from "react";
import Link from "next/link";
import { ROUTE } from "@/router";

const SideBar = () => {
  const { month, year, handleMonthClick } = useDate();

  return (
    <nav className={styles.sidebar}>
      <Link href={ROUTE.SCHEDULE}>
        <Button>일정 만들기</Button>
      </Link>

      <div className={styles.indicator}>
        <Indicator
          className={styles.iconBox}
          year={year}
          month={month}
          handleMonthClick={handleMonthClick}
        />
      </div>

      <Calendar
        year={year}
        month={month}
        className={styles.sidebar_calendar}
        onClick={(e, d) => console.log(e, d)}
      />
    </nav>
  );
};

export default memo(SideBar);
