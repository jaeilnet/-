"use client";

import React, { MouseEvent, memo } from "react";

import useMonths from "@/hooks/useMonths";
import { getDay } from "@/utils/date";

import styles from "./calendar.module.scss";

interface CalendarProps {
  year: number;
  month: number;
  className?: string;
  onClick: (e: MouseEvent<HTMLDivElement>, currentDate: Date) => void;
}

const Calendar = ({ year, month, onClick, className }: CalendarProps) => {
  const { calendar, currentDate } = useMonths({ year, month });

  const weekendStyles = (days: number) => {
    return days === 0
      ? styles.sunday
      : days === 6
      ? styles.saturday
      : undefined;
  };

  const handleDaysStyles = () => {
    // 현재 일 변수
    // 달력의 현재 일수만 표시하기 위해 프라이빗 변수를 만들고 클로저로 외부에서 접근하지못하게 캡슐화 함

    // ex) 6월 달력
    // ex) 6월 1일 => true
    // ex) 5월 31일 => false
    let currentMonthDay = false;

    const currentDateStyles = (
      days: number,
      month: number
    ): string | undefined => {
      if (
        days === currentDate.getDate() &&
        month === currentDate.getMonth() + 1 &&
        currentMonthDay
      ) {
        return styles.currentDate;
      }

      return undefined;
    };

    const opacityStyles = (days: number, idx: number): string | undefined => {
      if (idx < 2 && days === 1) {
        currentMonthDay = true;
      } else if (days === 1) {
        currentMonthDay = false;
      }

      return !currentMonthDay ? styles.opacity : undefined;
    };

    return { currentDateStyles, opacityStyles };
  };

  const daysStyles = handleDaysStyles();

  return (
    <ul className={className || styles.calender}>
      <li className={(className && className + "_" + styles.day) || styles.day}>
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
              className={daysStyles.opacityStyles(days, i)}
              onClick={(e) => onClick(e, currentDate)}
            >
              <p
                className={
                  daysStyles.currentDateStyles(days, month) ??
                  weekendStyles(idx)
                }
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
