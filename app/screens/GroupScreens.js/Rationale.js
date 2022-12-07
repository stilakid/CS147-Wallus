import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, SectionList } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import Header from "../../components/Header/header";
import { Notification } from "../../components/Community & Feed/Notification";

// Lucide Icons
import { ChevronLeft } from 'lucide-react-native';
import RationaleCard from "../../components/Cards/RationaleCard";

{/* <Home color="black" size={24} />; */}
export default function Rationale({navigation, route}) {

    // const {  } = route.params;

    // const DATA = [
    //     {
    //     title: 'Invitations',
    //     data: [['Dan invites you to join Friendly Bananas', 'Investment: Apple', Images.profilePic.Dan, () => navigation.navigate('Invitation')], ['Dan invites you to join Friendly Bananas', 'Investment: Apple', Images.profilePic.Dan, () => navigation.navigate('Invitation')]],
    //     },
    //     {
    //     title: 'Wallus reminders',
    //     data: [['This investment is no longer aligned with your goals', 'Investment: Apple', Images.Wallus, () => navigation.navigate('Invitation')], ['This investment is no longer aligned with your goals', 'Investment: Apple', Images.Wallus, () => navigation.navigate('Invitation')]],
    //     },
    // ];

    // const renderNotifications = ({item}) => {
    //     console.log(item)
    //     return (
    //         <View>
    //             {/* <Notification message={'Dan invites you to join Friendly Bananas'} investment={'Investment: Apple'} imageURL={Images.profilePic.Dan} onPress={() => navigation.navigate('Invitation')}/>   */}
    //             <Notification message={item[0]} investment={item[1]} imageURL={item[2]} onPress={item[3]}/>    
  
    //         </View>
    //     )
    // }
    // const renderWallusReminders = ({item}) => {
    //     return (
    //         <View>
    //             <Notification message={'This investment is no longer aligned with your goals'} investment={'Investment: Apple'} imageURL={Images.Wallus} onPress={() => navigation.navigate('Invitation')}/>    
    //         </View>
    //     )
    // }

    // const renderSectionTitle = ({ section: { title } }) => {
    //     return (
    //         <View style={styles.sectionListTitle}>
    //             <AppText.TitleSemiBoldFour>{title}</AppText.TitleSemiBoldFour>
    //         </View>
    //     )
    // }


    
    return(
        <SafeAreaView style={styles.container}>
            <Header text="Why your friends joined" navigation={navigation} hasDivider={true} />
            <View style={{color: Themes.colors.neutral_800, alignItems: 'flex-start',  marginTop:16, marginLeft: 16}}>
                <AppText.TitleSemiBoldThree>4 comments</AppText.TitleSemiBoldThree>
            </View>
            <View style={{width: 358, height: 388, flexDirection: 'column', alignItems: 'flex-start'}}>
                <View style={{marginLeft:16}}>
                    <RationaleCard></RationaleCard>
                </View>
                <View style={{marginTop: 91, marginLeft:16}}>
                    <RationaleCard></RationaleCard>
                </View>
                <View style={{marginTop: 91, marginLeft:16}}>
                    <RationaleCard></RationaleCard>
                </View>
                <View style={{marginTop: 91, marginLeft:16}}>
                    <RationaleCard></RationaleCard>
                </View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        flex: 1,
    },
    sectionList: {
        width: '100%',
    },
    sectionListContent: {
        marginHorizontal: 16
    },
    sectionListTitle: {
        marginTop: 24,
        marginBottom: 12
    }
});

