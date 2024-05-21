import { useCallback, useMemo } from "react";
import CellContent from "./CellContent";
import Select from "react-select";

const SelectCell = ({
  choices,
  width,
  column,
  mainColor,
  value,
  onChange,
  rowId,
  row,
}) => {
  let options = choices.map(({ type }) => {
    return { label: type, value: type };
  });

  const onSelectChange = useCallback(
    (newValue) => {
      onChange?.(newValue.value);
    },
    [rowId, onChange]
  );

  const valueObj = useMemo(() => {
    return options.find(({ value: v }) => v === value);
  }, [value]);

  return (
    <td
      onClick={() => {
        if (!!column?.actionable && row?.onPress) {
          row.onPress();
        }
      }}
    >
      <CellContent
        select
        width={width}
        column={column}
        content={
          <Select
            value={valueObj}
            onChange={onSelectChange}
            theme={(theme) => {
              return {
                ...theme,
                colors: {
                  ...theme.colors,
                  text: mainColor,
                  font: mainColor,
                },
              };
            }}
            styles={{
              input: (input) => {
                return {
                  ...input,
                  margin: 0,
                  padding: 0,
                };
              },

              dropdownIndicator: (dropdownIndicator) => {
                return {
                  ...dropdownIndicator,
                  padding: "3px 8px",
                };
              },
              indicatorSeparator: () => {
                return {
                  display: "none",
                };
              },
              singleValue: (singleValue) => {
                return {
                  ...singleValue,
                  fontSize: 14,
                  color: mainColor,
                };
              },
              option: (option) => {
                return {
                  ...option,
                  transition: "all",
                  fontSize: 14,
                  transitionDuration: "200ms",
                  backgroundColor: "white",
                  padding: "4px 12px",
                  color: "gray",
                  "&:hover": {
                    backgroundColor: "#e8e9eb",
                  },
                };
              },
              menuList: (menu) => {
                return {
                  ...menu,
                  padding: 0,
                };
              },
              control: (base) => {
                return {
                  ...base,
                  height: 25,
                  minHeight: 25,
                  borderRadius: 5,
                  borderWidth: 0,
                  // fontSize: 12,
                  display: "flex",
                  alignItems: "center",
                  outline: 0,
                  color: mainColor,
                  backgroundColor: `${mainColor}20`,
                  // borderColor: `${mainColor}20`,
                  // border: `1px solid ${mainColor}20`,
                  boxShadow: "none",
                  // "&:hover": {
                  //   border: `1px solid ${mainColor}20`,
                  //   borderColor: `${mainColor}20`,
                  // },
                };
              },
            }}
            isSearchable={false}
            className="select"
            // defaultValue={options.find(({ value: v }) => v === selectInitValue)}
            options={options}
          />
        }
      />
    </td>
  );
};

export default SelectCell;
