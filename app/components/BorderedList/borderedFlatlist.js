import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button } from "react-native";
import { AppText } from "../CustomText/customText";
import Checkbox from "../Checkbox/Checkbox";
import { FlatList } from "react-native-gesture-handler";
import { Divider } from "../Divider/divider";
import { AppButton } from "../Buttons/buttons";

/*
You can pass in data to this component like this
const data = [
    {
        id: '1',
        text: 'this is the title of the list item'
        value: 'item value'
        tooltip: 'this is the tooltip text of the list item'
    }
]
*/

export default function BorderedFlatlist ({data}) {
    const FlatlistItem =({text, value})=> {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.leftContainer}>
                    <AppText.ParagraphTwo>{text}</AppText.ParagraphTwo>
                    <AppButton.toolTip TouchableOpacityStyle={styles.toolTipDefault}/>
                </View>
                <AppText.ParagraphTwo>{value}</AppText.ParagraphTwo>
            </View>
        );
    }
    
    const renderFlatlistItem =({item, index})=> {
        return (
            <FlatlistItem text={item.text} value={item.value}/>
        );
    }

    return (
        <View style={styles.flatlistContainer}>
            <FlatList
                data={data}
                renderItem={(item) => renderFlatlistItem(item)}
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
    flatlistContainer: {
        borderRadius:16,
        borderColor: Themes.colors.neutral_200,
        borderWidth: 2,
    },
    flatList: {
        flexGrow:0,
    },
    toolTipDefault: {
        marginLeft: 4
    },
    leftContainer: {
        flexDirection:'row',
        alignItems: 'center',

    }
});