"use client";

import { ReactNode, createContext, useState } from "react";

interface DateContextProviderProps {
  children: ReactNode;
}

export const DateContext = createContext({
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  date: new Date().getDate(),
  handleMonthClick: (type: "plus" | "minus") => {},
  handleTodayClick: () => {},
});

export const DateContextProvider = ({ children }: DateContextProviderProps) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());

  const handleMonthClick = (type: "plus" | "minus") => {
    if (type === "minus") {
      setMonth((prev) => (prev === 1 ? 12 : prev - 1));
      if (month === 1) {
        setYear((prev) => prev - 1);
      }
    }
    if (type === "plus") {
      setMonth((prev) => (prev === 12 ? 1 : prev + 1));
      if (month === 12) {
        setYear((prev) => prev + 1);
      }
    }
  };

  const handleTodayClick = () => {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const currentDate = new Date().getDate();

    setYear((prev) => (prev = currentYear));
    setMonth((prev) => (prev = currentMonth));
    setDate((prev) => (prev = currentDate));
  };

  const payload = {
    year,
    month,
    date,
    handleMonthClick,
    handleTodayClick,
  };

  return (
    <DateContext.Provider value={payload}>{children}</DateContext.Provider>
  );
};
