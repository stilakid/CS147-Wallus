import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import Checkbox from "../../components/Checkbox/Checkbox";
import { FlatList } from "react-native-gesture-handler";
import { Divider } from "../Divider/divider";

/*
You can pass in data to this component like this
const data = [
    {
        id: '1',
        text: this is the title of the checkbox
    }
    {
        id: '2',
        text: this is the title of the checkbox
    }
]
*/

export default function BorderedCheckList ({data, style}) {
    const CheckListItem =({text})=> {
        return (
            <View style={styles.itemContainer}>
                <AppText.ParagraphTwo>{text}</AppText.ParagraphTwo>
                <Checkbox></Checkbox>
            </View>
        );
    }
    
    const renderCheckListItem =({item, index})=> {
        return (
            <CheckListItem text={item.text} />
        );
    }

    return (
        <View style={[styles.checkListContainer, style]}>
            <FlatList
                data={data}
                renderItem={(item) => renderCheckListItem(item)}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={<Divider.Horizontal/>}
                style={styles.flatList}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    itemContainer: {
        width: 358,
        alignItems:'center',
        justifyContent: "space-between",
        padding: 16,
        flexDirection:'row',
    },
    checkListContainer: {
        borderRadius:16,
        borderColor: Themes.colors.neutral_200,
        borderWidth: 2,
    },
    flatList: {
        flexGrow:0,
    }
});