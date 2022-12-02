import { StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity, Image} from "react-native";
import { Themes, Images} from "../../../assets/themes"
import { AppText } from "../CustomText/customText";
import { AppButton } from "../Buttons/buttons"

export function Notification ({message, investment, imageURL, onPress}){
    console.log(imageURL)
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                // source={require({imageURL})}
                source={imageURL}
                resizeMode='contain'

            />
            <View style={styles.textContainer}>
                <Text style={styles.messageStyle}>{message}</Text>
                <Text style={styles.investmentStyle}>{investment}</Text>
            </View>
            <AppButton.PrimaryThinFive text="Details" onPress={onPress}></AppButton.PrimaryThinFive>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        // justifyContent: "flex-start",
        // alignItems: 'flex-start',   
        paddingVertical: 16,
    },
    image:{
        height: 32,
        width: 32,
    },
    messageStyle:{
    },
    investmentStyle:{
        color: Themes.colors.neutral_500,
        marginTop: 8
    },
    textContainer: {
        marginLeft:12,
        marginRight:16,
        flex: 1
    }
})
