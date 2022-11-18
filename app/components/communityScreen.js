import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Themes } from "../../assets/themes"

export default function CommunityScreen({navigation, route}) {
    
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <Text>
                COMMUNITY PAGE!!!
            </Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.background,
        flex: 1,
      },
      header: {
      },
});