import * as React from 'react'
import { StyleSheet, TouchableOpacity,} from "react-native";
import { Themes} from "../../../assets/themes"
import { AppText } from "../CustomText/customText";

export const AppButton = ({text, goTo, appText, TouchableOpacityStyle, TextStyle}: any) => {

    if (!appText) {
        appText = <AppText style={TextStyle}> {text} </AppText>
    }

    return (
        <TouchableOpacity onPress={()=>goTo} style={[styles.default, TouchableOpacityStyle]}>
            {appText}
        </TouchableOpacity>
    );

}

// **********************************************************************************************
// Primary Buttons
// **********************************************************************************************

AppButton.PrimaryThickOne = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.primary, ...styles.largeHeight, ...styles.fullWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.PrimaryThickTwo = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.primary, ...styles.largeHeight, ...styles.mediumWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.PrimaryThickThree = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.primary, ...styles.largeHeight, ...styles.halfWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.PrimaryThickFour = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.primary, ...styles.largeHeight, ...styles.smallWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.PrimaryThinOne = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.primary, ...styles.smallHeight, ...styles.fullWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.PrimaryThinTwo = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.primary, ...styles.smallHeight, ...styles.mediumWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.PrimaryThinThree = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.primary, ...styles.smallHeight, ...styles.halfWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.PrimaryThinFour = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.primaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.primary, ...styles.smallHeight, ...styles.smallWidth, ...TouchableOpacityStyle}}
        />
    );
}


// **********************************************************************************************
// Secondary Outline Buttons
// **********************************************************************************************

AppButton.SecondaryOutlineThickOne = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryOutline, ...styles.largeHeight, ...styles.fullWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.SecondaryOutlineThickTwo = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryOutline, ...styles.largeHeight, ...styles.mediumWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.SecondaryOutlineThickThree = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryOutline, ...styles.largeHeight, ...styles.halfWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.SecondaryOutlineThickFour = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryOutline, ...styles.largeHeight, ...styles.smallWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.SecondaryOutlineThinOne = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryOutline, ...styles.smallHeight, ...styles.fullWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.SecondaryOutlineThinTwo = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryOutline, ...styles.smallHeight, ...styles.mediumWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.SecondaryOutlineThinThree = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryOutline, ...styles.smallHeight, ...styles.halfWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.SecondaryOutlineThinFour = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryOutline, ...styles.smallHeight, ...styles.smallWidth, ...TouchableOpacityStyle}}
        />
    );
}



// **********************************************************************************************
// Secondary Grey Buttons
// **********************************************************************************************

AppButton.SecondaryGreyThickOne = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryGrey, ...styles.largeHeight, ...styles.fullWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.SecondaryGreyThickTwo = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryGrey, ...styles.largeHeight, ...styles.mediumWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.SecondaryGreyThickThree = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryGrey, ...styles.largeHeight, ...styles.halfWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.SecondaryGreyThickFour = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryGrey, ...styles.largeHeight, ...styles.smallWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.SecondaryGreyThinOne = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryGrey, ...styles.smallHeight, ...styles.fullWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.SecondaryGreyThinTwo = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryGrey, ...styles.smallHeight, ...styles.mediumWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.SecondaryGreyThinThree = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryGrey, ...styles.smallHeight, ...styles.halfWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.SecondaryGreyThinFour = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.secondaryText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.secondaryGrey, ...styles.smallHeight, ...styles.smallWidth, ...TouchableOpacityStyle}}
        />
    );
}



// **********************************************************************************************
// Disabled Buttons
// **********************************************************************************************

AppButton.DisabledThickOne = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.disabled, ...styles.largeHeight, ...styles.fullWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.DisabledThickTwo = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.disabled, ...styles.largeHeight, ...styles.mediumWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.DisabledThickThree = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.disabled, ...styles.largeHeight, ...styles.halfWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.DisabledThickFour = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldOne style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldOne>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.disabled, ...styles.largeHeight, ...styles.smallWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.DisabledThinOne = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.disabled, ...styles.smallHeight, ...styles.fullWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.DisabledThinTwo = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.disabled, ...styles.smallHeight, ...styles.mediumWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.DisabledThinThree = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.disabled, ...styles.smallHeight, ...styles.halfWidth, ...TouchableOpacityStyle}}
        />
    );
}

AppButton.DisabledThinFour = ({text, goTo, TouchableOpacityStyle, TextStyle}: any) => {

    const appText = <AppText.LabelBoldTwo style={[styles.disabledText, TextStyle]}> {text} </AppText.LabelBoldTwo>

    return (
        <AppButton
            appText={appText}
            goTo={goTo}
            TouchableOpacityStyle={{ ...styles.disabled, ...styles.smallHeight, ...styles.smallWidth, ...TouchableOpacityStyle}}
        />
    );
}





// **********************************************************************************************
// Styles
// **********************************************************************************************

const styles = StyleSheet.create({
    // Default Button Style
    default: {
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


    ButtonText:{
        width: 48,      
        height: 19,
        color: "#FFFFFF",   
        order: 0,
    }
    
});