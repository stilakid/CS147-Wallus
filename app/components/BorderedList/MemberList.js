// import React from 'react';
import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, FlatList, Image } from "react-native";
import { Divider } from "../Divider/divider"
import { AppText } from "../CustomText/customText";
import { AppButton } from "../Buttons/buttons";
import { TrendTags } from "../TrendTags/TrendTags";

{/* <Home color="black" size={24} />; */}
export const MemberList = ({boughtAt, currentPrice, investingFor, typicalHold}) => {



    return(
        <View style={[styles.outerContainer]}>

            <View style={styles.container}>
                <View style={styles.row}>
                    <Image
                    style={styles.image}
                    // source={require({imageURL})}
                    source={Images.profilePic.three}
                    resizeMode='contain'

                    />
                    <View style={styles.textContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <AppText.LabelSemiBoldOne>Danielle</AppText.LabelSemiBoldOne>
                            <View style={{marginLeft:8}}>
                                <TrendTags.smallGreen tagText='Low risk'></TrendTags.smallGreen>
                            </View>
                        </View>
                        <AppText.LabelSemiBoldTwo style={{color:Themes.colors.neutral_500}}>Goal: save for retirement</AppText.LabelSemiBoldTwo>
                    </View>
                    <AppButton.PrimaryThinFive text="Add" ></AppButton.PrimaryThinFive>
                </View>

                <Divider.Horizontal />

                <View style={styles.row}>
                    <Image
                    style={styles.image}
                    // source={require({imageURL})}
                    source={Images.profilePic.two}
                    resizeMode='contain'

                    />
                    <View style={styles.textContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <AppText.LabelSemiBoldOne>Eason</AppText.LabelSemiBoldOne>
                            <View style={{marginLeft:8}}>
                                <TrendTags.smallBlue tagText='Medium risk'></TrendTags.smallBlue>
                            </View>
                        </View>
                        <AppText.LabelSemiBoldTwo style={{color:Themes.colors.neutral_500}}>Goal: save for retirement</AppText.LabelSemiBoldTwo>
                    </View>
                    <AppButton.SecondaryGreyThinFive text="Added" ></AppButton.SecondaryGreyThinFive>
                </View>

                <Divider.Horizontal />

                <View style={styles.row}>
                <Image
                    style={styles.image}
                    // source={require({imageURL})}
                    source={Images.profilePic.four}
                    resizeMode='contain'

                    />
                    <View style={styles.textContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <AppText.LabelSemiBoldOne>Krista</AppText.LabelSemiBoldOne>
                            <View style={{marginLeft:8}}>
                                <TrendTags.smallBlue tagText='Medium risk'></TrendTags.smallBlue>
                            </View>
                        </View>
                        <AppText.LabelSemiBoldTwo style={{color:Themes.colors.neutral_500}}>Goal: save for retirement</AppText.LabelSemiBoldTwo>
                    </View>
                    <AppButton.SecondaryGreyThinFive text="Pending" ></AppButton.SecondaryGreyThinFive>
                </View>

                <Divider.Horizontal />

                <View style={styles.row}>
                    <Image
                    style={styles.image}
                    // source={require({imageURL})}
                    source={Images.profilePic.five}
                    resizeMode='contain'

                    />
                    <View style={styles.textContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <AppText.LabelSemiBoldOne>Leo</AppText.LabelSemiBoldOne>
                            <View style={{marginLeft:8}}>
                                <TrendTags.smallGreen tagText='Low risk'></TrendTags.smallGreen>
                            </View>
                        </View>
                        <AppText.LabelSemiBoldTwo style={{color:Themes.colors.neutral_500}}>Goal: save for retirement</AppText.LabelSemiBoldTwo>
                    </View>
                    <AppButton.PrimaryThinFive text="Add" ></AppButton.PrimaryThinFive>
                </View>

                <Divider.Horizontal />
                
                <View style={styles.row}>
                    <Image
                    style={styles.image}
                    // source={require({imageURL})}
                    source={Images.profilePic.one}
                    resizeMode='contain'

                    />
                    <View style={styles.textContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <AppText.LabelSemiBoldOne>Manny</AppText.LabelSemiBoldOne>
                            <View style={{marginLeft:8}}>
                                <TrendTags.smallGreen tagText='Low risk'></TrendTags.smallGreen>
                            </View>
                        </View>
                        <AppText.LabelSemiBoldTwo style={{color:Themes.colors.neutral_500}}>Goal: save for retirement</AppText.LabelSemiBoldTwo>
                    </View>
                    <AppButton.SecondaryGreyThinFive text="Added" ></AppButton.SecondaryGreyThinFive>
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
        alignItems: 'center',
        height: 78
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
    },

    image:{
        height: 32,
        width: 32,
    },
    messageStyle:{
    },
    investmentStyle:{
        color: Themes.colors.neutral_500,
        marginTop: 8
    },
    textContainer: {
        marginLeft:12,
        marginRight:16,
        flex: 1
    }

});
