import React from "react"
import {View,TextInput,StyleSheet, Button} from "react-native"

const InputForm=({inputHandler,valueItem,addItem})=>{
    return(
        <View style={styles.inputArea}>
        <TextInput
          style={styles.inputButton}
          value={valueItem}
          onChangeText={inputHandler}
          placeholder="Enter a value"
        />
        <Button title="Add" onPress={addItem} />
      </View>
    )
}
export default InputForm
const styles = StyleSheet.create({
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
    
  })