import { View, Text } from "react-native";
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <View>
      <Text>ParentComponent</Text>
      <ChildComponent
        name="Flamebamboo"
        age={16}
        hobbies={["code", "sleep", "repeat"]}
      />
    </View>
  );
};

export default ParentComponent;
