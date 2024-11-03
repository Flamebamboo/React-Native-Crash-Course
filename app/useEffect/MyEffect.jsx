import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useState, useEffect } from "react";

const MyEffect = () => {
  const [value, setValue] = useState(0);

  // rerenders when a component changes
  useEffect(() => {
    console.warn("useks");
  }, []);
  // contains empty dependency array it will on calls once
  // if we put value in here it will re renders everything its change
  // if we dont specify  [] this function will be called everytime something changes
  return (
    <View>
      <Text>{value}</Text>
      <TouchableOpacity onPress={() => setValue(value + 1)}>
        <Text>Increment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyEffect;
