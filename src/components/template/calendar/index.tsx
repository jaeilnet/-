"use client";

import React, { memo } from "react";

import useMonths from "@/hooks/useMonths";
import { getDay } from "@/utils/date";

import styles from "./calendar.module.scss";
import { clsx } from "clsx";

interface CalendarProps {
  year: number;
  month: number;
  className?: string;
}

let currentMonthDay = false;

const Calendar = ({ year, month, className }: CalendarProps) => {
  const { calendar, currentDate, ...rest } = useMonths({ year, month });

  const weekendStyles = (days: number) => {
    return days === 0 ? styles.sunday : days === 6 ? styles.saturday : "";
  };

  const currentDateStyles = (days: number, month: number): boolean => {
    return (
      days === currentDate.getDate() && month === currentDate.getMonth() + 1
    );
  };

  const opacityStyles = (days: number, idx: number) => {
    if (idx < 2 && days === 1) {
      currentMonthDay = true;
    } else if (days === 1) {
      currentMonthDay = false;
    }

    return currentMonthDay;
  };

  console.log(calendar, currentDate, rest, currentMonthDay);

  return (
    <ul className={clsx(className ?? styles.calender)}>
      <li
        className={clsx(styles.day, {
          [styles.className]: className + "_" + styles.day,
        })}
      >
        {Array.from({ length: 7 }, (_, days) => (
          <div key={days}>
            <p className={weekendStyles(days)}>{getDay(days)}</p>
          </div>
        ))}
      </li>
      {calendar.map((week, i) => (
        <li key={i} className={styles.date}>
          {week.map((days, idx) => (
            <div
              key={idx}
              className={clsx(opacityStyles(days, i) ? "" : styles.opacity)}
            >
              <p
                className={clsx(
                  currentDateStyles(days, month) ? styles.currentDate : "",
                  weekendStyles(idx)
                )}
              >
                {days}
              </p>
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default memo(Calendar);
