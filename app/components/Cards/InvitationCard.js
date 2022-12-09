import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Themes} from "../../../assets/themes";
import { AppText } from '../CustomText/customText';
import { TrendTags } from '../TrendTags/TrendTags';

export default function InvitationCard({GroupName, Price, stock, status, memberPicURL, onPress}) {

  //determine which trend tag to display based on route.params
  let trendTagdisplayed;
  if (status == 'stable'){
      trendTagdisplayed= <TrendTags.smallBlue tagText={'Stable'}/>
  } else if (status == 'growing') {
      trendTagdisplayed = <TrendTags.smallGreen tagText={'Growing'}/>
  } else {
      trendTagdisplayed = <TrendTags.smallOrange tagText={'Unstable'}/>
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.title}>
        <View style={styles.details}>
          <View >
            <Text style={styles.groupName}> {GroupName} </Text>
          </View>
          <View style={styles.status}>
            {trendTagdisplayed}
            <Text style={styles.stock}> {stock} </Text>
          </View>
          <Image
            source={memberPicURL}
            style={styles.profilePic}
          />
        </View>
        <View>
          <TrendTags.smallGrey tagText={Price}/>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 16,
    width: '100%',
    height: 135,
    backgroundColor: 'white',
    borderColor: Themes.colors.neutral_200,
    borderWidth: 2,
    borderRadius: 20,
    boxSizing: 'border-box'
  },
  title: {
    flexDirection: 'row',
    padding: 0,
  },
  details: {
    flex: 1
  },
  groupName: {
    fontFamily: Themes.typography.label_bold_1.font,
    color: Themes.colors.neutral_800
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },
  stock: {
    fontFamily: Themes.typography.label_semibold_2.font,
    color: Themes.colors.neutral_500,
    marginLeft: 6,
  }, 
  profilePic: {
    marginTop: 16,
    width: 128,
    height: 32,
  }
});  