import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Themes} from "../../../assets/themes";
import { AppText } from '../CustomText/customText';
import { TrendTags } from '../TrendTags/TrendTags';

/*
you can use this card like this:
<InvestmentDisplayCard 
  logoURL={'../../../assets/tesla.png'} 
  companyName={'Tesla'} 
  stockPrice={'$124.32'} 
  status={'stable'}>
/>
*/

export default function InvestmentDisplayCard({logoURL, companyName, stockPrice, status}) {
  let tagdisplayed;
  let companyLogo = {logoURL};
  if (status == 'growing'){
    tagdisplayed=<TrendTags.smallGreen tagText={'Growing'}/>
  } else if (status == 'stable'){
    tagdisplayed=<TrendTags.smallBlue tagText={'Stable'}/>
  } else {
    tagdisplayed=<TrendTags.smallOrange tagText={'Unstable'}/>
  }
  return (
    <View style={styles.card}>
        <Image
            source={companyLogo}
            style={styles.profilePic}
        />
        <View style={styles.company}>
            <AppText.LabelBoldOne style={styles.companyText}>{companyName}</AppText.LabelBoldOne> 
            <AppText.LabelSemiBoldTwo style={styles.dollarText}>{stockPrice}</AppText.LabelSemiBoldTwo> 
        </View>
        {tagdisplayed}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 16,
    gap: 12,
    width: 112,
    height: 157,
    left: 20,
    top: 20,
    backgroundColor: 'white',
    borderColor: Themes.colors.neutral_200,
    borderWidth: 2,
    borderRadius: 12,
    boxSizing: 'border-box',
    borderBottomWidth: 4,
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
  }
});  