import React, {useState} from 'react';
import {TextInput, Platform, View, StyleSheet} from 'react-native';
import Colors from '../../resource/colors';

const CoinsSearch = ({onChange}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = query => {
    setInputValue(query);
    onChange(query);
  };

  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          Platform.OS === 'ios' ? styles.textInputIOS : styles.textInputAndroid,
        ]}
        onChangeText={handleChange}
        value={inputValue}
        placeholder="Search coin"
        placeholderTextColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingLeft: 16,
    color: 'white',
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
  },
  textInputIOS: {
    margin: 8,
    borderRadius: 8,
  },
});

export default CoinsSearch;
