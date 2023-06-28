"use client";

import React, { memo, useCallback } from "react";

import useMonths from "@/hooks/useMonths";
import { getDay } from "@/utils/date";

import styles from "./calendar.module.scss";

interface CalendarProps {
  year: number;
  month: number;
  className?: string;
}

const Calendar = ({ year, month, className }: CalendarProps) => {
  let currentMonthDay = false;

  const { calendar, currentDate } = useMonths({ year, month });

  const weekendStyles = (days: number) => {
    return days === 0 ? styles.sunday : days === 6 ? styles.saturday : "";
  };

  const currentDateStyles = (days: number, month: number) => {
    if (
      days === currentDate.getDate() &&
      month === currentDate.getMonth() + 1 &&
      currentMonthDay
    ) {
      return true;
    }

    return false;
  };

  const opacityStyles = (days: number, idx: number) => {
    if (idx < 2 && days === 1) {
      currentMonthDay = true;
    } else if (days === 1) {
      currentMonthDay = false;
    }

    return currentMonthDay;
  };

  return (
    <ul className={className || styles.calender}>
      <li className={styles.day}>
        {Array.from({ length: 7 }, (_, days) => (
          <div key={days}>
            <p className={weekendStyles(days)}>{getDay(days)}</p>
          </div>
        ))}
      </li>
      {calendar().map((week, i) => (
        <li key={i} className={styles.date}>
          {week.map((days, idx) => (
            <div
              key={idx}
              className={`
               ${opacityStyles(days, i) ? "" : styles.opacity}`}
            >
              <p
                className={`${
                  currentDateStyles(days, month) ? styles.currentDate : ""
                } ${weekendStyles(idx)}`}
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
