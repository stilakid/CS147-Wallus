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
import { FlatList } from "react-native-gesture-handler";

{/* <Home color="black" size={24} />; */}
export default function Rationale({navigation, route}) {
    const friend = route.params.friend;

    //Datasets
    const placeholder =[
        {
            random: 'placeholder',
        }
    ];

    const renderFriendRationaleItem =({item, index}) => {
        const person = friend[item];
        return (
            <RationaleCard
                name={person.name}
                profileURL={person.profilePicURL}
                date={person.dateCommented}
                rationale={person.rationale}
                style={{marginBottom:12}}
            />
        );
    }
    const renderPlaceholder =({item}) => {
        return (
            <View>
                <Header text="Why your friends joined" navigation={navigation} hasDivider={true} />
                <View style={{color: Themes.colors.neutral_800, alignItems: 'flex-start',  marginTop:16, marginLeft: 16, marginBottom: 16}}>
                    <AppText.TitleSemiBoldThree>5 comments</AppText.TitleSemiBoldThree>
                </View>
                <FlatList
                    data={Object.keys(friend)}
                    renderItem={(item) => renderFriendRationaleItem(item)}
                    keyExtractor={(item) => item}
                    scrollEnabled='false'
                    style={{marginHorizontal:16}}
                /> 
            </View>
        );
    }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={placeholder}
                renderItem={(item) => renderPlaceholder(item)}
                >
            </FlatList>
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

