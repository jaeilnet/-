"use client";

import Calendar from "@/components/template/calendar";
import { DateContext } from "@/context/DateProvider";

import { useContext } from "react";

export default function Home() {
  const { month, year, ...rest } = useContext(DateContext);

  console.log(month, year, rest);

  return (
    <>
      <Calendar year={year} month={month} />

      <p>custom calender</p>
      <Calendar year={year} month={month} />
    </>
  );
}
