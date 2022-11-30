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

AppText.TitleBoldTwo = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.titleBoldTwo, style]} />
)

AppText.TitleBoldThree = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.titleBoldThree, style]} />
)

AppText.TitleBoldFour = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.titleBoldFour, style]} />
)

AppText.TitleSemiBoldOne = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.titleSemiBoldOne, style]} />
)

AppText.TitleSemiBoldTwo = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.titleSemiBoldTwo, style]} />
)

AppText.TitleSemiBoldThree = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.titleSemiBoldThree, style]} />
)

AppText.TitleSemiBoldFour = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.titleSemiBoldFour, style]} />
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

AppText.LabelBoldOne = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.labelBoldOne, style]} />
)

AppText.LabelBoldTwo = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.labelBoldTwo, style]} />
)

AppText.LabelBoldThree = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.labelBoldThree, style]} />
)

AppText.LabelSemiBoldOne = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.labelSemiBoldThree, style]} />
)

AppText.LabelSemiBoldTwo = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.labelSemiBoldThree, style]} />
)

AppText.LabelSemiBoldThree = ({style, ...props }: AppTextProps) => (
    <AppText {...props} style={[styles.labelSemiBoldThree, style]} />
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

    titleBoldTwo: {
        fontFamily: Themes.typography.title_bold_2.font,
        fontSize: Themes.typography.title_bold_2.size,
        lineHeight: Themes.typography.title_bold_2.line_height,
        color: Themes.typography.title_bold_2.color
    },

    titleBoldThree: {
        fontFamily: Themes.typography.title_bold_3.font,
        fontSize: Themes.typography.title_bold_3.size,
        lineHeight: Themes.typography.title_bold_3.line_height,
        color: Themes.typography.title_bold_3.color
    },
    titleBoldFour: {
        fontFamily: Themes.typography.title_bold_4.font,
        fontSize: Themes.typography.title_bold_4.size,
        lineHeight: Themes.typography.title_bold_4.line_height,
        color: Themes.typography.title_bold_4.color
    },


    titleSemiBoldOne: {
        fontFamily: Themes.typography.title_semibold_1.font,
        fontSize: Themes.typography.title_semibold_1.size,
        lineHeight: Themes.typography.title_semibold_1.line_height,
        color: Themes.typography.title_semibold_1.color
    },
    titleSemiBoldTwo: {
        fontFamily: Themes.typography.title_semibold_2.font,
        fontSize: Themes.typography.title_semibold_2.size,
        lineHeight: Themes.typography.title_semibold_2.line_height,
        color: Themes.typography.title_semibold_2.color
    },
    titleSemiBoldThree: {
        fontFamily: Themes.typography.title_semibold_3.font,
        fontSize: Themes.typography.title_semibold_3.size,
        lineHeight: Themes.typography.title_semibold_3.line_height,
        color: Themes.typography.title_semibold_3.color
    },
    titleSemiBoldFour: {
        fontFamily: Themes.typography.title_semibold_4.font,
        fontSize: Themes.typography.title_semibold_4.size,
        lineHeight: Themes.typography.title_semibold_4.line_height,
        color: Themes.typography.title_semibold_4.color
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


    labelBoldOne: {
        fontFamily: Themes.typography.label_bold_1.font,
        fontSize: Themes.typography.label_bold_1.size,
        lineHeight: Themes.typography.label_bold_1.line_height,
        color: Themes.typography.label_bold_1.color
    },
    labelBoldTwo: {
        fontFamily: Themes.typography.label_bold_2.font,
        fontSize: Themes.typography.label_bold_2.size,
        lineHeight: Themes.typography.label_bold_2.line_height,
        color: Themes.typography.label_bold_2.color
    },
    labelBoldThree: {
        fontFamily: Themes.typography.label_bold_3.font,
        fontSize: Themes.typography.label_bold_3.size,
        lineHeight: Themes.typography.label_bold_3.line_height,
        color: Themes.typography.label_bold_3.color
    },


    labelSemiBoldOne: {
        fontFamily: Themes.typography.label_semibold_1.font,
        fontSize: Themes.typography.label_semibold_1.size,
        lineHeight: Themes.typography.label_semibold_1.line_height,
        color: Themes.typography.label_semibold_1.color
    },
    labelSemiBoldTwo: {
        fontFamily: Themes.typography.label_semibold_2.font,
        fontSize: Themes.typography.label_semibold_2.size,
        lineHeight: Themes.typography.label_semibold_2.line_height,
        color: Themes.typography.label_semibold_2.color
    },
    labelSemiBoldThree: {
        fontFamily: Themes.typography.label_semibold_3.font,
        fontSize: Themes.typography.label_semibold_3.size,
        lineHeight: Themes.typography.label_semibold_3.line_height,
        color: Themes.typography.label_semibold_3.color
    }

});




