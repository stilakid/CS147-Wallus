import * as React from 'react'
import { Text, StyleSheet, TextProps } from 'react-native'
import { Themes } from "../../../assets/themes"


interface AppTextProps extends TextProps {
    children: string
}

export const AppText = ({style, ...props }: AppTextProps) => (
    <Text {...props} style={[styles.default, style]} />
)

AppText.TitleOne = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.titleOne, style]} />
)

AppText.TitleTwo = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.titleTwo, style]} />
)

AppText.TitleThree = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.titleThree, style]} />
)

AppText.Headline = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.headline, style]} />
)

AppText.HeadlineCaps = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.headlineCaps, style]} />
)

AppText.ParagraphOne = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.paragraphTextOne, style]} />
)

AppText.ParagraphTwo = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.paragraphTextTwo, style]} />
)

AppText.ParagraphThree = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.paragraphTextThree, style]} />
)

AppText.ParagraphFour = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.paragraphTextFour, style]} />
)

AppText.Input = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.inputTextField, style]} />
)

AppText.LabelOne = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.LabelOne, style]} />
)

AppText.LabelTwo = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.LabelTwo, style]} />
)

AppText.LabelThree = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.LabelThree, style]} />
)

AppText.LabelFour = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.LabelFour, style]} />
)





const styles = StyleSheet.create({
    default: {

    },


    titleOne: {
        fontFamily: Themes.typography.title_1.font,
        fontSize: Themes.typography.title_1.size,
        lineHeight: Themes.typography.title_1.line_height,
        color: Themes.typography.title_1.color
    },

    titleTwo: {
        fontFamily: Themes.typography.title_2.font,
        fontSize: Themes.typography.title_2.size,
        lineHeight: Themes.typography.title_2.line_height,
        color: Themes.typography.title_2.color
    },

    titleThree: {
        fontFamily: Themes.typography.title_3.font,
        fontSize: Themes.typography.title_3.size,
        lineHeight: Themes.typography.title_3.line_height,
        color: Themes.typography.title_3.color
    },


    headline: {
        fontFamily: Themes.typography.headline.font,
        fontSize: Themes.typography.headline.size,
        lineHeight: Themes.typography.headline.line_height,
        color: Themes.typography.headline.color
    },
    headlineCaps: {
        fontFamily: Themes.typography.headline_caps.font,
        fontSize: Themes.typography.headline_caps.size,
        lineHeight: Themes.typography.headline_caps.line_height,
        color: Themes.typography.headline_caps.color,
        letterSpacing: Themes.typography.headline_caps.letter_spacing,
        textTransform: 'uppercase'
    },


    paragraphTextOne: {
        fontFamily: Themes.typography.paragraph_text_1.font,
        fontSize: Themes.typography.paragraph_text_1.size,
        lineHeight: Themes.typography.paragraph_text_1.line_height,
        color: Themes.typography.paragraph_text_1.color
    },
    paragraphTextTwo: {
        fontFamily: Themes.typography.paragraph_text_2.font,
        fontSize: Themes.typography.paragraph_text_2.size,
        lineHeight: Themes.typography.paragraph_text_2.line_height,
        color: Themes.typography.paragraph_text_2.color
    },
    paragraphTextThree: {
        fontFamily: Themes.typography.paragraph_text_3.font,
        fontSize: Themes.typography.paragraph_text_3.size,
        lineHeight: Themes.typography.paragraph_text_3.line_height,
        color: Themes.typography.paragraph_text_3.color
    },
    paragraphTextFour: {
        fontFamily: Themes.typography.paragraph_text_4.font,
        fontSize: Themes.typography.paragraph_text_4.size,
        lineHeight: Themes.typography.paragraph_text_4.line_height,
        color: Themes.typography.paragraph_text_4.color
    },


    inputTextField: {
        fontFamily: Themes.typography.input_text_field.font,
        fontSize: Themes.typography.input_text_field.size,
        lineHeight: Themes.typography.input_text_field.line_height,
        color: Themes.typography.input_text_field.color
    },


    LabelOne: {
        fontFamily: Themes.typography.label_1.font,
        fontSize: Themes.typography.label_1.size,
        lineHeight: Themes.typography.label_1.line_height,
        color: Themes.typography.label_1.color
    },
    LabelTwo: {
        fontFamily: Themes.typography.label_2.font,
        fontSize: Themes.typography.label_2.size,
        lineHeight: Themes.typography.label_2.line_height,
        color: Themes.typography.label_2.color
    },
    LabelThree: {
        fontFamily: Themes.typography.label_3.font,
        fontSize: Themes.typography.label_3.size,
        lineHeight: Themes.typography.label_3.line_height,
        color: Themes.typography.label_3.color
    },
    LabelFour: {
        fontFamily: Themes.typography.label_4.font,
        fontSize: Themes.typography.label_4.size,
        lineHeight: Themes.typography.label_4.line_height,
        color: Themes.typography.label_4.color
    },

});




