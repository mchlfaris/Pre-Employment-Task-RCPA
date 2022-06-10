import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
const SearchBar = ({ setSearchPhrase }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <FontAwesome
          name="search"
          size={20}
          color="black"
          style={{marginLeft: 10}}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={setSearchPhrase}
        />
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 10,
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "90%",
    alignItems: "left",
  },
  searchBar: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});