import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, SectionList } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import Header from "../../components/Header/header";

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
        {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
        },
        {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
        },
    ];


    
    return(
        <SafeAreaView style={styles.container}>
            <Header text="Notifications" navigation={navigation} hasDivider={true} />
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index} /* unique key for each item */
                renderItem={({ item }) => <View><Text>{item}</Text></View>} /* render each item as a MenuItem component with the given name */
                renderSectionHeader={({ section: { title } }) => ( /* grab the title property from each section element */
                    <View><Text>{title}</Text></View> /* render each section header as a Text component displaying the title */
                )}
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
});



// Branch

// Main
// Main Branch How is it going??
