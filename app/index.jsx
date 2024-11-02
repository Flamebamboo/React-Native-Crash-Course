import { View, Text } from "react-native";
import React from "react";

import WeatherApp from "./States/StatesChallenge/WeatherApp";
import ColorPicker from "./States/StatesChallenge/ColorPicker";
import Todo from "./States/StatesChallenge/Todo";

const index = () => {
  return (
    <View>
      {/* <WeatherApp /> */}
      {/* <ColorPicker /> */}
      <Todo />
    </View>
  );
};

export default index;
