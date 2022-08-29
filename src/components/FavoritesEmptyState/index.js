import React from 'react';
import {View, Text} from 'native-base';

const FavoritesEmptyState = () => {
  return (
    <View flex={1} alignContent="center" justifyContent="center">
      <Text color="white" fontWeight="bold" fontSize="18" alignSelf="center">
        You don't have any favorite yet ❤️
      </Text>
    </View>
  );
};

export default FavoritesEmptyState;
