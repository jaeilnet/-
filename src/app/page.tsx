"use client";

import useMonths from "@/hooks/useMonths";
import styles from "./page.module.scss";
import { getDay } from "@/utils/date";

import useIndicator from "@/hooks/useIndicator";
import Indicator from "@/components/Indicator";

export default function Home() {
  let currentMonthDay = false;

  const { handleIndicator, month } = useIndicator(new Date().getMonth() + 1);
  const { calendar, startMonthLastDay } = useMonths({ year: 2023, month });

  const weekendStyles = (days: number) => {
    return days === 0 ? styles.sunday : days === 6 ? styles.saturday : "";
  };

  return (
    <main className={styles.main}>
      <ul>
        <Indicator
          data={month}
          handleIndicator={handleIndicator}
          className={styles.indicator}
        />
        <li className={styles.day}>
          {Array.from({ length: 7 }, (_, days) => (
            <div key={days}>
              <p className={weekendStyles(days)}>{getDay(days)}</p>
            </div>
          ))}
        </li>
        {calendar().map((week, i) => (
          <li key={i} className={styles.date}>
            {week.map((days, idx) => {
              const opacityStyles = () => {
                if (i < 2 && days === 1) {
                  currentMonthDay = true;
                } else if (days === 1) {
                  currentMonthDay = false;
                }

                return currentMonthDay;
              };

              return (
                <div
                  key={idx}
                  className={opacityStyles() ? "" : styles.opacity}
                >
                  <p className={weekendStyles(idx)}>{days}</p>
                </div>
              );
            })}
          </li>
        ))}
      </ul>
    </main>
  );
}
