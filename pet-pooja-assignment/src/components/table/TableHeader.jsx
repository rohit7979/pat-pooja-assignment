import React from "react";

const TableHeader = ({ columns, sortConfig, onSortChange, filters, onFilterChange, headerStyle }) => {
  const handleSortChange = (key, direction) => {
    onSortChange({ key, direction });
  };

  return (
    <thead className={`${headerStyle?.background || "bg-gray-100"}`}>
      <tr>
        {columns.map((col) => (
          <th
            key={col.key}
            className={`p-2 border border-gray-300 ${headerStyle?.font || ""}`}
          >
            <div className="flex items-center justify-between">
              <span>{col.title}</span>
              {col.sortable && (
                <select
                  className="text-sm border border-gray-300 rounded"
                  value={
                    sortConfig.key === col.key ? sortConfig.direction : "default"
                  }
                  onChange={(e) =>
                    handleSortChange(col.key, e.target.value)
                  }
                >
                  <option value="default">Sort</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              )}
            </div>
            {col.filterable && (
              <input
                type="text"
                className="mt-1 border border-gray-300 p-1 rounded text-sm"
                placeholder={`Filter ${col.title}`}
                value={filters[col.key] || ""}
                onChange={(e) =>
                  onFilterChange({ ...filters, [col.key]: e.target.value })
                }
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
