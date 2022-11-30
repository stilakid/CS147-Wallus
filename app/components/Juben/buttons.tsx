import * as React from 'react'
import { Text, StyleSheet, TextProps } from 'react-native'
import { Themes } from "../../../assets/themes"


interface AppTextProps extends TextProps {
    children: string
}

export const AppText = ({style, ...props }: AppTextProps) => (
    <Text {...props} style={[styles.default, style]} />
)

AppText.TitleBoldOne = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.titleBoldOne, style]} />
)

const styles = StyleSheet.create({
    default: {

    },


    titleBoldOne: {
        fontFamily: Themes.typography.title_bold_1.font,
        fontSize: Themes.typography.title_bold_1.size,
        lineHeight: Themes.typography.title_bold_1.line_height,
        color: Themes.typography.title_bold_1.color
    },
}