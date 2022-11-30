import * as React from 'react'
import { TouchableOpacity, StyleSheet, TouchableOpacityProps, View, Text } from 'react-native'
import { Themes } from "../../../assets/themes"


export const AppButton = ({TouchableOpacityStyle, ViewStyle, TextStyle, textContent}: any) => (
    <TouchableOpacity style={[styles.default, TouchableOpacityStyle]}>
        <View style={[ViewStyle]}>
            <Text style={[TextStyle]}>
                {textContent}
            </Text>
        </View>
    </TouchableOpacity>
)

AppButton.BlueButton = ({TouchableOpacityStyle, ViewStyle, TextStyle, textContent}: any) => (
    <AppButton TouchableOpacityStyle={{ ...styles.blueButton, ...TouchableOpacityStyle}} ViewStyle={ViewStyle} TextStyle={TextStyle} textContent={textContent} />
)

const styles = StyleSheet.create({
    default: {

    },


    blueButton: {

    },
})