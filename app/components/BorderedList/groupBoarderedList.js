// import React from 'react';
import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import { Divider } from "../Divider/divider"
import { AppText } from "../CustomText/customText";
import { AppButton } from "../Buttons/buttons";
import { TrendTags } from "../TrendTags/TrendTags";

{/* <Home color="black" size={24} />; */}
export const GroupStats = ({boughtAt, currentPrice, investingFor, typicalHold}) => {



    return(
        <View style={[styles.outerContainer]}>




            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={[styles.column, styles.column1]}>
                        <AppText.LabelBoldOne>You bought at</AppText.LabelBoldOne>
                        <AppButton.toolTip TouchableOpacityStyle={styles.toolTipDefault}/>
                    </View>
                    <View style={[styles.column, styles.column2]}>
                        <AppText.ParagraphTwo>{boughtAt}</AppText.ParagraphTwo>
                    </View>
                </View>

                <Divider.Horizontal />

                <View style={styles.row}>
                    <View style={[styles.column, styles.column1]}>
                        <AppText.LabelBoldOne>Current price</AppText.LabelBoldOne>
                        <AppButton.toolTip TouchableOpacityStyle={styles.toolTipDefault}/>
                    </View>
                    <View style={[styles.column, styles.column2]}>
                        <AppText.ParagraphTwo>{currentPrice}</AppText.ParagraphTwo>
                    </View>
                </View>

                <Divider.Horizontal />

                <View style={styles.row}>
                    <View style={[styles.column, styles.column1]}>
                        <AppText.LabelBoldOne>You have been investing for</AppText.LabelBoldOne>
                        <AppButton.toolTip TouchableOpacityStyle={styles.toolTipDefault}/>
                    </View>
                    <View style={[styles.column, styles.column2]}>
                        <AppText.ParagraphTwo>{investingFor}</AppText.ParagraphTwo>
                    </View>
                </View>

                <Divider.Horizontal />

                <View style={styles.row}>
                    <View style={[styles.column, styles.column1]}>
                        <AppText.LabelBoldOne>Typical hold</AppText.LabelBoldOne>
                        <AppButton.toolTip TouchableOpacityStyle={styles.toolTipDefault}/>
                    </View>
                    <View style={[styles.column, styles.column2]}>
                        <AppText.ParagraphTwo>{typicalHold}</AppText.ParagraphTwo>
                    </View>
                </View>
            </View>

        </View>
        
    );
}


// Expects data to have the following keys:
//  data = { { statName:'stat', tooltip: 'text', statBackgroundColor: 'green' },
//           { statName:'stat', tooltip: 'text', stat: 'value' },
//            ...
//          }

const styles = StyleSheet.create({

    outerContainer: {
        width: '100%',
    },

    container: {
        borderWidth: 2,
        borderColor: Themes.colors.neutral_200,
        borderRadius: 16,
        marginHorizontal: 16,
    },

    profileFitContainer: {
        marginVertical: 12
    },

    title: {
        paddingHorizontal: 16
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    column: {
        marginVertical: 16
    }, 
    column1: {
        display: 'flex',
        flexDirection: 'row'
    },
    column2: {
    },
    columnAlt: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        marginVertical: 16
    },
    columnAlt1: {
        display: 'flex',
        flex: 1,
        alignItems: 'flex-start'
    },
    columnAlt2: {
        display: 'flex',
        flex: 1
    },
    columnAlt3: {
        display: 'flex',
        flex: 1
    },

    columnValue: {
        marginTop: 4
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
    },

    investmentStat: {
    marginHorizontal: 16
    }

});
