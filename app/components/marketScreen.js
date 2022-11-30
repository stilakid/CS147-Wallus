import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Themes } from "../../assets/themes"
import { AppText } from "./CustomText/customText";
import { TrendTags } from "./TrendTags/TrendTags";

export default function MarketScreen({navigation, route}) {
    
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <Text>
                MARKET PAGE!!!
            </Text>

            <TrendTags.smallGreen tagText="wallus"></TrendTags.smallGreen>
            <TrendTags.bigGreen tagText="wallus"></TrendTags.bigGreen>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        flex: 1,
      },
    header: {
    },
});