import React from "react";

const FilterInput = ({ columnKey, filters, onFilterChange }) => {
  return (
    <input
      type="text"
      className="mt-1 border border-gray-300 p-1 rounded text-sm"
      placeholder={`Filter ${columnKey}`}
      value={filters[columnKey] || ""}
      onChange={(e) =>
        onFilterChange({ ...filters, [columnKey]: e.target.value })
      }
    />
  );
};

export default FilterInput;
