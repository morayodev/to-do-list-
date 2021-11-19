import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItem from "./components/ListItems";
import InputForm from "./components/InputForm";

export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const changeHandler = (text) => {
    setInput(text);
  };
  const addGoal = () => {
    setList((list) => [
      ...list,
      { id: Math.random().toString(), value: input },
    ]);
    // console.log("add")
  };
  const deleteHandler=(listId)=>{
    // setList(list=>{
    //   return list.filter((listGoal)=>listGoal.id!==listId)
    // })
    console.log(listId.item.id, "mo")
    const newList=list.filter((listGoal)=>listGoal.id!==listId)
    console.log(newList,"yo")
  }

  return (
    <View style={styles.container}>
      <InputForm
        inputHandler={changeHandler}
        valueItem={input}
        addItem={addGoal}
      />
      <FlatList
        data={list}
        keyExtractor={(item,index)=>item.id}
        renderItem={(listItem) => (
          <ListItem
            item={listItem.item.value}
            // deleteList={deleteHandler.bind(this,listItem.item.id)}
             deleteList={deleteHandler(listItem)}

          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  inputArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputButton: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: "80%",
  },
});
