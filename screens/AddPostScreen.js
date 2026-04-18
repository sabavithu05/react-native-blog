import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../utils/colors";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { apiClient } from "../utils/api";

export default function AddPostScreen() {
  const [title, setTitle] = useState("")
  const [content, setcontent] = useState("")

  async function handlesubmit() {
    try {  
      const response =await apiClient.post( "/posts", {title,content});
    console.log ( "post creatd:",response.data);
setcontent("");
setTitle("");
Alert.alert("sucesss", "post created sucessfully");}
 catch (error) {
  Alert.alert("error", "failed to submit post");
 }
  }


return (
  <View style={styles.container}>
    <Text>  {title} {content} </Text>
    <TextInput style={styles.input}
      placeholder="title"
      value={title}
      onChangeText={setTitle} />

    <TextInput style={styles.input}
      placeholder="content"
      value={content}
      onChangeText={setcontent}
      multiline />


    <TouchableOpacity style={styles.button} onPress={handlesubmit}>
      <Text style={styles.buttontext}> submit </Text>
    </TouchableOpacity>

  </View>
   
);

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
});
