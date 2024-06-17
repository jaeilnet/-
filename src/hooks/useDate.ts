"use client";

import { useState } from "react";

const useDate = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  };

  const [year, setYear] = useState(today.year);
  const [month, setMonth] = useState(today.month);
  const [date, setDate] = useState(today.date);

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
    setYear((prev) => (prev = today.year));
    setMonth((prev) => (prev = today.month));
    setDate((prev) => (prev = today.date));
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
