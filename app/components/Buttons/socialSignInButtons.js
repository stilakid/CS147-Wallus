import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { AppButton } from "./buttons";
import { Themes, Images } from "../../../assets/themes";


const onSignInFacebook = () => {
    // console.warn('onSignInFacebook');
}

const onSignInGoogle = () => {
    // console.warn('onSignInGoogle');
}

const onSignInApple = () => {
    // console.warn('onSignInApple');
}


export function SocialSignInButtons() {

    return (
        <View style={styles.container} >
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity
                    onPress={onSignInFacebook}
                    TouchableOpacityStyle={styles.facebookContainer}
                    >
                    <Image source={Images.company.google} style={[styles.socialButton,{borderColor:Themes.colors.neutral_200, borderWidth:2, borderRadius:999} ]}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onSignInGoogle}
                    TouchableOpacityStyle={styles.googleContainer}
                    >
                    <Image source={Images.company.apple} style={styles.socialButton}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onSignInApple}
                    TouchableOpacityStyle={styles.appleContainer}
                    >
                    <Image source={Images.company.facebook} style={styles.socialButton}/>
                </TouchableOpacity>
            </View>
            
            {/* <AppButton.SecondaryOutlineThickOne
                text={'Sign In with Facebook'}
                onPress={onSignInFacebook}
                TouchableOpacityStyle={styles.facebookContainer}
                TextStyle={styles.facebookText}
            />
            <AppButton.SecondaryOutlineThickOne
                text={'Sign In with Google'}
                onPress={onSignInGoogle}
                TouchableOpacityStyle={styles.googleContainer}
                TextStyle={styles.googleText}
            />
            <AppButton.SecondaryOutlineThickOne
                text={'Sign In with Apple'}
                onPress={onSignInApple}
                TouchableOpacityStyle={styles.appleContainer}
                TextStyle={styles.appleText}
            /> */}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 24
    },
    facebookContainer: {
        backgroundColor: '#1877F2',
        marginVertical: 2
    },
    googleContainer: {
        marginVertical: 2
    },
    appleContainer: {
        backgroundColor: Themes.colors.black,
        marginVertical: 2
    },
    facebookText: {
        color: Themes.colors.white
    },
    googleText: {

    },
    appleText: {
        color: Themes.colors.white
    },
    socialButton: {
        height:40,
        width:40,
        marginHorizontal:8,
    }
})