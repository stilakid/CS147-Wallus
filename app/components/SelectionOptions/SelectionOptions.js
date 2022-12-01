import { Themes} from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity,} from "react-native";
import { AppText } from "../CustomText/customText";

export function SelectionOptions ({text, onPress, TouchableOpacityStyle, TextStyle}) {
    return (
        <TouchableOpacity onPress={onPress} style={[TouchableOpacityStyle]}>
             <AppText.LabelSemiBoldTwo style={TextStyle}>{text}</AppText.LabelSemiBoldTwo>
        </TouchableOpacity>
    );
}

/*****28px selection options******/

SelectionOptions.border_Unselected_28px = ({text, onPress, TouchableOpacityStyle, TextStyle}) => (
    <SelectionOptions
        text={text}
        onPress={onPress}
        TouchableOpacityStyle={[styles.container, styles.borderContainer, styles.height28, TouchableOpacityStyle]}
        TextStyle={[styles.containerText, TextStyle]}
    />


    // <View style={[styles.container, styles.borderContainer]}>
    //     <AppText.LabelSemiBoldTwo style={{color:Themes.colors.neutral_600}}>{text}</AppText.LabelSemiBoldTwo>
    // </View>
)

SelectionOptions.noBorder_Unselected_28px = ({text, onPress, TouchableOpacityStyle, TextStyle}) => (
    <SelectionOptions
        text={text}
        onPress={onPress}
        TouchableOpacityStyle={[styles.container, styles.borderLessContainer, styles.height28, TouchableOpacityStyle]}
        TextStyle={[styles.containerText, TextStyle]}
    />

    // <View style={styles.container}>
    //     <AppText.LabelSemiBoldTwo style={{color:Themes.colors.neutral_600}}>{text}</AppText.LabelSemiBoldTwo>
    // </View>
)

SelectionOptions.selected_28px = ({text, onPress, TouchableOpacityStyle, TextStyle}) => (
    <SelectionOptions
        text={text}
        onPress={onPress}
        TouchableOpacityStyle={[styles.container, styles.filledContainer, styles.height28, TouchableOpacityStyle]}
        TextStyle={[styles.filledContainerText, TextStyle]}
    />

    // <View style={[styles.container, styles.filledContainer]}>
    //     <AppText.LabelSemiBoldTwo style={{color:Themes.colors.primary_900}}>{text}</AppText.LabelSemiBoldTwo>
    // </View>
)

/*****32px selection options******/

SelectionOptions.border_Unselected_32px = ({text, onPress, TouchableOpacityStyle, TextStyle}) => (
    <SelectionOptions
        text={text}
        onPress={onPress}
        TouchableOpacityStyle={[styles.container, styles.borderContainer, styles.height32, TouchableOpacityStyle]}
        TextStyle={[styles.containerText, TextStyle]}
    />

    // <View style={[styles.container, styles.borderContainer, styles.height32]}>
    //     <AppText.LabelSemiBoldTwo style={{color:Themes.colors.neutral_600}}>{text}</AppText.LabelSemiBoldTwo>
    // </View>
)

SelectionOptions.noBorder_Unselected_32px = ({text, onPress, TouchableOpacityStyle, TextStyle}) => (
    <SelectionOptions
        text={text}
        onPress={onPress}
        TouchableOpacityStyle={[styles.container, styles.borderLessContainer, styles.height32, TouchableOpacityStyle]}
        TextStyle={[styles.containerText, TextStyle]}
    />

    // <View style={[styles.container, styles.borderContainer, styles.height32]}>
    //     <AppText.LabelSemiBoldTwo style={{color:Themes.colors.neutral_600}}>{text}</AppText.LabelSemiBoldTwo>
    // </View>
)

SelectionOptions.selected_32px = ({text, onPress, TouchableOpacityStyle, TextStyle}) => (
    <SelectionOptions
        text={text}
        onPress={onPress}
        TouchableOpacityStyle={[styles.container, styles.filledContainer, styles.height32, TouchableOpacityStyle]}
        TextStyle={[styles.filledContainerText, TextStyle]}
    />
    
    // <View style={[styles.container, styles.filledContainer, styles.height32]}>
    //     <AppText.LabelSemiBoldTwo style={{color:Themes.colors.primary_900}}>{text}</AppText.LabelSemiBoldTwo>
    // </View>
)

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 2,
        paddingBottom: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
        backgroundColor: Themes.colors.white
    },
    containerText: {
        color: Themes.colors.neutral_600
    },

    borderLessContainer: {
        paddingHorizontal: 10        // more than usual because border container has border width of 2px on top of the default padding. We want the buttons to have the same width and height for the same text regardless of border.
    },
    borderContainer: {
        borderColor: Themes.colors.neutral_200,
        borderWidth: 2,
    },
    filledContainer: {
        backgroundColor: Themes.colors.primary_50,
        paddingHorizontal: 10        // more than usual because border container has border width of 2px on top of the default padding. We want the buttons to have the same width and height for the same text regardless of border.
    },
    filledContainerText: {
        color: Themes.colors.primary_900
    },

    height32: {
        height: 32
    },
    height28: {
        height: 28
    }
});
