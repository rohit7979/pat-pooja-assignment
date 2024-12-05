import React from "react";

const DateInput = ({ label, value, onChange, styles, min }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2">{label}</label>
      <input
        type="date"
        value={value}
        onChange={onChange}
        min={min} 
        className={`p-2 border rounded-md ${styles?.input || "border-gray-300"}`}
      />
    </div>
  );
};

export default DateInput;
