// import React from 'react';
import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import { Divider } from "../../components/Divider/divider"
import { AppText } from "../CustomText/customText";
import { AppButton } from "../Buttons/buttons";
import { TrendTags } from "../TrendTags/TrendTags";

{/* <Home color="black" size={24} />; */}
export const BorderedList = ({data, renderItem, data_primary_key, FlatListStyle}) => {
    return(
        <FlatList
            data={data}
            renderItem = {renderItem}
            keyExtractor = {data_primary_key}
            style={[styles.flatList, FlatListStyle]}
            ItemSeparatorComponent={<Divider />}
        />
    );
}


// Expects data to have the following keys:
//  data = { { statName:'stat', tooltip: 'text', stat:  },
//           { statName:'stat', tooltip: 'text', stat: 'value' },
//            ...
//          }
BorderedList.InvestmentStat = ({data, data_primary_key, FlatListStyle}) => {

    const renderRow = ({item}) => {
        // let stat = <AppText.ParagraphTwo>{item.stat}</AppText.ParagraphTwo>

        let stat;
        if (item.statBackgroundColor) {
            if (item.statBackgroundColor === 'green') {
                stat = <TrendTags.bigGreen tagText={item.stat}>{item.stat}</TrendTags.bigGreen>
            } else if (item.statBackgroundColor === 'blue') {
                stat = <AppText.ParagraphTwo>{item.stat}</AppText.ParagraphTwo>
            } else if (item.statBackgroundColor === 'orange') {
                stat = <AppText.ParagraphTwo>{item.stat}</AppText.ParagraphTwo>
            } else {
                stat = <AppText.ParagraphTwo>{item.stat}</AppText.ParagraphTwo>
            }
        } else {
            stat = <AppText.ParagraphTwo>{item.stat}</AppText.ParagraphTwo>
        }

        return (
            <View style={styles.investmentStatsRow}>
                <View style={{display: "flex", flexDirection:'row', justifyContent: 'flex-start'}}>
                    <AppText.LabelBoldOne>{item.statName}</AppText.LabelBoldOne>
                    <AppButton.toolTip TouchableOpacityStyle={styles.toolTipDefault}/>
                </View>
                {stat}
            </View>
        );
    }

    return (
        <BorderedList
            data={data}
            data_primary_key={data_primary_key}
            renderItem={renderRow}
            FlatListStyle={[FlatListStyle]}
        />
    );
}

// BorderedList.PortfolioFit = ({data, data_primary_key, FlatListStyle}) => {
//     return (
//         <BorderedList.InvestmentInfo
//             data={data}
//             data_primary_key={data_primary_key}
//             renderItem={renderRow}
//             FlatListStyle={{ ...FlatListStyle}}
//         />
//     );
// }




const styles = StyleSheet.create({
      flatList: {
        borderWidth: 2,
        borderColor: Themes.colors.neutral_200,
        borderRadius: 16,
        width: '100%'
      },

      investmentStatsRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16
      },

      toolTipDefault: {
        marginLeft: 4
      }

});

