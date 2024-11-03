import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#fff");

  return (
    <View style={{ backgroundColor: selectedColor }}>
      <Text style={styles.title}>Color Picker</Text>

      <View style={styles.colorsContainer}>
        {colors.map((color) => (
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: color }]}
            key={color}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  colorsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  colorBox: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 30,
  },
});

export default ColorPicker;
