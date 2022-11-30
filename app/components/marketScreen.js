import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Themes } from "../../assets/themes"

export default function MarketScreen({navigation, route}) {
    
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <Text>
                MARKET PAGE!!!
            </Text>
            <View style={styles.divider}/>
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
      divider: {
        backgroundColor: Themes.colors.neutral_200,
        height: 2,
        borderRadius:999,
      }
});