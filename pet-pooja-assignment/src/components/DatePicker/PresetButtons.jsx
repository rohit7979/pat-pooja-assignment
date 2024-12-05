import React from "react";

const presets = ["Today", "Yesterday", "This Month", "Last Month", "Custom Range"];

const PresetButtons = ({ selectedPreset, onSelect, styles }) => {
  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      {presets.map((preset) => (
        <button
          key={preset}
          className={`py-2 px-4 rounded-md ${
            selectedPreset === preset
              ? styles?.activeButton || "bg-blue-500 text-white"
              : styles?.button || "bg-gray-200 text-black"
          }`}
          onClick={() => onSelect(preset)}
        >
          {preset}
        </button>
      ))}
    </div>
  );
};

export default PresetButtons;
