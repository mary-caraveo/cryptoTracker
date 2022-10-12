import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FavoritesScreen from '../../screens/FavoritesScreen';
import Colors from '../../resource/colors';

const Stack = createStackNavigator();

const FavoritesStack = () => {
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
      <Stack.Screen name="Favorites ♥️" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
