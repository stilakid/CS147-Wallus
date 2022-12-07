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
        <View style={styles.header}>
          <View> 
            <AppText.LabelSemiBoldTwo style={styles.userText} onPress={onPressUser}>{"Benji"}</AppText.LabelSemiBoldTwo> 
          </View>
          <View style={styles.time}>
            <AppText.ParagraphThree style={styles.dateText}>{"Oct 16 2022"}</AppText.ParagraphThree>
          </View>
        </View>
        <AppText.LabelSemiBoldOne style={styles.commentText}>"I wanted to invest in something safe."</AppText.LabelSemiBoldOne>
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
    marginVertical: 16,
    position: 'absolute',
    backgroundColor: Themes.colors.neutral_100,
    borderRadius: 16,
    width: 358,
    height: 80
  },
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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
    height: 21
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: '50%'
  },
  userText: {
    color: Themes.colors.neutral_600,
    width: 202,
    height: 18
  },
  dateText: {
    color: Themes.colors.neutral_600,
    width: 76,
    height: 21
  },
  commentText: {
    color: Themes.colors.neutral_800,
  }
});  