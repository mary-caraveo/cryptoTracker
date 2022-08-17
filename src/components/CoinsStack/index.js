import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from '../../screens/CoinsScreen';
import CoinDetailScreen from '../../screens/CoinDetailScreen';

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
