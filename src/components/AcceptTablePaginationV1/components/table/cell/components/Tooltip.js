import Popup from "reactjs-popup";
import CellContent from "./CellContent";

const Tooltip = ({ width, column, cell, row }) => (
  <td
    onClick={() => {
      if (!!column.actionable && row?.onPress) {
        row.onPress();
      }
    }}
  >
    <CellContent
      width={width}
      column={column}
      content={
        <div className="description">
          <Popup
            on={["hover", "focus"]}
            trigger={(open) => <button>{cell}</button>}
            position="bottom center"
            closeOnDocumentClick
          >
            <span className="tooltip">{cell}</span>
          </Popup>
        </div>
      }
    />
  </td>
);

export default Tooltip;
