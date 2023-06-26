"use client";

interface IndicatorProps {
  className: string;
  data: number;
  handleIndicator: (type: "plus" | "minus") => void;
}

const Indicator = ({ className, data, handleIndicator }: IndicatorProps) => {
  return (
    <div className={className}>
      <div onClick={() => handleIndicator("minus")}>-</div>
      {data}
      <div onClick={() => handleIndicator("plus")}>+</div>
    </div>
  );
};

export default Indicator;
