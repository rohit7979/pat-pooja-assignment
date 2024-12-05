import React from "react";

const TableBody = ({ data, columns, bodyStyle }) => {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr
          key={rowIndex}
          className={`
            ${rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"} 
            hover:bg-green-50 
            ${bodyStyle?.font || ""}
          `}
        >
          {columns.map((col) => (
            <td
              key={col.key}
              className={`p-2 border border-gray-300 text-sm `}
            >
              {row[col.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
