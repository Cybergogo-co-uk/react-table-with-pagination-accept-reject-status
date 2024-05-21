import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ActionButton from "./ActionButton";

const ActionStatusHead = (props) => {
  const { column, visibleRows } = props;
  const [loading, setLoading] = useState(false);

  const onActionPress = async (choice) => {
    try {
      setLoading(true);
      const actions = visibleRows
        .map((row) =>
          !row?.status?.value ? row?.[column?.key]?.onChange : null
        )
        .filter(Boolean);
      await Promise.all(actions.map((action) => action(choice.type)));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {Array.isArray(column.choices) &&
        column.choices
        .filter((choice) => choice.all)
        .map((choice) => (
          <ActionButton
            disabled={loading}
            onPress={onActionPress}
            choice={choice}
          />
        ))}
    </View>
  );
};

export default ActionStatusHead;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,
    paddingEnd: 20,
  },
});
