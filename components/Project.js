import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

const Item = ({ title, summary }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.summary}>{summary}</Text>
  </View>
);

const Project = ({ searchPhrase, data }) => {

  const renderItem = ({ item }) => {

    if (searchPhrase === "") {
      return <Item title={item.title} summary={item.summary} />;
    }

    if (item.title.toLowerCase().includes(searchPhrase.toLowerCase())) {
      return <Item title={item.title} summary={item.summary} />;
    }

    if (item.summary.toLowerCase().includes(searchPhrase.toLowerCase())) {
      return <Item title={item.title} summary={item.summary} />;
    }
  };

  return (
    <SafeAreaView style={styles.listContainer}>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Project;

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 20,
    height: "85%",
    width: "100%",
  },
  item: {
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    margin: 20,
    borderTopWidth: 4,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#b29d6c",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    fontStyle: "italic",
  },
});