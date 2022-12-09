import { StyleSheet, SafeAreaView, Text, View, Button, Image } from "react-native";
import { SelectionOptions } from "../../components/SelectionOptions/SelectionOptions";

export default function TrendChart({trendGraphURL}) {
    // const {  } = route.params;
    return(
        <View style={styles.container}>
            <Image style={styles.chart} source={trendGraphURL}></Image>
            <View style={styles.selectionContainer}>
                <SelectionOptions.noBorder_Unselected_28px text={"1D"}/>
                <SelectionOptions.noBorder_Unselected_28px text={"1W"}/>
                <SelectionOptions.noBorder_Unselected_28px text={"1M"}/>
                <SelectionOptions.noBorder_Unselected_28px text={"3M"}/>
                <SelectionOptions.selected_28px text={"1Y"}/>
                <SelectionOptions.noBorder_Unselected_28px text={"All"}/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 16,
        // padding: 16,
    },
    chart: {
        width: "100%",
        height: 150,
        resizeMode: 'contain'
    },
    selectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
});