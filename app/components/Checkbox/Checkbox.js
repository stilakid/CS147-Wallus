// import React from 'react';
import { Themes } from "../../../assets/themes"
import React, { useState } from 'react';

// Components
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Check } from 'lucide-react-native';



export default function Checkbox () {
    const [isSelected, setIsSelected]=useState('false');
    let contentDisplayed;

    const UnSelected = () => (
        <Pressable style={styles.notSelectedContainer} onPress={() => {setIsSelected(!isSelected)} }>
        </Pressable>
    );
    
    const Selected =()=> (
        <Pressable style={styles.selectedContainer} onPress={() => {setIsSelected(!isSelected)}}>
            <Check color={"#FFFFFF"} size={20}/>
        </Pressable>
    );

    if (isSelected == true) {
        contentDisplayed = <Selected/>;
    } else {
        contentDisplayed = <UnSelected/>;
    }
    return (
        <View>
            {contentDisplayed}
        </View>  
    );
}

const styles = StyleSheet.create({
    notSelectedContainer: {
        height: 24,
        width: 24,
        borderWidth: 2,
        borderColor: Themes.colors.neutral_200,
        borderRadius: 8,
    },
    selectedContainer: {
        backgroundColor: Themes.colors.primary_700,
        height: 24,
        width: 24,
        borderRadius: 8,
        justifyContent: "center",
        alignItems:"center",
    }
});