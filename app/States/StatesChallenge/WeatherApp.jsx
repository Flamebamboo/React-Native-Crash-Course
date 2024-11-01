import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";

const weatherData = {
  Malaysia: "32deg HOT!",
  Singapore: "29deg HOT!",
  NewZealand: "19deg COLD!",
};

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const getWeather = () => {
    setWeather(weatherData[city] || "No data available");
  };

  return (
    <View>
      <Text style={styles.title}>WeatherApp</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a city"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={getWeather} />
      {weather ? <Text>{weather}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 2,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default WeatherApp;
