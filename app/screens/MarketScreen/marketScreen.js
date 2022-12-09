import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, FlatList, ScrollView } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";
import InvestmentDisplayCard from "../../components/Cards/InvestmentDisplayCard";
import { MyTooltip } from "../../components/ToolTip/tooltip";

// Data
import dailyMovers from "../../../assets/stockData/dailyMovers";
import recInvestment from "../../../assets/stockData/recInvestment";
import { ObjectFlags } from "typescript";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";
import Header from "../../components/Header/header";

{/* <InvestmentDisplayCard 
  cardType={'horizontalRecRationale'} 
  companyName={'SPK 500'} 
  logoURL={'../../../assets/tesla.png'} 
  status={'growing'} 
  stockPrice={'USD24.32'}
  recRationale={'Invested by Dan'}
/> */}



export default function MarketScreen({navigation, route}) {
    //Datasets
    const placeholder =[
        {
            random: 'placeholder',
        }
    ];

    //List item render functions
    const renderPlaceholder = () => (
        <>
            <Header text={"Market"} isTabPageHeader hasBackButton={false} />

            <View style={{flexDirection:'row',justifyContent:'row'}}>
                <AppText.TitleSemiBoldTwo style={[styles.heading, {marginBottom:16, width: 'auto'}]}>Daily movers</AppText.TitleSemiBoldTwo>
                <View style={{marginTop: 2, marginLeft: 8}}>
                    <MyTooltip text={"Stocks today that have seen high number of purchases today"}/>
                </View>
            </View>
            <View style={[{flexDirection: 'row', marginBottom: 56}]}> 
                <InvestmentDisplayCard 
                    cardType={'vertical'}
                    companyName={dailyMovers['tesla'].companyName} 
                    logoURL={dailyMovers['tesla'].logoURL} 
                    status={dailyMovers['tesla'].status} 
                    stockPrice={dailyMovers['tesla'].stockPrice}
                    onPress={() => {
                        navigation.navigate('Stock', {
                            stock: 'tesla',
                            dataSource: 'dailyMovers',
                        });
                    }}
                />
                <InvestmentDisplayCard 
                    cardType={'vertical'}
                    companyName={dailyMovers['amazon'].companyName} 
                    logoURL={dailyMovers['amazon'].logoURL} 
                    status={dailyMovers['amazon'].status} 
                    stockPrice={dailyMovers['amazon'].stockPrice}
                    style={{marginHorizontal: 12}}
                    onPress={() => {
                        navigation.navigate('Stock', {
                            stock: 'amazon',
                            dataSource: 'dailyMovers',
                        });
                    }}
                />
                <InvestmentDisplayCard 
                    cardType={'vertical'}
                    companyName={dailyMovers['paypal'].companyName} 
                    logoURL={dailyMovers['paypal'].logoURL} 
                    status={dailyMovers['paypal'].status} 
                    stockPrice={dailyMovers['paypal'].stockPrice}
                    onPress={() => {
                        navigation.navigate('Stock', {
                            stock: 'paypal',
                            dataSource: 'dailyMovers',
                        });
                    }}
                />
            </View>
            
            <AppText.TitleSemiBoldTwo style={[styles.heading, {marginBottom: 8}]}>Recommended for you</AppText.TitleSemiBoldTwo>
            <AppText.ParagraphTwo style={[styles.paragraph, {marginBottom: 16}]}>Based on your risk and ethical preferences and your friend’s investments. </AppText.ParagraphTwo>
            
            <FlatList
                data={Object.keys(recInvestment)}
                renderItem={(item) => renderRecListItem(item)}
                keyExtractor={(item) => item}
                scrollEnabled='false'
                style={{flexGrow: 1}}
            /> 
        </>
    )
    const renderRecListItem =({item, index})=> {
        const stock = recInvestment[item];
        console.log(stock.status);
        return (
            <InvestmentDisplayCard 
                cardType={'horizontalRecRationale'} 
                companyName={stock.companyName} 
                logoURL={stock.logoURL}
                status= {stock.status}
                stockPrice= {stock.stockPrice}
                recRationale = {stock.recRationale}
                onPress={() => {
                    navigation.navigate('Stock', {
                        stock: item,
                        dataSource: 'recInvestment',
                    });
                }}
            />
        );
    }

    //screen return
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
        alignItems: "center",
        justifyContent: 'center',
        flex: 1,
    },
    heading: {
        color: Themes.colors.neutral_800,
        width: 358,
    },
    paragraph: {
        color: Themes.colors.neutral_600,
        width: 358,
    }
});