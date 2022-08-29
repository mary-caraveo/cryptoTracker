import React from 'react';
import {Image} from 'react-native';
import CoinsStack from '../components/CoinsStack';
import FavoritesStack from '../components/FavoritesStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../resource/colors';

const Tabs = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.purple,
        tabBarInactiveTintColor: Colors.zircon,
        tabBarStyle: {
          backgroundColor: Colors.blackPearl,
        },
      }}>
      <Tabs.Screen
        name="Coins Stack"
        component={CoinsStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              style={{tintColor: color, width: size, height: size}}
              source={require('../assets/bank.png')}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites Stack"
        component={FavoritesStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              style={{tintColor: color, width: size, height: size}}
              source={require('../assets/star.png')}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default Navigation;
