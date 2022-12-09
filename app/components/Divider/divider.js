import * as React from 'react'
import { Themes} from "../../../assets/themes"

// Components
import { StyleSheet, View, TouchableOpacity,} from "react-native"

export const Divider = ({style}) => {
    return(
        <View style={[styles.divider, style]}/>
    );
}

Divider.Vertical = ({style}) => (
    <Divider
        style={[styles.vertical, style]}
    />
)

Divider.Horizontal = ({style}) => (
    <Divider
        style={[styles.horizontal, style]}
    />
)


const styles = StyleSheet.create({
    divider: {
        backgroundColor: Themes.colors.neutral_200,
        borderRadius:999,
    },
    vertical: {
        width: 2,
        height: '100%'
    },
    horizontal: {
        width: '100%',
        height: 2,
    }
});