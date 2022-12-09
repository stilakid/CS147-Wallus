import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Themes} from "../../../assets/themes";
import { AppText } from '../CustomText/customText';

export default function RationaleCard({style, name, profileURL, date, rationale}) {
  function onPressUser() {
    console.log("clicked user name in rationale card")
  }

  return (
    <View style={[styles.card, style]}>
      <Image
            source={profileURL}
            style={styles.profilePic}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <View> 
            <AppText.LabelSemiBoldTwo style={styles.userText} onPress={onPressUser}>{name}</AppText.LabelSemiBoldTwo> 
          </View>
          <View style={styles.time}>
            <AppText.ParagraphThree style={styles.dateText}>{date}</AppText.ParagraphThree>
          </View>
        </View>
        <AppText.LabelSemiBoldOne style={styles.commentText}>{rationale}</AppText.LabelSemiBoldOne>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    // alignItems: 'center',
    padding: 16,
    backgroundColor: Themes.colors.neutral_100,
    borderRadius: 16,
    width: '100%',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 10,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: '50%'
  },
  userText: {
    color: Themes.colors.neutral_600,
  },
  dateText: {
    color: Themes.colors.neutral_600,
  },
  commentText: {
    color: Themes.colors.neutral_800,
  }
});  