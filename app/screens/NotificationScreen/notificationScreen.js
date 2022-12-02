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
        data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
        title: 'Wallus reminders',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
    ];

    const renderNotifications = ({item}) => {
        return (
            <View>
                <Notification message={'Dan invites you to join Friendly Bananas'} investment={'Apple'} imageURL={Images.profilePic.Dan} />    
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
