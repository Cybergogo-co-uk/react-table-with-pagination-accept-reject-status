import { useMemo } from "react";

function useFilteredRows(
  records,
  currentSearchWords
  // setCurrentPage,
  // currentPage,
  // pageSize,
  // sortedColumns
) {
  // useMemo(() => {
  //   setCurrentPage(1);
  // }, [currentSearchWords]);

  const filteredRows = useMemo(() => {
    let rows = [];
    (Array.isArray(records) ? records : []).forEach((row) => {
      let res = Object.keys(row).map((key) => {
        if (key === "id" || key === "_meta" || key === "onPress") return;
        if(!row[key].value) return;
        if (
          currentSearchWords
            .split(" ")
            .map((s) => s.trim())
            .some((s) => row[key].value.toLowerCase().includes(s.toLowerCase()))
        ) {
          return true;
        }
      });
      if (res.includes(true)) rows.push(row);
    });

    return rows;
  }, [records, currentSearchWords]);

  return filteredRows;
}

export default useFilteredRows;
