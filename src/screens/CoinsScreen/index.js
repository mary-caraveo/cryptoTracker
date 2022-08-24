import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Http from '../../libs/http';
import CoinsItem from '../../components/CoinsItem';
import CoinsSearch from '../../components/CoinsSearch';
import Colors from '../../resource/colors';

const CoinsScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoanding] = useState(true);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const navigation = useNavigation();

  const handlePress = coin => {
    navigation.navigate('CoinDetail', {coin});
  };

  useEffect(() => {
    const getData = async () => {
      const res = await Http.instance.get(
        'https://api.coinlore.net/api/tickers/',
      );
      setCoins(res.data);
      setFilteredCoins(res.data);
      setLoanding(false);
    };
    getData();
  }, []);

  const handleSearch = query => {
    const filter = coins.filter(coin => {
      return (
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredCoins(filter);
  };

  return (
    <View style={styles.container}>
      <CoinsSearch onChange={handleSearch} />
      {loading ? (
        <ActivityIndicator color="green" size="large" style={styles.loader} />
      ) : null}
      <FlatList
        data={filteredCoins}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CoinsItem item={item} onPress={() => handlePress(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  titleText: {
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: '#80558C',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  loader: {
    marginTop: 60,
  },
});

export default CoinsScreen;
