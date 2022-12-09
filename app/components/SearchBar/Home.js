// Home.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  View
} from "react-native";
import { Themes } from "../../../assets/themes";
import { AppButton } from "../Buttons/buttons";
import List from "./List";
import SearchBar from "./SearchBar";

const Home = ({navigation}) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://mocki.io/v1/a2e2c101-8336-4a61-94ae-9c61ad2101ab"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      {/* {!clicked && <Text style={styles.title}>Financial Dictionary</Text>} */}
      <View style={styles.header}>

        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
          navigation={navigation}
        />
      </View>

      {
          <View style={{alignItems: 'center'}}>
            <List
              searchPhrase={searchPhrase}
              data={fakeData}
              setClicked={setClicked}
              navigation={navigation}
            />
          </View>

      }
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: 'red'
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});