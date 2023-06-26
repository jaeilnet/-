"use client";

import useMonths from "@/hooks/useMonths";
import styles from "./page.module.scss";
import { getDay } from "./utils/date";
import Indicator from "./components/Indicator";
import useIndicator from "@/hooks/useIndicator";

export default function Home() {
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
        <li>
          {Array.from({ length: 7 }, (_, days) => (
            <div key={days}>
              <p className={weekendStyles(days)}>{getDay(days)}</p>
            </div>
          ))}
        </li>
        {calendar().map((e, i) => (
          <li key={i}>
            {e.map((days, idx) => {
              const opacityStyles = () => {
                // 조건 찾기
              };

              // opacityStyles();

              return (
                <div
                  key={idx}
                  className={idx > 0 && idx < 30 ? "" : styles.opacity}
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
