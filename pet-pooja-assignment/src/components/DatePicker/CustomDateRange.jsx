import React from "react";
import DateInput from "./DateInput";

const CustomDateRange = ({ customRange, setCustomRange, styles }) => {
  const handleDateChange = (field, value) => {
    setCustomRange(field, value); 
  };

  return (
    <div className="flex flex-col gap-4">
      <DateInput
        label="From"
        value={customRange.start}
        onChange={(e) => handleDateChange("start", e.target.value)}
        styles={styles}
      />
      <DateInput
        label="To"
        value={customRange.end}
        onChange={(e) => handleDateChange("end", e.target.value)}
        styles={styles}
        min={customRange.start} 
      />
    </div>
  );
};

export default CustomDateRange;
