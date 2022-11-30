import { StyleSheet, View } from "react-native";
import { Themes } from "../../assets/themes"

export default function MarketScreen({navigation, route}) {
    return(
        <View style={styles.divider}/>
    );
}


const styles = StyleSheet.create({
    divider: {
        backgroundColor: Themes.colors.neutral_200,
        height: 2,
        borderRadius:999,
    }
});