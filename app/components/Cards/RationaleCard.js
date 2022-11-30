import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Themes} from "../../../assets/themes";
import { AppText } from '../CustomText/customText';

export default function RationaleCard() {
  function onPressUser() {
    console.log("clicked user name in rationale card")
  }

  return (
    <View style={styles.card}>
      <Image
            source={require('../../../assets/profilePic.png')}
            style={styles.profilePic}
      />
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <View> 
            <Text style={styles.userText} onPress={onPressUser}>{"Benji"}</Text> 
          </View>
          <View style={styles.time}>
            <Text style={styles.dateText}>{"Oct 16 2022"}</Text>
          </View>
        </View> */}
        <Text style={styles.commentText}>"I wanted to invest in something safe."</Text>
        <AppText.LabelSemiBoldTwo>"I wanted to invest in something safe."</AppText.LabelSemiBoldTwo>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
    position: 'absolute',
    backgroundColor: Themes.colors.neutral_100,
    borderRadius: 16,
    width: 358,
    height: 79,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    width: 282,
    height: 47,
    flexGrow: 1,
    paddingLeft: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
    width: '95%',
    height: 21
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: '50%'
  },
  userText: {
    color: Themes.colors.neutral_600,
    fontFamily: Themes.typography.label_semibold_2.font
  },
  dateText: {
    color: Themes.colors.neutral_600,
    fontFamily: Themes.typography.paragraph_text_3.font
  },
  commentText: {
    color: Themes.colors.neutral_800,
    fontFamily: Themes.typography.label_semibold_1.font,
  }
});  