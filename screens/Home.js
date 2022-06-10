import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Projects from "../components/Project";
import SearchBar from "../components/SearchBar";

const Home = () => {

  const [searchPhrase, setSearchPhrase] = useState("");
  const [RCPAdata, setRCPAdata] = useState();

  useEffect(() => {
    const RCPAdata = require('../data/RCPA.json');
    setRCPAdata(RCPAdata);
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Research Projects</Text>
      <SearchBar setSearchPhrase={setSearchPhrase}/>
      {
        <Projects
          searchPhrase={searchPhrase}
          data={RCPAdata}
        />
      }
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    width: "100%",
    marginTop: "10%",
    fontSize: 25,
    fontWeight: "bold",
  },
});