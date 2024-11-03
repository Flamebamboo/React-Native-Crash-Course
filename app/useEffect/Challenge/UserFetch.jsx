import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import React from "react";

const UserFetch = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const result = await response.json();
        setUser(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    userData();
  }, []);

  if (loading) {
    return <Text> Loading..</Text>;
  }

  if (error) {
    return <Text>Error is {error}</Text>;
  }

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={{ uri: item.picture.thumbnail }} />
        <View>
          <Text>
            {item.name.first} {item.name.last}
          </Text>

          <Text>{item.email}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={user}
        keyExtractor={(item) => item.login.uuid}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20,
  },
  errorText: {
    textAlign: "center",
    marginTop: 20,
    color: "red",
  },
});

export default UserFetch;
