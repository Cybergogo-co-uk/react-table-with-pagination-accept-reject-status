import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useCallback, useState } from "react";

const ActionCellButton = (props) => {
  const { choice, onAction, disabled, asStatus } = props;

  const [loading, setLoading] = useState(false);

  const _onPress = useCallback(async () => {
    try {
        setLoading(true);
        await onAction(choice);
        setLoading(false);
    } catch (error) {
        setLoading(false);
    }
  }, [onAction, choice])

  return (
    <TouchableOpacity disabled={asStatus || loading || disabled} onPress={_onPress} style={[styles.container, asStatus ? {borderWidth: 1, borderColor: choice.color} : null]}>
      {!asStatus && <View style={[styles.overlay, { backgroundColor: disabled ? "gray" : choice.color }]} />}
      {loading && <ActivityIndicator color={choice.color} size={16} />}
      <Text
        style={[
          styles.label,
          {
            color: disabled ? "gray" : choice.color,
          },
        ]}
      >
        {asStatus ? choice.type : choice.label}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionCellButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    overflow: "hidden",
    gap: 5
  },
  border: {
    borderWidth: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    opacity: 0.2,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
