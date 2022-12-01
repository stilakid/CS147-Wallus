import { StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity, Image} from "react-native";
import { Themes} from "../../../assets/themes"
import { AppText } from "../CustomText/customText";
import { AppButton } from "../Buttons/buttons"

export function Notification ({message, investment, imageURL}){
    console.log(imageURL)
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={
                    imageURL
                }
                resizeMode='cover'

            />
            <View style={{marginLeft:12, marginRight:16}}>
                <Text style={AppText.ParagraphTwo, styles.messageStyle}>{message}</Text>
                <Text style={AppText.LabelBoldOne, styles.investmentStyle}>{investment}</Text>
            </View>
            <AppButton.PrimaryThinFive text="Details"></AppButton.PrimaryThinFive>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'flex-start',   
        paddingHorizontal: 16,      
        position: 'absolute',
        width: 400,
        height: 106,
        margin: 20,
    },
    image:{
        height: 32,
        width: 32,
    },
    messageStyle:{
        width: 218,
        height: 48
    },
    investmentStyle:{
        width: 218,
        height: 48,
        color: "#6B7280",
    }

})
