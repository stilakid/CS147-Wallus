import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Themes } from "../../assets/themes"

export default function SongScreen({navigation, route}) {
    
    const { arguments_go_here } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <Text>
                HOME PAGE!!!
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