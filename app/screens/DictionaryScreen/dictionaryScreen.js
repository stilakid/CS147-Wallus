import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, Image } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Home from "../../components/SearchBar/Home";



export default function DictionaryScreen({navigation, route}) {
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../../assets/dictionary.png')}
            />
            <TouchableOpacity onClick={() => navigation.navigate('Notifications')}>
                <View style={styles.search}>
                    <Image
                        source={require('../../../assets/search.png')}
                        style={styles.mag}
                    />
                    <AppText.ParagraphTwo style={styles.searchany}>Search anything</AppText.ParagraphTwo>
                </View>
            </TouchableOpacity>
            
            <View style={styles.recent}>
                <AppText.TitleSemiBoldFour style={styles.recenttitle}>Recent Searches</AppText.TitleSemiBoldFour>
                <TouchableOpacity onPress={() => navigation.navigate('DueDiligence')}>
                    <View style={styles.option}>
                        <AppText.ParagraphTwo style={styles.optionText}>Due Dilligence</AppText.ParagraphTwo>
                        <Image
                            source={require('../../../assets/arrow.png')}
                            style={styles.arrow}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dividend')}>
                    <View style={styles.option}>
                        <AppText.ParagraphTwo style={styles.optionText}>Day Trading</AppText.ParagraphTwo>
                        <Image
                            source={require('../../../assets/arrow.png')}
                            style={styles.arrow}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Taxes')}>
                    <View style={styles.option}>
                        <AppText.ParagraphTwo style={styles.optionText}>Taxes</AppText.ParagraphTwo>
                        <Image
                            source={require('../../../assets/arrow.png')}
                            style={styles.arrow}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        flex: 1,
      }, 
      image: {
        width: 390,
        height: 240,
        position: 'absolute',
        top: 0,
      },
      search: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 358,
        height: 48,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: Themes.colors.neutral_200,
        alignSelf: 'stretch',
        borderRadius: 16,
        top: 240,
        marginBottom: 40
      },
      mag: {
        width: 24,
        height: 24,
        marginLeft: 16
      },
      searchany: {
        color: Themes.colors.neutral_400,
        marginLeft: 14
      },
      recent: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 358,
        height: 132,
        position: 'absolute',
        top: 388,
        paddingLeft: 8
      },
    recenttitle: {
        color: Themes.colors.neutral_800,
        marginBottom: 12
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 358,
        height: 24,
        marginBottom: 12,
        paddingRight: 8
    },
    optionText: {
        color: Themes.colors.neutral_600
    },
    arrow: {
        width: 24,
        height: 24,
    }
});