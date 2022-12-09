// import React from 'react';
import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import { Divider } from "../Divider/divider"
import { AppText } from "../CustomText/customText";
import { AppButton } from "../Buttons/buttons";
import { TrendTags } from "../TrendTags/TrendTags";
import { MyTooltip } from "../ToolTip/tooltip";

{/* <Home color="black" size={24} />; */}
export const InvestmentStat = ({stock, portfolioFit, expectedReturn, volatility, typicalHold, market, sp500, containerStyle}) => {

    //TODO: This is a hack
    let marketTag = <TrendTags.bigGreen tagText={market} />
    let sp500Tag = <TrendTags.bigGreen tagText={sp500} />
    // End of hack

    let performanceTitle;
    let performance;
    if (market || sp500) {
        performanceTitle = <AppText.TitleSemiBoldFour style={styles.title} >Performance</AppText.TitleSemiBoldFour>

        performance = (
            <View style={[styles.container, styles.profileFitContainer, {marginBottom:24}]}>
                <View style={styles.row}>
                    <View style={[styles.columnAlt, styles.columnAlt1]}>
                        <AppText.LabelBoldOne style={{marginBottom:4}}>Past Year's trend</AppText.LabelBoldOne>
                        <MyTooltip text={"The change of price of this company's stock versus the overall gain or loss of the entire market"}/>
                    </View>
                    <Divider.Vertical />
                    <View style={styles.columnAlt}>
                        <AppText.LabelBoldOne style={{marginBottom:4}}>Market</AppText.LabelBoldOne>
                        <AppText.ParagraphTwo style={styles.columnValue} >{marketTag}</AppText.ParagraphTwo>
                    </View>
                    <Divider.Vertical />
                    <View style={styles.columnAlt}>
                        <AppText.LabelBoldOne style={{marginBottom:4}}>{stock}</AppText.LabelBoldOne>
                        <AppText.ParagraphTwo style={styles.columnValue} >{sp500Tag}</AppText.ParagraphTwo>
                    </View>

                </View>
            </View>
        )
    }


    let fitIndicator;
    if (portfolioFit === 'Great') {
        fitIndicator = <TrendTags.bigGreen tagText={portfolioFit} />
    } else if (portfolioFit === 'blue') {
        fitIndicator = <TrendTags.bigBlue tagText={portfolioFit} />
    } else if (portfolioFit === 'orange') {
        fitIndicator = <TrendTags.bigOrange tagText={portfolioFit} />
    } else {
        fitIndicator = <TrendTags.bigGrey tagText={portfolioFit} />
    }


    return(
        <View style={[styles.outerContainer, containerStyle]}>

            {performanceTitle}
            {performance}

            {/*portfolio fit not needed anymore*/}
            {/* <View style={[styles.container, styles.profileFitContainer]}>
                <View style={styles.row}>
                    <View style={[styles.column, styles.column1]}>
                        <AppText.LabelBoldOne>Profile fit</AppText.LabelBoldOne>
                        <MyTooltip text='Profit fit means...'></MyTooltip>
                    </View>
                    <View style={[styles.column, styles.column2]}>
                        {fitIndicator}
                    </View>

                </View>
            </View> */}

            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={[styles.column, styles.column1]}>
                        <AppText.LabelBoldOne>Historical return</AppText.LabelBoldOne>
                        <MyTooltip style={styles.tooltip} text={"Based off of history, the percentage increase you would expect for an investment in this stock"}/>
                    </View>
                    <View style={[styles.column, styles.column2]}>
                        <AppText.ParagraphTwo>{expectedReturn}</AppText.ParagraphTwo>
                    </View>
                </View>

                <Divider.Horizontal />

                <View style={styles.row}>
                    <View style={[styles.column, styles.column1]}>
                        <AppText.LabelBoldOne>Volatility</AppText.LabelBoldOne>
                        <MyTooltip style={styles.tooltip} text={"The amount of variation in the day-to-day value of this investment from Low-High"}/>
                    </View>
                    <View style={[styles.column, styles.column2]}>
                        <AppText.ParagraphTwo>{volatility}</AppText.ParagraphTwo>
                    </View>
                </View>

                <Divider.Horizontal />

                <View style={styles.row}>
                    <View style={[styles.column, styles.column1]}>
                        <AppText.LabelBoldOne>Typical Hold</AppText.LabelBoldOne>
                        <MyTooltip style={styles.tooltip} text={"How long most investors keep this stock before selling"}/>
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
        // marginHorizontal: 16,
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

    tooltip: {
    marginTop: 0,
    },

    investmentStat: {
    marginHorizontal: 16
    }

});

