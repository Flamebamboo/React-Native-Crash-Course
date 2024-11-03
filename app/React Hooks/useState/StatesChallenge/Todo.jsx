import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import React from "react";

import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim()) {
      setTodo([...todo, { id: Date.now().toString(), text }]);
      setText("");
    }
  };

  const handleSubmit = () => {
    addTodo();
  };

  const removeTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const renderTodo = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.todoItem}
        onPress={() => removeTodo(item.id)}
      >
        <Text style={styles.todoItem}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={styles.header}>Todo List </Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter Todo Here"
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />
      <Button title="Add task" onPress={addTodo} />

      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={renderTodo}
      />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  todoText: {
    fontSize: 18,
  },
});

// 1) set todo and set text with use state
// 2) display title of "Todo List"
// 3 ) TextInput with style, value of text, a onChangeText={setText} is called when the input is changed
// then put placeholder text
// onSubmitEditing={handleSubmit} calls when submit button is pressed
// add return key type = done

// 4) create a button with title add task and onpress={addTodo}

//5 Flatlist todo data, key extractor, rendeer item (renderTodo)

//6 create addTodo function and handleSubmit functions and renderTodo

// 7) addTodo function use if condition to trim the text and setTodo and use ... to still leave the previous

// 8) Handle Submit function : call addTodo()
