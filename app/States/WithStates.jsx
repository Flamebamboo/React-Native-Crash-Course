import { View, Text, Button } from "react-native";
import React from "react";
import { useState } from "react";

const WithStates = () => {
  //the value "count" is holding the value of useState(valuehere)
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Decrement" onPress={() => setCount(count - 1)} />
    </View>
  );
};

export default WithStates;
