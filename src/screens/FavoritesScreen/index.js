import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'native-base';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import FavoritesEmptyState from '../../components/FavoritesEmptyState';
import CoinsItem from '../../components/CoinsItem';
import Colors from '../../resource/colors';
import Storage from '../../libs/storage';

const getFavorites = async () => {
  try {
    const allKeys = await Storage.getAllKeys();
    const keys = allKeys.filter(key => key.includes('favorite-'));
    const favs = await Storage.multiGet(keys);
    return favs.map(fav => JSON.parse(fav[1]));
  } catch (err) {
    console.log('Error get favorites', err);
    return [];
  }
};

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const focused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    if (focused) {
      getFavorites().then(res => setFavorites(res));
    }
    return () => {
      console.log('focused', focused);
    };
  }, [focused]);

  const handlePress = coin => {
    navigation.navigate('CoinDetail', {coin});
  };

  const renderItem = ({item}) => (
    <CoinsItem item={item} onPress={() => handlePress(item)} />
  );

  return (
    <View flex={1} backgroundColor={Colors.charade}>
      {favorites.length === 0 && <FavoritesEmptyState />}
      {favorites.length > 0 && (
        <FlatList data={favorites} renderItem={renderItem} />
      )}
    </View>
  );
};

export default FavoritesScreen;
