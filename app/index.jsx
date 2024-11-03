import { View, Text } from "react-native";
import React from "react";

import WeatherApp from "./States/StatesChallenge/WeatherApp";
import ColorPicker from "./States/StatesChallenge/ColorPicker";
import Todo from "./States/StatesChallenge/Todo";
import MyEffect from "./useEffect/MyEffect";
import DataFetching from "./useEffect/DataFetching";
import FoodFetch from "./useEffect/Challenge/FoodFetch";
import UserFetch from "./useEffect/Challenge/UserFetch";

const index = () => {
  return (
    <View>
      {/* <WeatherApp /> */}
      {/* <ColorPicker /> */}
      {/* <Todo /> */}
      {/* <MyEffect /> */}
      {/* <DataFetching /> */}
      {/* <FoodFetch /> */}
      <UserFetch />
    </View>
  );
};

export default index;
