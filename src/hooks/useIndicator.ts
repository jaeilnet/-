"use client";

import React, { useState } from "react";

const useIndicator = (initVal: number) => {
  const [month, setMonth] = useState(initVal);

  const handleIndicator = (type: "plus" | "minus") => {
    if (type === "minus") setMonth((prev) => prev - 1);
    if (type === "plus") setMonth((prev) => prev + 1);
  };

  return {
    month,
    handleIndicator,
  };
};

export default useIndicator;
