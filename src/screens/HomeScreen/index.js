import React, {useCallback, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {SearchBar, Text} from 'react-native-elements';

import {getBreweriesList} from './services';
import Item from '../../components/Item';
import strings from '../../constants/strings';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import colors from '../../styles/colors';
import {FlatList} from 'react-native-gesture-handler';
import fonts from '../../styles/fonts';

const HomeScreen = () => {
  const [breweriesList, setBreweriesList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchMore, setFetchMore] = useState(false);
  const [searchText, setSearchText] = useState('');

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          setFetchMore(true);
          const data = await getBreweriesList({params: {page: pageNumber}});
          setFetchMore(false);
          if (pageNumber !== 1) {
            return setBreweriesList((prevState) => [...prevState, ...data]);
          }
          return setBreweriesList(data);
        } catch (error) {
          setBreweriesList(undefined);
        }
      })();
    }, [pageNumber]),
  );

  const renderItem = useCallback(
    ({item}) => <Item item={item} onPress={() => console.log('Pressed')} />,
    [],
  );

  const keyExtractor = useCallback(({id}) => String(id), []);

  const onEndReached = useCallback(
    () => setPageNumber((prevState) => prevState + 1),
    [],
  );

  const ListFooterComponent = useCallback(
    () => (
      <ActivityIndicator
        animating={fetchMore}
        size="large"
        color={colors.black}
      />
    ),
    [fetchMore],
  );

  const ListEmptyComponent = useCallback(
    () => (
      <View style={styles.emptyComponentContainer}>
        <Text style={styles.emptyListText}>{strings.emptyListText}</Text>
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <SearchBar
        placeholder={strings.search}
        value={searchText}
        onChangeText={(val) => setSearchText(val)}
        onClear={() => setSearchText('')}
      />
      <View style={styles.flatListContainer}>
        <FlatList
          contentContainerStyle={styles.flatListContent}
          pointerEvents={fetchMore ? 'none' : 'auto'}
          data={breweriesList}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
          ListFooterComponent={ListFooterComponent}
          ListEmptyComponent={ListEmptyComponent}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
