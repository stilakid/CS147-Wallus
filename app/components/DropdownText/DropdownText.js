import { Themes } from "../../../assets/themes"
import React, { useState } from 'react';

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, Pressable } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import Checkbox from "../../components/Checkbox/Checkbox";
import { FlatList } from "react-native-gesture-handler";
import { Divider } from "../Divider/divider";
import { ChevronDown } from "lucide-react-native";
import { ChevronUp } from "lucide-react-native";

export default function DropdownText ({titleText, bodyText}) {
    let contentDisplayed;
    const [isExpanded, setIsExpanded] = useState(false);

    const Expanded =()=> (
        <View style={[styles.container, styles.expanded]}>
            <View style={styles.header}>
                <AppText.LabelBoldOne>{titleText}</AppText.LabelBoldOne>
                <Pressable onPress={() => {setIsExpanded(!isExpanded)}}>
                    <ChevronUp color={Themes.colors.neutral_600} size={24}/>
                </Pressable>
            </View>
            <AppText.ParagraphTwo style={{color: Themes.colors.neutral_500}}>{bodyText}</AppText.ParagraphTwo>
        </View>
    )
    const Collapsed =()=> (
        <View style={styles.container}>
            <AppText.LabelBoldOne>{titleText}</AppText.LabelBoldOne>
            <Pressable onPress={() => {setIsExpanded(!isExpanded)}}>
                <ChevronDown color={Themes.colors.neutral_600} size={24}/>
            </Pressable>
        </View>
    )
    if (isExpanded ==true){
        contentDisplayed = <Expanded/>
    }else {
        contentDisplayed = <Collapsed/>
    }
    return (
        <View>
            {contentDisplayed}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 358,
        borderWidth: 2,
        borderColor: Themes.colors.neutral_200,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:16,
        paddingVertical: 12,
        borderRadius: 16, 
      },
      expanded : {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      header :{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }
});