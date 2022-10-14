import React, {memo} from 'react';
import {View, Text, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../resource/colors';

const CoinsItem = ({item, onPress}) => {
  const GetIconArrow = () => {
    if (item.percent_change_1h > 0) {
      return <Icon name="trending-up" size={20} color="#42855B" />;
    } else {
      return <Icon name="trending-down" size={20} color="#FF4A4A" />;
    }
  };

  return (
    <Pressable onPress={onPress} marginX={4} paddingY="2">
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius={10}
        padding="4"
        backgroundColor={Colors.purple}>
        <View flexDirection="column">
          <Text color="white" fontWeight="bold" fontSize="16" marginRight="12">
            {item.symbol}
          </Text>
          <Text color="white" fontSize="14">
            {item.name}
          </Text>
        </View>

        <View flexDirection="column">
          <Text color="white" fontSize="14">{`$${item.price_usd}`}</Text>
        </View>

        <View flexDirection="row">
          <Text
            color="white"
            fontSize="12">{`${item.percent_change_1h}  1h  `}</Text>
          <GetIconArrow />
        </View>
      </View>
    </Pressable>
  );
};

export default memo(CoinsItem, (prev, next) => {
  return prev.item.id !== next.item.id;
});
