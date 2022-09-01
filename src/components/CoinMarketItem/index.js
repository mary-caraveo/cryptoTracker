import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'native-base';
import Http from '../../libs/http';
import Colors from '../../resource/colors';

const MarketItem = ({item}) => {
  return (
    <View
      backgroundColor="rgba(0,0,0,0.1)"
      borderColor={Colors.purple}
      borderRadius="20"
      borderWidth="2"
      paddingX="10"
      paddingY="12"
      marginRight="8"
      alignItems="center">
      <Text color="white" fontWeight="bold" fontSize="18">
        {item.name}
      </Text>
      <Text color="white">{item.price_usd}</Text>
    </View>
  );
};

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
      maxH={40}
      paddingLeft="4"
      data={markets}
      horizontal={true}
      keyExtractor={(item, index) => item.name + item.time + index}
      renderItem={({item}) => <MarketItem item={item} />}
    />
  );
};

export default CoinMarketItem;
