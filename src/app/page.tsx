"use client";

import Calendar from "@/components/template/calendar";
import { DateContext } from "@/context/DateProvider";

import { useContext } from "react";

export default function Home() {
  const { month, year } = useContext(DateContext);

  return <Calendar year={year} month={month} />;
}
