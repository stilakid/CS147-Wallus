import Home from "../../components/SearchBar/Home";
import { StyleSheet, SafeAreaView, Text, View, Button, Image } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SearchScreen({navigation, route}) {
    return (
        <Home navigation={navigation}/>
    );
}