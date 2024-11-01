import { View, Text, FlatList, Button } from "react-native";
import React from "react";
import { useState } from "react";

const UpdateArray = () => {
  const [animals, setAnimals] = useState(["cow", "cat", "sheep"]);

  const addOne = () => setAnimals([...animals, "dog"]);
  const removeOne = () => setAnimals(animals.filter((f) => f !== "cow"));
  const updateOne = () =>
    setAnimals(animals.map((f) => (f == "cow" ? "CowDumb" : f)));

  return (
    <View>
      <FlatList
        data={animals}
        keyExtractor={(animal) => animal}
        renderItem={({ item }) => <Text>{item}</Text>}
      />

      <Button title="Add One" onPress={addOne} />
      <Button title="Remove One" onPress={removeOne} />
      <Button title="Update Animals" onPress={updateOne} />
    </View>
  );
};

export default UpdateArray;
