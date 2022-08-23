import React, {useEffect} from 'react';
import {View, Text, Image, SectionList, StyleSheet} from 'react-native';
import colors from '../../resource/colors';

const CoinDetailScreen = ({route, navigation}) => {
  const {coin} = route.params;

  const getSymbolIcon = () =>
    `https://c1.coinlore.com/img/25x25/${coin.nameid}.png`;

  const getSections = coin => {
    const sections = [
      {
        title: 'Market cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [coin.volume24],
      },
      {
        title: 'Change 24h',
        data: [coin.percent_change_24h],
      },
    ];
    return sections;
  };

  useEffect(() => {
    navigation.setOptions({title: coin.symbol});
  }, [coin.symbol, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image
          style={styles.iconImage}
          source={{uri: getSymbolIcon(coin.nameid)}}
        />
        <Text style={styles.titleText}>{coin.name}</Text>
      </View>
      <SectionList
        sections={getSections(coin)}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 16,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  iconImage: {
    height: 25,
    width: 25,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 14,
  },
  sectionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default CoinDetailScreen;
