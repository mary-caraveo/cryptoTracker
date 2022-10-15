import React, {useState} from 'react';
import {View, Input} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const CoinsSearch = ({onChange}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = query => {
    setInputValue(query);
    onChange(query);
  };

  return (
    <View paddingX={4} paddingBottom={2} borderBottomColor={'gray.500'}>
      <Input
        backgroundColor={'rgba(0, 0, 0, 0.2)'}
        borderColor="muted.500"
        variant="filled"
        borderRadius={10}
        color="white"
        size="xl"
        onChangeText={handleChange}
        value={inputValue}
        placeholder="Search coin"
        InputRightElement={
          <Icon
            name="md-search"
            size={20}
            color="gray"
            style={{
              marginRight: 8,
            }}
          />
        }
      />
    </View>
  );
};

export default CoinsSearch;
