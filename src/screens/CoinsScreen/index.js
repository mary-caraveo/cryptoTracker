import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Http from '../../libs/http';

const CoinsScreen = () => {
  const navigation = useNavigation();

  const componentDidMount = async () => {
    const coins = await Http.instance.get(
      ' https://api.coinlore.net/api/tickers/ ',

      console.log('coins', coins),
    );
  };

  const handlePress = () => {
    navigation.navigate('CoinDetail');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Coins Screen</Text>
      <Pressable style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>Ir a details</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
});

export default CoinsScreen;
