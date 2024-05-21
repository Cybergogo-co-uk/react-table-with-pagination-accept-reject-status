import CellContent from "./CellContent";

const Badge = ({ mainColor, cell, width, column, row }) => (
  <td
    onClick={() => {
      if (!!column?.actionable && row?.onPress) {
        row.onPress();
      }
    }}
  >
    <CellContent
      width={width}
      column={column}
      content={
        <div
          className={`badge`}
          style={{
            color: mainColor,
            backgroundColor: `${mainColor}20`,
          }}
        >
          {cell}
        </div>
      }
    />
  </td>
);

export default Badge;
