import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@protonapp/react-native-material-ui";

import "../../../../Shared/iconLoader";

const HeadCell = (props) => {
  const { column, sort, onChangeSort } = props;

  const _onChangeSort = () => {
    if (sort.key === column.key) {
      if (sort.order === "asc") {
        onChangeSort({ key: column.key, order: "desc" });
      } else {
        onChangeSort({ key: column.key, order: "asc" });
      }
    } else if (column.sortable) {
      onChangeSort({ key: column.key, order: "asc" });
    }
  };

  return (
    <TouchableOpacity onPress={_onChangeSort} disabled={!column.sortable}>
      <View style={styles.container}>
        <Text>{column.title}</Text>
        {sort.order === "asc" && sort.key === column.key && (
          <Icon name="keyboard-arrow-up" />
        )}
        {sort.order === "desc" && sort.key === column.key && (
          <Icon name="keyboard-arrow-down" />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default HeadCell;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
