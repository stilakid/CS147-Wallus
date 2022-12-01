import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Themes} from "../../../assets/themes";
import { AppText } from '../CustomText/customText';
import { TrendTags } from '../TrendTags/TrendTags';

export default function InvestmentDisplayCard() {

  return (
    <View style={styles.card}>
        <Image
            source={require('../../../assets/tesla.png')}
            style={styles.profilePic}
        />
        <View style={styles.company}>
            <AppText.LabelBoldOne style={styles.companyText}>{"Company"}</AppText.LabelBoldOne> 
            <AppText.LabelSemiBoldTwo style={styles.dollarText}>{"USD 28.32"}</AppText.LabelSemiBoldTwo> 
        </View>
        <TrendTags.smallGreen tagText={"Growing"}/>
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
    position: 'absolute',
    width: 112,
    height: 157,
    left: 20,
    top: 20,
    backgroundColor: 'white',
    borderColor: Themes.colors.neutral_200,
    borderWidth: 2,
    borderRadius: 8,
    boxSizing: 'border-box',
    borderBottomWidth: 4
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