import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {Image, SectionList, Text, Pressable, View} from 'native-base';
import CoinMarketItem from '../../components/CoinMarketItem';
import Storage from '../../libs/storage';
import Colors from '../../resource/colors';

const CoinDetailScreen = ({route}) => {
  const {coin} = route.params;
  const [favorite, setFavorite] = useState(false);
  const btnFavoriteColor = favorite ? Colors.purple : Colors.carmine;
  const btnFavoriteText = favorite ? 'Remove favorite' : 'Add favorite';

  const getSymbolIcon = () =>
    `https://c1.coinlore.com/img/25x25/${coin.nameid}.png`;

  const getSections = () => {
    const sections = [
      {
        title: 'Market cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [coin.volume24],
      },
      {
        title: 'Change 24h',
        data: [coin.percent_change_24h],
      },
    ];
    return sections;
  };

  const toogleFavorite = () => {
    if (favorite) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  const addFavorite = async () => {
    const value = JSON.stringify(coin);
    const key = `favorite-${coin.id}`;
    const stored = await Storage.store(key, value);

    console.log('stored', stored);
    if (stored) {
      setFavorite({favorite: true});
    }
  };

  const removeFavorite = async () => {
    Alert.alert('Remove favorite', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Remove',
        onPress: async () => {
          const key = `favorite-${coin.id}`;
          const removed = await Storage.remove(key);
          if (removed) {
            setFavorite(false);
          }
        },
        style: 'destructive',
      },
    ]);
  };

  useEffect(() => {
    let mounted = true;

    if (!coin || !mounted) {
      return;
    }

    const getFavorite = async () => {
      try {
        const key = `favorite-${coin.id}`;
        const stringfavorite = await Storage.get(key);
        if (stringfavorite !== null) {
          setFavorite(true);
        }
      } catch (err) {
        console.log('error get favorites ', err);
      }
    };

    getFavorite(coin);

    return () => (mounted = false);
  }, [coin]);

  return (
    <View flex={1} backgroundColor={Colors.charade}>
      <View
        backgroundColor={'rgba(0,0,0,0.1)'}
        padding="6"
        flexDirection="row"
        justifyContent="space-between">
        <View flexDirection="row" alignItems="center">
          <Image
            height="25"
            width="25"
            alt="Image coin"
            source={{uri: getSymbolIcon(coin.nameid)}}
          />
          <Text
            fontSize="18"
            color={Colors.white}
            fontWeight="bold"
            marginLeft={4}>
            {coin.name}
          </Text>
        </View>

        <Pressable
          onPress={toogleFavorite}
          backgroundColor={btnFavoriteColor}
          padding="2"
          borderRadius="8">
          <Text color={Colors.white}>{btnFavoriteText}</Text>
        </Pressable>
      </View>
      <SectionList
        maxHeight={280}
        sections={getSections(coin)}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View paddingX="6" paddingY={3}>
            <Text color={Colors.white} fontSize="14">
              {item}
            </Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View backgroundColor={'rgba(0,0,0,0.2)'} paddingX="6" paddingY={3}>
            <Text color={Colors.white} fontSize="14" fontWeight="bold">
              {section.title}
            </Text>
          </View>
        )}
      />
      <Text
        color={Colors.white}
        fontSize="18"
        fontWeight="bold"
        marginBottom="4"
        marginLeft="6">
        Markets
      </Text>
      <CoinMarketItem coinId={coin.id} />
    </View>
  );
};

export default CoinDetailScreen;
