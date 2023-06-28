"use client";

import Button from "@/components/elements/button";
import { memo } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface IndicatorProps {
  year: number;
  month: number;
  handleMonthClick: (type: "minus" | "plus") => void;

  className?: string;
  children?: React.ReactNode;
}

const Indicator = ({
  year,
  month,
  children,
  className,
  handleMonthClick,
}: IndicatorProps) => {
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

export default memo(Indicator);
