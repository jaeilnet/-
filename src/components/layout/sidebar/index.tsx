"use client";

import Button from "@/components/elements/button";
import styles from "./sidebar.module.scss";
import Calendar from "@/components/template/calendar";
import Indicator from "@/components/template/indicator";
import useDate from "@/hooks/useDate";
import { memo } from "react";

const SideBar = () => {
  const { month, year, handleMonthClick } = useDate();

  return (
    <nav className={styles.sidebar}>
      <Button>일정 만들기</Button>

      <div className={styles.indicator}>
        <Indicator
          className={styles.iconBox}
          year={year}
          month={month}
          handleMonthClick={handleMonthClick}
        />
      </div>

      <Calendar year={year} month={month} className={styles.sidebar_calendar} />
    </nav>
  );
};

export default memo(SideBar);
