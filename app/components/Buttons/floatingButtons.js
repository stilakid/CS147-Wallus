// Components
import { StyleSheet, View } from "react-native";
import { AppButton } from "./buttons";



export const AppFloatingButton = ({text, button, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    if (!button) {
        button = <AppButton text={text} onPress={onPress} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} />
    }

    return (
        <View style={[styles.floatingButtonDefault, containerStyle]}>
            {button}
        </View>
    );
}


// **********************************************************************************************
// Primary Buttons
// **********************************************************************************************


AppFloatingButton.PrimaryThickOne = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.PrimaryThickOne text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.PrimaryThickTwo = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.PrimaryThickTwo text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.PrimaryThickThree = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.PrimaryThickThree text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.PrimaryThickFour = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.PrimaryThickFour text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.PrimaryThinOne = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.PrimaryThinOne text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.PrimaryThinTwo = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.PrimaryThinTwo text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.PrimaryThinThree = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.PrimaryThinThree text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.PrimaryThinFour = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.PrimaryThinFour text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}


// **********************************************************************************************
// Secondary Outline Buttons
// **********************************************************************************************

AppFloatingButton.SecondaryOutlineThickOne = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryOutlineThickOne text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.SecondaryOutlineThickTwo = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryOutlineThickTwo text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.SecondaryOutlineThickThree = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryOutlineThickThree text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.SecondaryOutlineThickFour = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryOutlineThickFour text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.SecondaryOutlineThinOne = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryOutlineThinOne text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.SecondaryOutlineThinTwo = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryOutlineThinTwo text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.SecondaryOutlineThinThree = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryOutlineThinThree text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.SecondaryOutlineThinFour = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryOutlineThinFour text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}


// **********************************************************************************************
// Secondary Grey Buttons
// **********************************************************************************************

AppFloatingButton.SecondaryGreyThickOne = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryGreyThickOne text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}


AppFloatingButton.SecondaryGreyThickTwo = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryGreyThickTwo text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}


AppFloatingButton.SecondaryGreyThickThree = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryGreyThickThree text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}


AppFloatingButton.SecondaryGreyThickFour = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryGreyThickFour text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}


AppFloatingButton.SecondaryGreyThinOne = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryGreyThinOne text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}


AppFloatingButton.SecondaryGreyThinTwo = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryGreyThinTwo text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}


AppFloatingButton.SecondaryGreyThinThree = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryGreyThinThree text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}


AppFloatingButton.SecondaryGreyThinFour = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.SecondaryGreyThinFour text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}


// **********************************************************************************************
// Disabled Buttons
// **********************************************************************************************

AppFloatingButton.DisabledThickOne = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.DisabledThickOne text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.DisabledThickTwo = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.DisabledThickTwo text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.DisabledThickThree = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.DisabledThickThree text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.DisabledThickFour = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.DisabledThickFour text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.DisabledThinOne = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.DisabledThinOne text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.DisabledThinTwo = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.DisabledThinTwo text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.DisabledThinThree = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.DisabledThinThree text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton      
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.DisabledThinFour = ({text, onPress, TouchableOpacityStyle, TextStyle, containerStyle}) => {
    let button = <AppButton.DisabledThinFour text={text} TouchableOpacityStyle={TouchableOpacityStyle} TextStyle={TextStyle} onPress={onPress}/>

    return(
        <AppFloatingButton
            containerStyle={containerStyle}
            button={button}
        />
    )
}



// **********************************************************************************************
// Two Floating Buttons
// **********************************************************************************************

AppFloatingButton.PrimaryThickDual = ({textOne, textTwo, onPressOne, onPressTwo, TouchableOpacityStyleOne, TouchableOpacityStyleTwo, TextStyleOne, TextStyleTwo, containerStyle, dualButtonContainerStyle}) => {
    let button = (
        <View style={[styles.dualButton, dualButtonContainerStyle]}>
            <AppButton.PrimaryThickThree text={textOne} TouchableOpacityStyle={[styles.buttonOne, TouchableOpacityStyleOne]} TextStyle={TextStyleOne} onPress={onPressOne}/>
            <AppButton.PrimaryThickThree text={textTwo} TouchableOpacityStyle={[styles.buttonTwo, TouchableOpacityStyleTwo]} TextStyle={TextStyleTwo} onPress={onPressTwo}/>
        </View>
    )

    return(
        <AppFloatingButton
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.PrimaryThickDualColor = ({textOne, textTwo, onPressOne, onPressTwo, TouchableOpacityStyleOne, TouchableOpacityStyleTwo, TextStyleOne, TextStyleTwo, containerStyle, dualButtonContainerStyle}) => {
    let button = (
        <View style={[styles.dualButton, dualButtonContainerStyle]}>
            <AppButton.SecondaryOutlineThickThree text={textOne} TouchableOpacityStyle={[styles.buttonOne, TouchableOpacityStyleOne]} TextStyle={TextStyleOne} onPress={onPressOne}/>
            <AppButton.PrimaryThickThree text={textTwo} TouchableOpacityStyle={[styles.buttonTwo, TouchableOpacityStyleTwo]} TextStyle={TextStyleTwo} onPress={onPressTwo}/>
        </View>
    )

    return(
        <AppFloatingButton
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.PrimaryThickTriple = ({textOne, textTwo, textThree, onPressOne, onPressTwo, onPressThree, TouchableOpacityStyleOne, TouchableOpacityStyleTwo, TextStyleOne, TextStyleTwo, containerStyle, dualButtonContainerStyle}) => {
    let button = (
        <View >
            <View style={{paddingBottom: 16, alignItems: 'flex-end'}}>
                <AppButton.PrimaryThickThree text={textTwo} TouchableOpacityStyle={[styles.buttonTwo, TouchableOpacityStyleTwo]} TextStyle={TextStyleTwo} onPress={onPressTwo}/>
            </View>
            <View style={[styles.dualButton, dualButtonContainerStyle]}>
                <AppButton.SecondaryOutlineThickThree text={textOne} TouchableOpacityStyle={[styles.buttonOne, TouchableOpacityStyleOne]} TextStyle={TextStyleOne} onPress={onPressOne}/>
                <AppButton.PrimaryThickThree text={textThree} TouchableOpacityStyle={[styles.buttonTwo, TouchableOpacityStyleTwo]} TextStyle={TextStyleTwo} onPress={onPressThree}/>
            </View>
        </View>
    )

    return(
        <AppFloatingButton
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.PrimaryThinDual = ({textOne, textTwo, onPressOne, onPressTwo, TouchableOpacityStyleOne, TouchableOpacityStyleTwo, TextStyleOne, TextStyleTwo, containerStyle, dualButtonContainerStyle}) => {
    let button = (
        <View style={[styles.dualButton, dualButtonContainerStyle]}>
            <AppButton.PrimaryThinThree text={textOne} TouchableOpacityStyle={[styles.buttonOne, TouchableOpacityStyleOne]} TextStyle={TextStyleOne} onPress={onPressOne}/>
            <AppButton.PrimaryThinThree text={textTwo} TouchableOpacityStyle={[styles.buttonTwo, TouchableOpacityStyleTwo]} TextStyle={TextStyleTwo} onPress={onPressTwo}/>
        </View>
    )

    return(
        <AppFloatingButton
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.SecondaryGreyThickDual = ({textOne, textTwo, onPressOne, onPressTwo, TouchableOpacityStyleOne, TouchableOpacityStyleTwo, TextStyleOne, TextStyleTwo, containerStyle, dualButtonContainerStyle}) => {
    let button = (
        <View style={[styles.dualButton, dualButtonContainerStyle]}>
            <AppButton.SecondaryGreyThickThree text={textOne} TouchableOpacityStyle={[styles.buttonOne, TouchableOpacityStyleOne]} TextStyle={TextStyleOne} onPress={onPressOne}/>
            <AppButton.SecondaryGreyThickThree text={textTwo} TouchableOpacityStyle={[styles.buttonTwo, TouchableOpacityStyleTwo]} TextStyle={TextStyleTwo} onPress={onPressTwo}/>
        </View>
    )

    return(
        <AppFloatingButton
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.SecondaryGreyThinDual = ({textOne, textTwo, onPressOne, onPressTwo, TouchableOpacityStyleOne, TouchableOpacityStyleTwo, TextStyleOne, TextStyleTwo, containerStyle, dualButtonContainerStyle}) => {
    let button = (
        <View style={[styles.dualButton, dualButtonContainerStyle]}>
            <AppButton.SecondaryGreyThinThree text={textOne} TouchableOpacityStyle={[styles.buttonOne, TouchableOpacityStyleOne]} TextStyle={TextStyleOne} onPress={onPressOne}/>
            <AppButton.SecondaryGreyThinThree text={textTwo} TouchableOpacityStyle={[styles.buttonTwo, TouchableOpacityStyleTwo]} TextStyle={TextStyleTwo} onPress={onPressTwo}/>
        </View>
    )

    return(
        <AppFloatingButton
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.SecondaryOutlineThickDual = ({textOne, textTwo, onPressOne, onPressTwo, TouchableOpacityStyleOne, TouchableOpacityStyleTwo, TextStyleOne, TextStyleTwo, containerStyle, dualButtonContainerStyle}) => {
    let button = (
        <View style={[styles.dualButton, dualButtonContainerStyle]}>
            <AppButton.SecondaryOutlineThickThree text={textOne} TouchableOpacityStyle={[styles.buttonOne, TouchableOpacityStyleOne]} TextStyle={TextStyleOne} onPress={onPressOne}/>
            <AppButton.SecondaryOutlineThickThree text={textTwo} TouchableOpacityStyle={[styles.buttonTwo, TouchableOpacityStyleTwo]} TextStyle={TextStyleTwo} onPress={onPressTwo}/>
        </View>
    )

    return(
        <AppFloatingButton
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.SecondaryOutlineThinDual = ({textOne, textTwo, onPressOne, onPressTwo, TouchableOpacityStyleOne, TouchableOpacityStyleTwo, TextStyleOne, TextStyleTwo, containerStyle, dualButtonContainerStyle}) => {
    let button = (
        <View style={[styles.dualButton, dualButtonContainerStyle]}>
            <AppButton.SecondaryOutlineThinThree text={textOne} TouchableOpacityStyle={[styles.buttonOne, TouchableOpacityStyleOne]} TextStyle={TextStyleOne} onPress={onPressOne}/>
            <AppButton.SecondaryOutlineThinThree text={textTwo} TouchableOpacityStyle={[styles.buttonTwo, TouchableOpacityStyleTwo]} TextStyle={TextStyleTwo} onPress={onPressTwo}/>
        </View>
    )

    return(
        <AppFloatingButton
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.DisabledThickDual = ({textOne, textTwo, onPressOne, onPressTwo, TouchableOpacityStyleOne, TouchableOpacityStyleTwo, TextStyleOne, TextStyleTwo, containerStyle, dualButtonContainerStyle}) => {
    let button = (
        <View style={[styles.dualButton, dualButtonContainerStyle]}>
            <AppButton.DisabledThickThree text={textOne} TouchableOpacityStyle={[styles.buttonOne, TouchableOpacityStyleOne]} TextStyle={TextStyleOne} onPress={onPressOne}/>
            <AppButton.DisabledThickThree text={textTwo} TouchableOpacityStyle={[styles.buttonTwo, TouchableOpacityStyleTwo]} TextStyle={TextStyleTwo} onPress={onPressTwo}/>
        </View>
    )

    return(
        <AppFloatingButton
            containerStyle={containerStyle}
            button={button}
        />
    )
}

AppFloatingButton.DisabledThinDual = ({textOne, textTwo, onPressOne, onPressTwo, TouchableOpacityStyleOne, TouchableOpacityStyleTwo, TextStyleOne, TextStyleTwo, containerStyle, dualButtonContainerStyle}) => {
    let button = (
        <View style={[styles.dualButton, dualButtonContainerStyle]}>
            <AppButton.DisabledThinThree text={textOne} TouchableOpacityStyle={[styles.buttonOne, TouchableOpacityStyleOne]} TextStyle={TextStyleOne} onPress={onPressOne}/>
            <AppButton.DisabledThinThree text={textTwo} TouchableOpacityStyle={[styles.buttonTwo, TouchableOpacityStyleTwo]} TextStyle={TextStyleTwo} onPress={onPressTwo}/>
        </View>
    )

    return(
        <AppFloatingButton
            containerStyle={containerStyle}
            button={button}
        />
    )
}




const styles = StyleSheet.create({
    // Default Button Style
    floatingButtonDefault: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 16
    },
    dualButton: {
        display: 'flex',
        flexDirection: 'row'
    },
    buttonOne: {
        marginRight: 16,
    },
    buttonTwo: {

    }
})