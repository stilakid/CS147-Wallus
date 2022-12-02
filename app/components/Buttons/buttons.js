import * as React from 'react'
import { Themes} from "../../../assets/themes"

// Components
import { StyleSheet, TouchableOpacity,} from "react-native";
import { AppText } from "../CustomText/customText";

// Lucide Icons
import { ChevronLeft } from 'lucide-react-native';
import { HelpCircle } from 'lucide-react-native';


export const AppButton = ({text, content, onPress, TouchableOpacityStyle, TextStyle}) => {

    if (!content) {
        if (text) {
            content = <AppText style={TextStyle}> {text} </AppText>
        } else {
            content = <AppText style={TextStyle}></AppText>
        }
    }

    return (
        <TouchableOpacity onPress={onPress} style={[TouchableOpacityStyle]}>
            {content}
        </TouchableOpacity>
    );

}

// **********************************************************************************************
// Primary Buttons
// **********************************************************************************************

AppButton.PrimaryThickOne = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[styles.defaultTextButton, styles.primary, styles.largeHeight, styles.fullWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.PrimaryThickTwo = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[styles.defaultTextButton, styles.primary, styles.largeHeight, styles.mediumWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.PrimaryThickThree = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[styles.defaultTextButton, styles.primary, styles.largeHeight, styles.halfWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.PrimaryThickFour = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[styles.defaultTextButton, styles.primary, styles.largeHeight, styles.smallWidth, TouchableOpacityStyle]}
        />
    );
}


AppButton.PrimaryThinOne = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.primary, styles.smallHeight, styles.fullWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.PrimaryThinTwo = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[styles.defaultTextButton, styles.primary, styles.smallHeight, styles.mediumWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.PrimaryThinThree = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[styles.defaultTextButton, styles.primary, styles.smallHeight, styles.halfWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.PrimaryThinFour = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[styles.defaultTextButton, styles.primary, styles.smallHeight, styles.smallWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.PrimaryThinFive = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={{ ...styles.defaultTextButton, ...styles.primary, ...styles.smallHeight, ...styles.xsmallWidth, ...TouchableOpacityStyle}}
        />
    );
}
// **********************************************************************************************
// Secondary Outline Buttons
// **********************************************************************************************

AppButton.SecondaryOutlineThickOne = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[styles.defaultTextButton, styles.secondaryOutline, styles.largeHeight, styles.fullWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.SecondaryOutlineThickTwo = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[styles.defaultTextButton, styles.secondaryOutline, styles.largeHeight, styles.mediumWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.SecondaryOutlineThickThree = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[styles.defaultTextButton, styles.secondaryOutline, styles.largeHeight, styles.halfWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.SecondaryOutlineThickFour = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.secondaryOutline, styles.largeHeight, styles.smallWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.SecondaryOutlineThinOne = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.secondaryOutline, styles.smallHeight, styles.fullWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.SecondaryOutlineThinTwo = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.secondaryOutline, styles.smallHeight, styles.mediumWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.SecondaryOutlineThinThree = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.secondaryOutline, styles.smallHeight, styles.halfWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.SecondaryOutlineThinFour = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.secondaryOutline, styles.smallHeight, styles.smallWidth, TouchableOpacityStyle]}
        />
    );
}



// **********************************************************************************************
// Secondary Grey Buttons
// **********************************************************************************************

AppButton.SecondaryGreyThickOne = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.secondaryGrey, styles.largeHeight, styles.fullWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.SecondaryGreyThickTwo = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.secondaryGrey, styles.largeHeight, styles.mediumWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.SecondaryGreyThickThree = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.secondaryGrey, styles.largeHeight, styles.halfWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.SecondaryGreyThickFour = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.secondaryGrey, styles.largeHeight, styles.smallWidth, TouchableOpacityStyle]}
        />
    );
}


AppButton.SecondaryGreyThinOne = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.secondaryGrey, styles.smallHeight, styles.fullWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.SecondaryGreyThinTwo = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.secondaryGrey, styles.smallHeight, styles.mediumWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.SecondaryGreyThinThree = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.secondaryGrey, styles.smallHeight, styles.halfWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.SecondaryGreyThinFour = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.secondaryGrey, styles.smallHeight, styles.smallWidth, TouchableOpacityStyle]}
        />
    );
}



// **********************************************************************************************
// Disabled Buttons
// **********************************************************************************************

AppButton.DisabledThickOne = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.disabled, styles.largeHeight, styles.fullWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.DisabledThickTwo = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.disabled, styles.largeHeight, styles.mediumWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.DisabledThickThree = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.disabled, styles.largeHeight, styles.halfWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.DisabledThickFour = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldOne style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.disabled, styles.largeHeight, styles.smallWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.DisabledThinOne = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.disabled, styles.smallHeight, styles.fullWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.DisabledThinTwo = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.disabled, styles.smallHeight, styles.mediumWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.DisabledThinThree = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.disabled, styles.smallHeight, styles.halfWidth, TouchableOpacityStyle]}
        />
    );
}

AppButton.DisabledThinFour = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    const content = <AppText.LabelBoldTwo style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            content={content}
            onPress={onPress}
            TouchableOpacityStyle={[ styles.defaultTextButton, styles.disabled, styles.smallHeight, styles.smallWidth, TouchableOpacityStyle]}
        />
    );
}





// **********************************************************************************************
// Navigation Buttons
// **********************************************************************************************

AppButton.goBack = ({navigation, TouchableOpacityStyle}) => {
    const content = <ChevronLeft color={Themes.colors.neutral_600} size={24} />

    return (
        <AppButton
            content={content}
            onPress={() => navigation.goBack()}
            TouchableOpacityStyle={[ styles.backButton, TouchableOpacityStyle]}
        />
    );
}



// **********************************************************************************************
// Other UI Buttons
// **********************************************************************************************

AppButton.toolTip = ({text, TouchableOpacityStyle}) => {

    const content = <HelpCircle color={Themes.colors.neutral_600} size={20} />

    return (
        <AppButton
            content={content}
            // onPress={() => navigation.goBack()}
            TouchableOpacityStyle={TouchableOpacityStyle}
        />
    );
}


















// **********************************************************************************************
// Styles
// **********************************************************************************************

const styles = StyleSheet.create({
    // Default Button Style
    defaultTextButton: {
        backgroundColor: Themes.colors.primary,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // padding: 8, This is clipping the text from the bottom in React Native. However, with padding set to 0, it looks the same as when padding was 8px in figma. Infact, bumping the padding to 8 in react native makes the text looks displaced downwards.
        borderRadius: 32,
        // gap: 8 React Native does not have this property
    },


    // Button Color Types
    primary: {
        backgroundColor: Themes.colors.primary_700,
        borderBottomColor: Themes.colors.primary_900,
        borderBottomWidth: 4,
        borderStyle: 'solid'
    },

    primaryText: {
        color: Themes.colors.white
    },

    secondaryOutline: {
        backgroundColor: Themes.colors.white,
        borderColor: Themes.colors.neutral_200,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 4,
        borderLeftWidth: 2,
        borderStyle: 'solid'
    },

    secondaryGrey: {
        backgroundColor: Themes.colors.neutral_100,
    },

    secondaryText: {
        color: Themes.colors.neutral_700
    },

    disabled: {
        backgroundColor: Themes.colors.neutral_100,
    },

    disabledText: {
        color: Themes.colors.neutral_400
    },


    // Button Widths
    
    fullWidth: {
        width: 358
    },

    smallWidth: {
        width: 131
    },

    xsmallWidth: {
        width: 80
    },
    halfWidth: {
        width: 173
    },
    mediumWidth: {
        width: 249
    },


    // Button Heights

    smallHeight: {
        height: 32
    },

    largeHeight: {
        height: 48
    },
    

    // Back Button

    backButton: {
        // paddingLeft: 16,
        paddingRight: 16
    }
});