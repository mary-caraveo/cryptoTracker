import React, {useState} from 'react';
import {View, Input} from 'native-base';

const CoinsSearch = ({onChange}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = query => {
    setInputValue(query);
    onChange(query);
  };

  return (
    <View padding={4} borderBottomWidth={1} borderBottomColor={'gray.500'}>
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
      />
    </View>
  );
};

export default CoinsSearch;
