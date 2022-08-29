import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CoinsStack from './src/components/CoinsStack';
import FavoritesStack from './src/components/FavoritesStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseProvider} from 'native-base';
import Colors from './src/resource/colors';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
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
                  source={require('./src/assets/bank.png')}
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
                  source={require('./src/assets/star.png')}
                />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
