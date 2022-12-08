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

{/* <Home color="black" size={24} />; */}
export default function NotificaitonScreen({navigation, route}) {

    // const {  } = route.params;

    const DATA = [
        {
        title: 'Invitations',
        data: [['Dan invites you to join Friendly Bananas', 'Investment: Apple', Images.profilePic.two, () => navigation.navigate('Invitation')], ['Alex invites you to join Crazy Mangoes', 'Investment: VTI', Images.profilePic.three, () => navigation.navigate('Invitation')]],
        },
        {
        title: 'Wallus reminders',
        data: [['This investment is no longer aligned with your goals', 'Investment: Apple', Images.Wallus, () => navigation.navigate('Invitation')], ['This investment is no longer aligned with your goals', 'Investment: Apple', Images.Wallus, () => navigation.navigate('Invitation')]],
        },
    ];

    const renderNotifications = ({item}) => {
        console.log(item)
        return (
            <View>
                {/* <Notification message={'Dan invites you to join Friendly Bananas'} investment={'Investment: Apple'} imageURL={Images.profilePic.Dan} onPress={() => navigation.navigate('Invitation')}/>   */}
                <Notification message={item[0]} investment={item[1]} imageURL={item[2]} onPress={item[3]}/>    
  
            </View>
        )
    }
    const renderWallusReminders = ({item}) => {
        return (
            <View>
                <Notification message={'This investment is no longer aligned with your goals'} investment={'Investment: Apple'} imageURL={Images.Wallus} onPress={() => navigation.navigate('Invitation')}/>    
            </View>
        )
    }

    const renderSectionTitle = ({ section: { title } }) => {
        return (
            <View style={styles.sectionListTitle}>
                <AppText.TitleSemiBoldFour>{title}</AppText.TitleSemiBoldFour>
            </View>
        )
    }


    
    return(
        <SafeAreaView style={styles.container}>
            <Header text="Notifications" navigation={navigation} hasDivider={true} />
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index} /* unique key for each item */
                renderItem={renderNotifications } /* render each item as a MenuItem component with the given name */
                renderSectionHeader={renderSectionTitle}
                style={styles.sectionList}
                contentContainerStyle={styles.sectionListContent}
                stickySectionHeadersEnabled={false}
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



// Branch

// Main
// Main Branch How is it going??
