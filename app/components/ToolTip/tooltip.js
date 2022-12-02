import { Themes} from "../../../assets/themes"

// Components
import { StyleSheet, TouchableOpacity,} from "react-native";
import { AppText } from "../CustomText/customText";


// Lucide Icons
import { X } from 'lucide-react-native';


export const Tooltip = ({text, onPress, TouchableOpacityStyle, TextStyle}) => {

    return (
        <View style={styles.container}>
            <Text>
                Hello
            </Text>
        </View>
    );

}




// **********************************************************************************************
// Styles
// **********************************************************************************************

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'grey',
        position: 'absolute'
    }
})