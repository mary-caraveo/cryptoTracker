import React from 'react';
import {View, Text, Image, Pressable} from 'native-base';
import Colors from '../../resource/colors';

const CoinsItem = ({item, onPress}) => {
  const getImgArrow = () => {
    if (item.percent_change_1h > 0) {
      return require('../../assets/arrow_up.png');
    } else {
      return require('../../assets/arrow_down.png');
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
            fontSize="12">{`${item.percent_change_1h}  1h`}</Text>
          <Image
            width={15}
            height={15}
            marginLeft={15}
            alt="Coins"
            source={getImgArrow()}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CoinsItem;
