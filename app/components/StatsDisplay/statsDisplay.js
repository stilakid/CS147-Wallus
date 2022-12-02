import { Text, View, StyleSheet, Image } from 'react-native';
import { Themes} from "../../../assets/themes";
import { AppText } from '../CustomText/customText';
import { TrendTags } from '../TrendTags/TrendTags';
import { AppButton } from "../Buttons/buttons";

export default function StatsDisplay() {
  
    return (
      <View style={styles.card}>
          <View style={styles.section}>
              <Text style={AppText.LabelBoldOne, styles.text1}>Past Year's trend</Text>
              <View style={{marginLeft:8}}>
                    <AppButton.toolTip text={"this is the tooltip text for what this tag means"}/>
              </View>
          </View>
          <View style={styles.divider}/>
          <View style={styles.section, {alignItems:'center', marginHorizontal: 28}}>
            <Text style={AppText.LabelBoldOne, styles.text1}>Market</Text>
            <TrendTags.smallGreen tagText='12.38%'></TrendTags.smallGreen>
          </View>
          <View style={styles.divider}/>
          <View style={styles.section, {alignItems:'center', marginHorizontal: 28}}>
            <Text style={AppText.LabelBoldOne, styles.text1}>{"S&P 500"}</Text>
            <TrendTags.smallGreen tagText='12.88%'></TrendTags.smallGreen>
          </View>
          

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    card: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      width: 350,
      height: 86,
      backgroundColor: 'white',
      borderColor: Themes.colors.neutral_200,
      borderWidth: 2,
      borderRadius: 16,
    },
    section: {
        width: 116.67,
        height:86,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'flex-start',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    text1: {
        lineHeight: 19,

    },
    divider: {
        width: 2,
        height:86,
        // transform: [{rotate: '270deg'}],
        backgroundColor: Themes.colors.neutral_200,

    }

  });  