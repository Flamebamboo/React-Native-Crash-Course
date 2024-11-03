import { View, Text, FlatList } from "react-native";
import React from "react";
import { useState, useEffect } from "react";

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //we use async function because we want to use await keyword
    const fetchData = async () => {
      //retrieve data with fetch and await
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      //convert the response to json
      const result = await response.json();

      setData(result);
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <View>
      <Text>DataFetching</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default DataFetching;
