import React from "react";
import Cell from "../cell";

function Row(props) {
  const { row, columns } = props;
  return (
    <tr key={row.id.toString()}>
      {columns.map((column) => {
        return (
          <Cell id={row.id} row={row} cell={row[column.key]} column={column} />
        );
      })}
    </tr>
  );
}

export default Row;
