"use client";

import Button from "@/components/elements/button";
import { DateContext } from "@/context/DateProvider";
import { useContext } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface IndicatorProps {
  className?: string;
  children?: React.ReactNode;
}

const Indicator = ({ className, children }: IndicatorProps) => {
  const { handleMonthClick, month, year } = useContext(DateContext);

  return (
    <>
      <h1>
        {year}년 {month}월
      </h1>
      <div className={className}>
        <Button onClick={() => handleMonthClick("minus")}>
          <MdChevronLeft />
        </Button>
        {children}
        <Button onClick={() => handleMonthClick("plus")}>
          <MdChevronRight />
        </Button>
      </div>
    </>
  );
};

export default Indicator;
