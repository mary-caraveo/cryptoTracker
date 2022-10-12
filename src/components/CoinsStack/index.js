import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from '../../screens/CoinsScreen';
import CoinDetailScreen from '../../screens/CoinDetailScreen';
import Colors from '../../resource/colors';

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowColor: Colors.blackPearl,
        },
        headerTitleAlign: 'center',
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen name="Coins 🪙" component={CoinsScreen} />
      <Stack.Screen
        name="Coin Detail"
        options={{
          headerBackTitleVisible: false,
        }}
        component={CoinDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default CoinsStack;
