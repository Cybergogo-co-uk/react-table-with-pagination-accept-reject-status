import React, { useMemo } from "react";
import TableHead from "./TableHead";

function Head(props) {
  const { columns, visibleRows, sort, onChangeSort } = props;

  return (
    <thead>
      <tr>
        {columns.map((column) => {
          return (
            <th key={column.key} style={column?.styles}>
              <TableHead
                column={column}
                visibleRows={visibleRows}
                sort={sort}
                onChangeSort={onChangeSort}
              />
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default Head;
