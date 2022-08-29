import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
