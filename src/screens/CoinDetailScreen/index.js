import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const CoinDetailScreen = props => {
  useEffect(() => {
    console.log(props.route.params);
  }, [props]);

  return (
    <View>
      <Text>Coins Details Screen</Text>
    </View>
  );
};

export default CoinDetailScreen;
