import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Themes} from "../../../assets/themes";
import { AppText } from '../CustomText/customText';
import { TrendTags } from '../TrendTags/TrendTags';

/*
you can use this card like this:
<InvestmentDisplayCard 
  cardType={'horizontalRecRationale'} 
  companyName={'SPK 500'} 
  logoURL={'../../../assets/tesla.png'} 
  status={'growing'} 
  stockPrice={'USD24.32'}
  recRationale={'Invested by Dan'}
/>

horizontalRecRationale: used in market page where the user gets a recommended list of investments
horizontal: used in any list situations
vertical: used in market page's daily mover's section 
*/

/*TODO: WHY IS THE PICTURE NOT SHOWING UP AGAIN :( */

export default function InvestmentDisplayCard({onPress, TouchableOpacityStyle, logoURL, companyName, stockPrice, status, cardType, recRationale, style}) {
  let tagDisplayed;
  let cardDisplayed;
  let logo = {logoURL};

  //display tag according to company status
  if (status == 'growing'){
    tagDisplayed=<TrendTags.smallGreen tagText={'Growing'}/>
  } else if (status == 'stable'){
    tagDisplayed=<TrendTags.smallBlue tagText={'Stable'}/>
  } else {
    tagDisplayed=<TrendTags.smallOrange tagText={'Unstable'}/>
  }

  const Vertical =()=>(
    <TouchableOpacity onPress={onPress} style={[TouchableOpacityStyle, styles.verticalCard, style]}>
      <Image
            source={logoURL}
            style={styles.profilePic}
      />
      <AppText.LabelBoldOne style={styles.companyText}>{companyName}</AppText.LabelBoldOne> 
      <AppText.LabelSemiBoldTwo style={styles.dollarText}>{stockPrice}</AppText.LabelSemiBoldTwo>
      {tagDisplayed}
    </TouchableOpacity>
  );
  const Horizontal =()=>(
    <TouchableOpacity onPress={onPress} style={[TouchableOpacityStyle, styles.horizontalCard, style]}>
      <View style={styles.leftContainer}>
        <Image
              source={logoURL}
              style={[styles.profilePic, {marginRight: 12}]}
        />
        <View>
          <AppText.LabelBoldOne style={[styles.companyText, {marginBottom: 4, marginTop: 0}]}>{companyName}</AppText.LabelBoldOne> 
          {tagDisplayed}
        </View>
      </View>
      <View>
        <TrendTags.bigGrey tagText={stockPrice}></TrendTags.bigGrey>
      </View>
    </TouchableOpacity>
  );
  const HorizontalRecRationale =()=>(
    <TouchableOpacity onPress={onPress} style={[styles.horizontalCard, style, TouchableOpacityStyle]}>
      <View style={styles.leftContainer}>
        <Image
              source={logoURL}
              style={[styles.profilePic, {marginRight: 12}]}
        />
        <View>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
            <AppText.LabelBoldOne style={[styles.companyText, {marginTop:0, marginRight:8}]}>{companyName}</AppText.LabelBoldOne> 
            {tagDisplayed}
          </View>
          <AppText.ParagraphTwo style={styles.recRationale}>{recRationale}</AppText.ParagraphTwo>
        </View>
      </View>
      <View>
        <TrendTags.bigGrey tagText={stockPrice}></TrendTags.bigGrey>
      </View>
    </TouchableOpacity>
  );

  //choose which type of card to display
  if (cardType == 'vertical') {
    cardDisplayed = <Vertical/>
  } else if (cardType == 'horizontal') {
    cardDisplayed = <Horizontal/>
  } else {
    cardDisplayed = <HorizontalRecRationale/>
  };

  return (
    <View>
      {cardDisplayed}
    </View>

  );
}


const styles = StyleSheet.create({
  verticalCard: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 16,
    width: 112,
    height: 157,
    paddingTop: 20,
    paddingTop: 20,
    backgroundColor: 'white',
    borderColor: Themes.colors.neutral_200,
    borderWidth: 2,
    borderRadius: 12,
    borderBottomWidth: 4,
  },
  horizontalCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    // justifyContent: 'space-between',
  },
  companyText: {
    color: Themes.colors.neutral_800,
    marginTop: 10
  },
  dollarText: {
    color: Themes.colors.neutral_500,
    marginTop: 2,
    marginBottom: 10
  },
  profilePic: {
    width: 32,
    height: 32
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  recRationale: {
    color: Themes.colors.neutral_500,
    marginTop: 4,
  }
});  