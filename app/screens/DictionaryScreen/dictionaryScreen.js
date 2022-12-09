import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, Image, TouchableOpacity } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";
import Home from "../../components/SearchBar/Home";



export default function DictionaryScreen({navigation, route}) {
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../../assets/dictionary.png')}
            />
            <View style={{width:'100%', paddingHorizontal:16}}>
                <TouchableOpacity
                    onPress={() => {
                        console.warn('Search bar cliked');
                        console.log('search bar clicked');
                        navigation.navigate('SearchScreen')
                    }}
                    style={[styles.search]}
                >
                    <Image
                        source={require('../../../assets/search.png')}
                        style={styles.mag}
                    />
                    <AppText.ParagraphTwo style={styles.searchany}>Search anything</AppText.ParagraphTwo>
                </TouchableOpacity>
            </View>
            
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
                        <AppText.ParagraphTwo style={styles.optionText}>Dividend</AppText.ParagraphTwo>
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
        width:'100%',
        flex: 1,
      }, 
      image: {
        width: '100%',
        height: 240,
        position: 'absolute',
        top: 0,
      },
      search: {
        flexDirection: 'row',
        alignItems: 'center',

        height: 48,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: Themes.colors.neutral_200,
        alignSelf: 'stretch',
        borderRadius: 16,
        marginTop: 240,
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
        paddingHorizontal:16,
        alignItems: 'flex-start',
        width: '100%',
      },
    recenttitle: {
        color: Themes.colors.neutral_800,
        marginBottom: 12
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 24,
        marginBottom: 12,
    },
    optionText: {
        color: Themes.colors.neutral_600
    },
    arrow: {
        width: 24,
        height: 24,
    }
});