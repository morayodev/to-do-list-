import React from "react"
import {View,Text,StyleSheet, TouchableOpacity} from "react-native"
const ListItem=({item,deleteList})=>{
    return(
        <TouchableOpacity onPress={deleteList}>
        <View style={styles.item}>
        <Text>{item}</Text>
      </View>
      </TouchableOpacity>
    )
}
export default ListItem
const styles=StyleSheet.create({
    item: {
        borderWidth: 1,
        backgroundColor: "#ccc",
        color: "#000",
        padding: 10,
        marginVertical: 10,
      },

})