import AsyncStorage from '@react-native-async-storage/async-storage';

const store = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (err) {
    console.log('Error Storage store', err);
    return false;
  }
};

const get = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (err) {
    console.log('Error Storage get', err);
    throw Error(err);
  }
};

const multiGet = async keys => {
  try {
    const values = await AsyncStorage.multiGet(keys);
    return values;
  } catch (err) {
    console.log('Error Storage multiGet', err);
    throw Error(err);
  }
};

const getAllKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (err) {
    console.log('Error Storage getAllKeys', err);
    throw Error(err);
  }
};

const remove = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (err) {
    console.log('Error Storage remove', err);
    return false;
  }
};

const Storage = {store, get, multiGet, getAllKeys, remove};

export default Storage;
