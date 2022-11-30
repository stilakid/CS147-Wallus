import { Themes} from "../../../assets/themes"

// Components
import { StyleSheet, Text, View,Image} from "react-native";

export function ProfilePic ({imageURL}) {
    console.log(imageURL);
    return(
        <View>
            <Text>this is a test</Text>
            <Image source={{uri:imageURL}}/>
        </View>
    );
}

ProfilePic.border32px = ({imageURL}) => (
    <View>
        <Image source={{uri:imageURL}}/>
    </View>
)


const styles = StyleSheet.create({
    size32px: {
        height: 32,
        width: 32,
    },
    size40px: {
        height:40,
        height:40,
    },
});