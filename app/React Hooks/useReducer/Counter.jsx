import { View, Text, Button } from "react-native";
import { useReducer } from "react";
import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };

    default:
      throw Error("unknown action");
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button
        title="ADD"
        onPress={() => {
          dispatch({ type: "increment" });
        }}
      />

      <Button
        title="MINUS"
        onPress={() => {
          dispatch({ type: "decrement" });
        }}
      />
    </View>
  );
};

export default Counter;
