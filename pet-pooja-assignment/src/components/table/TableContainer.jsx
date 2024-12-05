import React, { useState, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { applyFilters, applySorting } from "../../utils/sorting";

const TableContainer = ({ data, columns, headerStyle, bodyStyle }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "default" });
  const [filters, setFilters] = useState({});

  const filteredData = useMemo(() => applyFilters(data, filters), [data, filters]);
  const sortedData = useMemo(() => applySorting(filteredData, sortConfig), [filteredData, sortConfig]);

  return (
    <div className="overflow-hidden border border-gray-300 rounded-lg shadow-lg">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <TableHeader
            columns={columns}
            sortConfig={sortConfig}
            onSortChange={setSortConfig}
            filters={filters}
            onFilterChange={setFilters}
            headerStyle={headerStyle}
          />
          <TableBody data={sortedData} columns={columns} bodyStyle={bodyStyle} />
        </table>
      </div>
    </div>
  );
};

export default TableContainer;
