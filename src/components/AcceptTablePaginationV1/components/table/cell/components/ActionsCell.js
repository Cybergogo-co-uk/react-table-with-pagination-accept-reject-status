import React, { useCallback, useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";
import ActionCellButton from "./ActionCellButton";

function ActionsCell(props) {
  const { row, rowId, value, onChange, column, width, choices } = props;
  const [loading, setLoading] = React.useState(false);

  const onPress = useCallback(
    async (choice) => {
      try {
        setLoading(true);
        onChange && await onChange(choice.type);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    },
    [onChange]
  );

  const status = useMemo(() => {
    return value ? choices.find((choice) => choice.type === value) : null;
  }, [value, choices]);

  return (
    <View style={styles.container}>
      {!status &&
        choices.map((choice) => (
          <ActionCellButton
            disabled={loading}
            onAction={onPress}
            choice={choice}
          />
        ))}
    </View>
  );
}

export default ActionsCell;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,
    padding: 10,
  },
});
