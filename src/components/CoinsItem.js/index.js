import React from 'react';
import {View, Text, Image, Platform, StyleSheet} from 'react-native';
import Colors from '../../resource/colors';

const CoinsItem = ({item}) => {
  const getImgArrow = () => {
    if (item.percent_change_1h > 0) {
      return require('../../assets/arrow_up.png');
    } else {
      return require('../../assets/arrow_down.png');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
      </View>

      <View style={styles.column}>
        <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>

      <View style={styles.row}>
        <Text
          style={styles.percentText}>{`${item.percent_change_1h}  1h`}</Text>
        <Image style={styles.imgIcon} source={getImgArrow()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    paddingLeft: Platform.OS === 'ios' ? 0 : 16,
    marginLeft: Platform.OS === 'ios' ? 16 : 0,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  nameText: {
    color: 'white',
    fontSize: 14,
  },
  priceText: {
    color: 'white',
    fontSize: 14,
  },
  percentText: {
    color: 'white',
    fontSize: 12,
  },
  imgIcon: {
    width: 15,
    height: 15,
    marginLeft: 15,
  },
});

export default CoinsItem;
