import { useMemo } from "react";

function useSortedColumns(records) {
  const sortedColumns = useMemo(() => {
    let columns = [];
    if (records?.length > 0) {
      Object.keys(records[0]).forEach((key) => {
        if (["id", "_meta"].includes(key)) return;
        let columnRaw = records[0][key];
        let column = {
          title: columnRaw?.title || "---",
          index: columnRaw?.order || Infinity,
          key: key,
          type: columnRaw?.type || "text",
          styles: columnRaw?.styles?.title,
          actionable: !!columnRaw?.actionable,
          sortable: !!columnRaw?.sortable,
        };
        if (["badge", "colored-select"].includes(column.type)) {
          const choices = (columnRaw.valuesToColors || "")
            .split(",")
            .filter(Boolean)
            .map((choiceMapping) => {
              const option = (choiceMapping || "").split(":");
              let choice = {
                type: option?.[0],
                color: option?.[1],
              };
              return choice;
            });
          column.choices = choices;
          column.caseSensitive = !!columnRaw?.caseSensitive;
        }

        if (column?.type === "action-status") {
          const choices = (columnRaw.actionsMapping || "")
            .split(",")
            .filter(Boolean)
            .map((choiceMapping) => {
              const option = (choiceMapping || "").split(":");
              let choice = {
                type: option?.[0],
                color: option?.[1],
                label: option?.[2],
                all: !!option?.[3],
              };
              return choice;
            });
          column.choices = choices;
          column.caseSensitive = !!columnRaw?.caseSensitive;
        }
        if (columnRaw?.visible) {
          columns.push(column);
        }
      });
    }
    return columns.sort((a, b) => a.index - b.index);
  }, [records]);
  return sortedColumns;
}

export default useSortedColumns;
