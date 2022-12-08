// List.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import { isTemplateSpan } from "typescript";
import { Themes } from "../../../assets/themes";
import { AppButton } from "../Buttons/buttons";
import { AppText } from "../CustomText/customText";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details, nav }) => (
  <View style={styles.item}>
    <View style={styles.header}>
      <AppText.LabelBoldOne style={styles.title}>{name}</AppText.LabelBoldOne>
      <AppButton.rightArrow navigation={()=> navigation.navigate(nav)}></AppButton.rightArrow>
    </View>
    <AppText.ParagraphTwo style={{color: Themes.colors.neutral_500}}>{details}</AppText.ParagraphTwo>
  </View>
);

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.details} nav={item.nav} />;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} nav={item.nav}/>;
    }
    // filter of the description
    if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} nav={item.nav}/>;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderWidth: 2,
    borderBottomColor: Themes.colors.neutral_200,
    borderRadius: 16,
    alignItems: "flex-start",
    padding: 16,
    height: 114,
    width: 358,
    backgroundColor: Themes.colors.white,
  },
  header: {
    width: 326,
    height: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});