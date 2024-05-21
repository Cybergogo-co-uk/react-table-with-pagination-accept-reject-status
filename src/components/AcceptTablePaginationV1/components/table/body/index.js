import Head from "../head";
import Row from "../row";
import ScrollContainer from "react-indiana-drag-scroll";

export default function TableBody(props) {
  const { sortedColumns, rows, sort, onChangeSort } = props;
  return (
    <ScrollContainer className="scroll-container">
      {sortedColumns?.length === 0 ? (
        <div className="table-no-data">No data</div>
      ) : (
        <table className="table">
          <Head
            columns={sortedColumns}
            visibleRows={rows}
            sort={sort}
            onChangeSort={onChangeSort}
          />
          <tbody>
            {rows.map((row, index) => (
              <Row key={index} row={row} columns={sortedColumns} />
            ))}
          </tbody>
        </table>
      )}
    </ScrollContainer>
  );
}
