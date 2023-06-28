"use client";

import { useState } from "react";

const useDate = () => {
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
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDate = new Date().getDate();

    setYear((prev) => (prev = currentYear));
    setMonth((prev) => (prev = currentMonth));
    setDate((prev) => (prev = currentDate));
  };

  return {
    year,
    month,
    date,
    handleMonthClick,
    handleTodayClick,
  };
};

export default useDate;
