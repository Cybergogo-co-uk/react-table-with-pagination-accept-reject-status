import { View, Text } from "react-native";
import React from "react";
import ActionStatusHead from "./ActionStatusHead";
import HeadCell from "./HeadCell";

const TableHead = (props) => {
  const { column, visibleRows, sort, onChangeSort } = props;
  const type = column.type;

  const render = () => {
    switch (type) {
      case "text":
      case "badge":
      case "colored-select":
        return (
          <HeadCell column={column} sort={sort} onChangeSort={onChangeSort} />
        );
      case "action-status":
        return <ActionStatusHead column={column} visibleRows={visibleRows} />;
      default:
        return <Text>{column.title}</Text>;
    }
  };

  return <View>{render()}</View>;
};

export default TableHead;
