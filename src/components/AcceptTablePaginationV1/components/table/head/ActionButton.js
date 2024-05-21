import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useState } from "react";

const ActionButton = (props) => {
  const { choice, onPress, disabled } = props;

  const [loading, setLoading] = useState(false);

  const _onPress = useCallback(async () => {
    try {
      setLoading(true);
      await onPress(choice);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [onPress, choice]);

  return (
    <TouchableOpacity
      disabled={loading || disabled}
      onPress={_onPress}
      style={[styles.container]}
    >
      <View
        style={[
          styles.overlay,
          { backgroundColor: disabled ? "gray" : choice.color },
        ]}
      />
      {loading && <ActivityIndicator color={choice.color} size={16} />}
      <Text
        style={[
          styles.label,
          {
            color: disabled ? "gray" : choice.color,
          },
        ]}
      >
        {choice.label} All
      </Text>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    overflow: "hidden",
    gap: 5,
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
