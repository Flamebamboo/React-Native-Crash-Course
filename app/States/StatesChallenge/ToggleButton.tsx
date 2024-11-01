import { View, Text, Button } from "react-native";
import { useState } from "react";
import React from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <View>
      <Text>{isOn ? "On" : "Off"}</Text>w
      <Button title="Toggle" onPress={() => setIsOn(!isOn)} />
    </View>
  );
};

export default ToggleButton;
