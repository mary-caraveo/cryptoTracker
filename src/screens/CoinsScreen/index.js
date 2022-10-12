import React, {useState, useEffect} from 'react';
import {View, FlatList, Spinner} from 'native-base';
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

  const handlePress = coin => {
    navigation.navigate('Coin Detail', {coin});
  };

  const renderItem = ({item}) => (
    <CoinsItem key={item.id} item={item} onPress={() => handlePress(item)} />
  );

  return (
    <View flex={1} backgroundColor={Colors.charade}>
      <CoinsSearch onChange={handleSearch} />
      {loading ? (
        <Spinner color="emerald.500" size="lg" marginTop="60" />
      ) : null}
      <FlatList
        data={filteredCoins}
        initialNumToRender={1}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CoinsScreen;
