"use client";

import { useContext } from "react";
import Indicator from "../template/indicator";
import Button from "../elements/button";
import { DateContext } from "@/context/DateProvider";

interface Props {
  className: string;
}

const ClientIndicator = ({ className }: Props) => {
  const { handleTodayClick } = useContext(DateContext);

  return (
    <Indicator className={className}>
      <Button onClick={handleTodayClick}>오늘</Button>
    </Indicator>
  );
};

export default ClientIndicator;
