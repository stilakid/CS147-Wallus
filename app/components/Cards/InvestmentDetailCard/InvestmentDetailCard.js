import { StyleSheet, SafeAreaView, Text, View, Button, Image } from "react-native";
import { Themes } from "../../../../assets/themes"
import { AppText } from "../../../components/CustomText/customText";
import { AppButton } from "../../../components/Buttons/buttons";
import { SelectionOptions } from "../../../components/SelectionOptions/SelectionOptions";
import { TrendTags } from "../../TrendTags/TrendTags";
import { MyTooltip } from "../../ToolTip/tooltip";

export default function InvestmentDetailCard({investAmount, trendText, trendGraphURL}) {
    // const {  } = route.params;
    return(
        <View style={styles.detailContainer}>
            <View style={styles.header}>
                <AppText.TitleSemiBoldFour style={{color:Themes.colors.neutral_800}}>Your investment</AppText.TitleSemiBoldFour>
                <View style={styles.textAlignWrapper}>
                    <MyTooltip text='lalalal'></MyTooltip>
                    {/* <AppButton.toolTip text={"this is the tooltip text for what this investment card means"}/> */}
                </View>
            </View>
            <AppText.TitleBoldOne style={{color:Themes.colors.neutral_800, marginBottom: 16}}>{investAmount}</AppText.TitleBoldOne>
            <Image style={styles.chart} source={require("../../../../assets/trendCharts/trend1.png")}></Image>
            <View style={styles.selectionContainer}>
                <SelectionOptions.noBorder_Unselected_28px text={"1D"}/>
                <SelectionOptions.noBorder_Unselected_28px text={"1W"}/>
                <SelectionOptions.noBorder_Unselected_28px text={"1M"}/>
                <SelectionOptions.noBorder_Unselected_28px text={"3M"}/>
                <SelectionOptions.selected_28px text={"1Y"}/>
                <SelectionOptions.noBorder_Unselected_28px text={"All"}/>
            </View>
            <View style={styles.footer}>
                <TrendTags.smallGreen tagText={"1Y: 12.88%"}/>
                <View style={{marginLeft:8}}>
                    <AppButton.toolTip text={"this is the tooltip text for what this tag means"}/>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    detailContainer: {
        width: 358,
        borderColor: Themes.colors.neutral_200,
        borderWidth: 2,
        borderRadius: 16,
        padding: 16,
    },
    header: {
        alignItems: 'center',
        flexDirection:"row",
        marginBottom: 12,
    },
    textAlignWrapper: {
        marginBottom:4,
        marginLeft: 8,
    },
    chart: {
        width: "100%",
        height: 64,
        marginVertical: 12,
    },
    selectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
    },
    footer: {
        alignItems: 'center',
        flexDirection:"row",
    }
});