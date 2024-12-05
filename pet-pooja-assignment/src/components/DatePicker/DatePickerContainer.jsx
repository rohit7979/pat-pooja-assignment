import React, { useState, useEffect } from "react";
import PresetButtons from "./PresetButtons";
import CustomDateRange from "./CustomDateRange";

const DatePickerContainer = ({ onDateChange, styles }) => {
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [customRange, setCustomRange] = useState({ start: "", end: "" });
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
  
    if (selectedPreset !== "Custom Range") {
      let text = "";
      switch (selectedPreset) {
        case "Today":
          const today = new Date().toISOString().split("T")[0];
          text = `Today: ${today}`;
          setCustomRange({ start: today, end: today });
          break;

        case "Yesterday":
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayDate = yesterday.toISOString().split("T")[0];
          text = `Yesterday: ${yesterdayDate}`;
          setCustomRange({ start: yesterdayDate, end: yesterdayDate });
          break;

        case "This Month":
          const now = new Date();
          const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
          const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
          text = `This Month: ${startOfMonth.toISOString().split("T")[0]} to ${endOfMonth.toISOString().split("T")[0]}`;
          setCustomRange({
            start: startOfMonth.toISOString().split("T")[0],
            end: endOfMonth.toISOString().split("T")[0],
          });
          break;

        case "Last Month":
          const startOfLastMonth = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
          const endOfLastMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
          text = `Last Month: ${startOfLastMonth.toISOString().split("T")[0]} to ${endOfLastMonth.toISOString().split("T")[0]}`;
          setCustomRange({
            start: startOfLastMonth.toISOString().split("T")[0],
            end: endOfLastMonth.toISOString().split("T")[0],
          });
          break;

        default:
          text = "No selection made";
      }
      setDisplayText(text);
      onDateChange(text);
    } else {
   
      setDisplayText(
        `Custom Range: ${customRange.start || "Start Date"} to ${customRange.end || "End Date"}`
      );
      onDateChange(customRange);
    }
  }, [selectedPreset, customRange, onDateChange]);

  const handleCustomRangeChange = (field, value) => {
    setCustomRange((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className={`p-4 rounded-lg ${styles?.container}`}>
      <PresetButtons
        selectedPreset={selectedPreset}
        onSelect={setSelectedPreset}
        styles={styles}
      />
      {selectedPreset === "Custom Range" && (
        <CustomDateRange
          customRange={customRange}
          setCustomRange={handleCustomRangeChange}
          styles={styles}
        />
      )}
      <div className="mt-4 p-2 text-lg bg-gray-100 rounded-md">
        <strong>Selected:</strong> {displayText}
      </div>
    </div>
  );
};

export default DatePickerContainer;
