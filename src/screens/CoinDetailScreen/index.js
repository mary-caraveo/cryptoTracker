import React, {useState, useEffect} from 'react';
import {
  Image,
  SectionList,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import CoinMarketItem from '../../components/CoinMarketItem';
import Storage from '../../libs/storage';
import colors from '../../resource/colors';

const CoinDetailScreen = ({route, navigation}) => {
  const {coin} = route.params;
  const [favorite, setFavorite] = useState(false);

  const getSymbolIcon = () =>
    `https://c1.coinlore.com/img/25x25/${coin.nameid}.png`;

  const getSections = () => {
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

  const toogleFavorite = () => {
    if (favorite) {
    } else {
      addFavorite();
    }
  };

  const addFavorite = async () => {
    const value = JSON.stringify(coin);
    const key = `favorite-${coin.id}`;
    const stored = await Storage.store(key, value);
    if (stored) {
      setFavorite({favorite: true});
    }
  };

  useEffect(() => {
    navigation.setOptions({title: coin.symbol});
  }, [coin.symbol, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.row}>
          <Image
            style={styles.iconImage}
            source={{uri: getSymbolIcon(coin.nameid)}}
          />
          <Text style={styles.titleText}>{coin.name}</Text>
        </View>

        <Pressable
          onPress={toogleFavorite}
          style={[
            styles.btnFavorite,
            favorite ? styles.btnFavoriteRemove : styles.btnFavoriteAdd,
          ]}>
          <Text style={styles.btnFavoriteText}>
            {favorite ? 'Remove favorite' : 'Add favorite'}
          </Text>
        </Pressable>
      </View>
      <SectionList
        style={styles.section}
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
      <Text style={styles.marketTitle}>Markets</Text>
      <CoinMarketItem coinId={coin.id} />
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
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  iconImage: {
    height: 25,
    width: 25,
  },
  section: {
    maxHeight: 220,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: colors.white,
    fontSize: 14,
  },
  sectionText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  marketTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft: 16,
  },
  btnFavoriteText: {
    color: colors.white,
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8,
  },
  btnFavoriteAdd: {
    backgroundColor: colors.purple,
  },
  btnFavoriteRemove: {
    backgroundColor: colors.carmine,
  },
  row: {
    flexDirection: 'row',
  },
});

export default CoinDetailScreen;
