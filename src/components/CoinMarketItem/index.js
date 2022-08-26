import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import Http from '../../libs/http';
import Colors from '../../resource/colors';

const CoinMarketItem = ({coinId}) => {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const getMarkets = async id => {
      const res = await Http.instance.get(
        `https://api.coinlore.net/api/coin/markets/?id=${id}`,
      );
      setMarkets(res);
    };
    getMarkets(coinId);
  }, [coinId]);

  return (
    <FlatList
      style={styles.list}
      data={markets}
      horizontal={true}
      keyExtractor={(item, index) => item.name + item.time + index}
      renderItem={({item}) => (
        <View style={styles.container}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.priceText}>{item.price_usd}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderColor: Colors.zircon,
    borderWidth: 1,
    padding: 16,
    marginRight: 8,
    alignItems: 'center',
  },
  list: {
    maxHeight: 80,
    paddingLeft: 16,
  },
  nameText: {
    color: 'white',
    fontWeight: 'bold',
  },
  priceText: {
    color: 'white',
  },
});

export default CoinMarketItem;
