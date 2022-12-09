import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, SectionList, Image } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import Header from "../../components/Header/header";
import { Notification } from "../../components/Community & Feed/Notification";
import { Smile } from "lucide-react-native";
import { FlatList } from "react-native-gesture-handler";

// Lucide Icons
import { ChevronLeft } from 'lucide-react-native';

{/* <Home color="black" size={24} />; */}
export default function ProfileScreen({navigation, route}) {
    const myActivity= [
        {
            id: 1,
            logoURL: Images.groupProfile.popcorn,
            companyName: 'S&P500',
            timeStamp: '2 Months',
            verb: 'Joined',
            noun: 'Tactless Popcorns',
            rationale: 'My friend invited me and I heard this is a good index fund to start with!'
        },
        {
            id: 2,
            logoURL: Images.groupProfile.potato,
            companyName: 'NASDAQ',
            timeStamp: '1 Months',
            verb: "Joined",
            noun: 'Brave Potatoes',
            rationale: 'My friend invited me and I heard this is a good index fund to start with!'
        }

    ]
    const placeholder =[
        {
            random: 'placeholder',
        }
    ];
    const MyActivityItem =({item}) =>{
        return (
            <View style={[styles.news, {marginBottom: 24}]}>
                <Image
                    style={styles.companyLogo}
                    source={item.logoURL}
                    resizeMode='contain'
                />
                <View style={styles.textContainer}>
                    <AppText.LabelSemiBoldOne>{item.verb}<AppText.LabelSemiBoldOne> {item.noun}</AppText.LabelSemiBoldOne></AppText.LabelSemiBoldOne>
                    <Text style={styles.investmentStyle}>{item.companyName} · {item.timeStamp}</Text>
                    <View style={styles.rationale}>
                        <AppText.LabelSemiBoldTwo style={{marginBottom:4}}>Rationale</AppText.LabelSemiBoldTwo>
                        <AppText.ParagraphTwo style={{color:Themes.colors.neutral_600}}>{item.rationale}</AppText.ParagraphTwo>
                    </View>
                </View>
            </View>

        );
    }
    const renderMyActivityItem =({item, index})=>{
        return (
            <MyActivityItem item={item}></MyActivityItem>
        );
    }
    const renderPlaceholder =()=> {
        return (   
            <View style={styles.container}>
            <Header text={"Profile"} navigation={navigation}/>
            <Image
                source={Images.profilePic.nine}
                style={{width:64, height:64, marginBottom: 16}}
            />
            <AppText.TitleSemiBoldThree style={{marginBottom:16}}>Emily Sanders</AppText.TitleSemiBoldThree>
            <View style={styles.statsContainer}>
                <View style={[styles.stat, {marginRight: 8}]}>
                    <AppText.LabelSemiBoldTwo style={{marginBottom: 8, color: Themes.colors.neutral_600}}>Total investing</AppText.LabelSemiBoldTwo>
                    <AppText.TitleSemiBoldThree>USD 120.24</AppText.TitleSemiBoldThree>
                </View>
                <View style={[styles.stat, {marginLeft: 8}]}>
                    <AppText.LabelSemiBoldTwo style={{marginBottom: 8, color: Themes.colors.neutral_600}}>Friend</AppText.LabelSemiBoldTwo>
                    <AppText.TitleSemiBoldThree>12</AppText.TitleSemiBoldThree>
                </View>
            </View>
            <AppButton.SecondaryOutlineThickOne text={"Update Investment Preferences"} onPress={()=>navigation.navigate("Ask Investment Experience Screen")}/>
            <Divider.Horizontal style={{marginVertical:24}}/>
            <AppText.TitleSemiBoldFour style={{paddingHorizontal:16, width:'100%', marginBottom:32}}>My activity</AppText.TitleSemiBoldFour>


            
            <FlatList
                data={myActivity}
                renderItem={(item) => renderMyActivityItem(item)}
                keyExtractor={(item) => item.id}
                scrollEnabled='false'
                style={{flexGrow: 1, width:"100%", marginBottom: 40}}
            /> 
            </View>

        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={placeholder}
            renderItem={(item) => renderPlaceholder(item)}
            showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        flex: 1,
         
    },
    statsContainer: {
        marginHorizontal:16,
        flexDirection: 'row',
        marginBottom: 16,
    },
    companyLogo: {
        height:40,
        width:40,
    },
    stat: {
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Themes.colors.neutral_200,
        padding: 16,
        width: "47.5%"
    },

    news: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginHorizontal:16,
        // backgroundColor:'red',
    },
    investmentStyle:{
        color: Themes.colors.neutral_500,
        marginTop: 4
    },
    textContainer: {
        marginLeft:12,
        marginRight:12,
        flex: 1,
        // backgroundColor:'blue'
    },
    rationale: {
        padding: 12,
        backgroundColor: Themes.colors.neutral_100,
        borderRadius: 16,
        marginTop: 16
    },
    icons: {
        height: 32,
        alignItems: 'flex-start',
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        marginTop: 16
    },
    icon: {
        width: 63,
        height: 32,
        backgroundColor: Themes.colors.neutral_100,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
    }
})