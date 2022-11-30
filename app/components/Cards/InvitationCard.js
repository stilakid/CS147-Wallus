import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Themes} from "../../../assets/themes"
import {TrendTags} from '../TrendTags';

export default function RationaleCard() {

  const onPressName = () => {
    console.log("hello from arrow function")
  }

  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <View style={styles.details}>
          <View >
            <Text style={styles.groupName} onPress={onPressName}> {"Group Name"} </Text>
          </View>
          <View style={styles.status}>
            <View>
            <TrendTags.smallGreen tagText={"Growing"}/>
            </View>
            <View>
              <Text style={styles.stock}> {"S&P 500"} </Text>
            </View>
          </View>
        </View>
        <View>
          <TrendTags.smallGrey tagText={"Price: $28.32"}/>
        </View>
      </View>
      <Image
            source={require('../../../assets/groupProfiles.png')}
            style={styles.profilePic}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 16,
    gap: 16,
    position: 'absolute',
    width: 358,
    height: 135,
    left: 20,
    top: 20,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 16,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    gap: 40,
    width: '95%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 8,
    width: 128,
    height: 55   
  },
  groupName: {
    fontFamily: Themes.typography.label_bold_1,
    color: Themes.colors.neutral_800
  },
  status: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: 8,
    width: 128,
    height: 28,
  },
  stock: {
    fontFamily: Themes.typography.label_semibold_2,
    color: Themes.colors.neutral_500
  }
});  