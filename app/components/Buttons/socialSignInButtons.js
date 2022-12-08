import { StyleSheet, View } from "react-native";
import { AppButton } from "./buttons";
import { Themes } from "../../../assets/themes";


const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
}

const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
}

const onSignInApple = () => {
    console.warn('onSignInApple');
}


export function SocialSignInButtons() {

    return (
        <View style={styles.container} >
            <AppButton.SecondaryOutlineThickOne
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
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 16
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
    }
})