// SearchBar.js
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { Themes } from "../../../assets/themes";
import { AppButton } from "../Buttons/buttons";

const SearchBar = ({clicked, setClicked, searchPhrase, setSearchPhrase, navigation}) => {
    // const [clicked, setCLicked] = useState(false)
    // const [searchPhrase, setSearchPhrase] = useState('')
    return (
      <>
        {!clicked && (
          <View style={{marginLeft: 10}}>
          <AppButton.goBackDic
            navigation={navigation}/>
          </View>
        )}
        <View style={styles.container}>
            <View
                style={
                clicked
                    ? styles.searchBar__clicked
                    : styles.searchBar__unclicked
                }
            >
            
                {/* search Icon */}
                <Feather
                name="search"
                size={20}
                color="black"
                style={{ marginLeft: 1 }}
                />
                {/* Input field */}
                <TextInput
                style={styles.input}
                placeholder="Search"
                value={searchPhrase}
                onChangeText={setSearchPhrase}
                onFocus={() => {
                    setClicked(true);
                }}
                />
                {/* cross Icon, depending on whether the search bar is clicked or not */}
                {clicked && (
                <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                    setSearchPhrase("")
                }}/>
                )}
            </View>
            {/* cancel button, depending on whether the search bar is clicked or not */}
            {clicked && (
                <View>
                <Button
                    title="Cancel"
                    onPress={() => {
                    Keyboard.dismiss();
                    setClicked(false);
                    }}
                ></Button>
                </View>
            )}
        </View>
        </>
    );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 16,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    // width: "90%",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "90%",
    backgroundColor: Themes.colors.white,
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: Themes.colors.white,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});




// import { SearchBar } from 'react-native-elements';
// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { Themes } from '../../../assets/themes';

// export default class Search extends React.Component {
//   state = {
//     search: '',
//   };

//   updateSearch = (search) => {
//         this.setState({ search: 'search' });
//   };

//   render() {
//     const { search } = this.state;

//     return (
//       <SearchBar
//         placeholder="Search anything"
//         onChangeText={this.updateSearch}
//         value={search}
//         containerStyle={styles.container}
//         inputContainerStyle={styles.inputbox}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: Themes.colors.white,
//         height: 80,
//         padding: 16,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderColor: Themes.colors.white
//     },
//     inputbox: {
//         height: 48,
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: Themes.colors.white,
//         borderColor: Themes.colors.neutral_200,
//         borderWidth: 2,
//         borderRadius: 16
//     }
// })