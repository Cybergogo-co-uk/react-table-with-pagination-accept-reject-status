import React, { useEffect, useMemo, useState } from "react";
//import Pagination from "./components/pagination";
import useSortedColumns from "./hooks/useSortedCols";
import useFilteredRows from "./hooks/useFilteredRows";
import Header from "./components/header";
import TableBody from "./components/table/body";
import "./style.css";
//import "./styles/pagination.css";
import "./styles/table.css";

const AcceptTablePaginationV1 = (props) => {
  const { records, tableTitle, pageSize = 10 } = props; 
  const allData = Array.isArray(records) ? records : [];
  const [currentSearchWords, setCurrentSearchWords] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({ key: "", order: "" });

  useEffect(() => {
    setCurrentPage(1);
  }, [currentSearchWords]);

  const sortedColumns = useSortedColumns(allData);

  const filteredRows = useFilteredRows(allData, currentSearchWords);

  const sortedRows = useMemo(() => {
    if (sort.key) {
      return filteredRows.sort((a, b) => {
        if (sort.order === "asc") {
          return (a[sort.key]?.value || "").toUpperCase() >
            (b[sort.key]?.value || "").toUpperCase()
            ? 1
            : -1;
        } else {
          return (a[sort.key]?.value || "").toUpperCase() <
            (b[sort.key]?.value || "").toUpperCase()
            ? 1
            : -1;
        }
      });
    }
    return filteredRows;
  }, [filteredRows, sort]);



  const pageData = useMemo(() => {
    const indexOfLastRow = currentPage * pageSize;
    const indexOfFirstRow = indexOfLastRow - pageSize;
    return sortedRows.slice(indexOfFirstRow, indexOfLastRow);
  }, [sortedRows, currentPage, pageSize, sort]);

  const onChangeSort = (newSort) => {
    setSort(newSort);
  };

  console.log(sort);
  console.log(sortedRows)
  console.log(pageData);

  return (
    <div className="content-container">
      <Header
        tableTitle={tableTitle}
        setCurrentSearchWords={setCurrentSearchWords}
      />
      <div className="table-responsive-container">
        <TableBody
          sortedColumns={sortedColumns}
          rows={pageData}
          sort={sort}
          onChangeSort={onChangeSort}
        />
        {/* <Pagination
          currentPage={currentPage}
          onChangePage={setCurrentPage}
          rowsPerPage={pageSize}
          data={filteredRows}
        /> */}
      </div>
    </div>
  );
};

export default AcceptTablePaginationV1;

