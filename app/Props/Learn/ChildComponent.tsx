import { View, Text } from "react-native";
import React from "react";

interface ChildProps {
  name: string;
  age: number;
  hobbies: string[];
}

const ChildComponent = ({ name, age, hobbies }: ChildProps) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{hobbies}</Text>
    </View>
  );
};

export default ChildComponent;
