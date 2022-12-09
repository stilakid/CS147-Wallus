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
import { Navigation } from 'lucide-react-native'
import { TouchableOpacity } from "react-native-gesture-handler";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details, nav, navigation }) => (
  <TouchableOpacity style={styles.item} onPress={()=>{navigation.navigate(nav)}}>
    <View style={styles.header}>
      <AppText.LabelBoldOne style={styles.title}>{name}</AppText.LabelBoldOne>
      <AppButton.rightArrow></AppButton.rightArrow>
    </View>
    <AppText.ParagraphTwo style={{color: Themes.colors.neutral_500}}>{details}</AppText.ParagraphTwo>
  </TouchableOpacity>
);

// the filter
const List = ({ searchPhrase, setClicked, data, navigation }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.details} nav={item.nav} navigation={navigation}/>;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} nav={item.nav} navigation={navigation}/>;
    }
    // filter of the description
    if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} nav={item.nav} navigation={navigation}/>;
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
          style={{marginTop:24}}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    // margin: 10,
    width: "100%",
    alignItems: 'center',
  },
  item: {
    marginBottom: 16,
    borderWidth: 2,
    borderColor:Themes.colors.neutral_200,
    borderRadius: 16,
    alignItems: "flex-start",
    padding: 16,
    width: 358,
    backgroundColor: Themes.colors.white,
  },
  header: {
    width: 326,
    height: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    fontStyle: "italic",
  },
});