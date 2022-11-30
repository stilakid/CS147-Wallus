import * as React from 'react'
import { StyleSheet, View, TouchableOpacity,} from "react-native"
import { Themes} from "../../../assets/themes"

export const Divider = () => {
    return(
        <View style={styles.divider}/>
    );
}


const styles = StyleSheet.create({
    divider: {
        backgroundColor: Themes.colors.neutral_200,
        height: 2,
        width: '100%',
        borderRadius:999,
    }
});