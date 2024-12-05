export const applySorting = (data, { key, direction }) => {
    if (!key || direction === "default") return data;
  
    return [...data].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      if (valueA == null || valueB == null) {
        return valueA == null ? 1 : -1;
      }

      if (typeof valueA === "number" && typeof valueB === "number") {
        return direction === "asc" ? valueA - valueB : valueB - valueA;
      } else {
        return direction === "asc"
          ? valueA.toString().localeCompare(valueB.toString())
          : valueB.toString().localeCompare(valueA.toString());
      }
    });
  };
  
  
  export const applyFilters = (data, filters) => {
    return data.filter((row) =>
      Object.keys(filters).every(
        (key) => row[key]?.toString().toLowerCase().includes(filters[key]?.toLowerCase())
      )
    );
  };
  