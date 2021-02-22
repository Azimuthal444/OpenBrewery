import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {SearchBar} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';

import {getBreweriesList} from './services';
import Item from '../../components/Item';
import strings from '../../constants/strings';

const HomeScreen = () => {
  const [breweriesList, setBreweriesList] = useState([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const data = await getBreweriesList();
          setBreweriesList(data);
        } catch (error) {
          setBreweriesList(undefined);
        }
      })();
    }, []),
  );

  const renderItem = useCallback(
    ({item, item: {id}}) => <Item id={String(id)} item={item} />,
    [],
  );

  return (
    <View>
      {/*  <SearchBar placeholder={strings.search} /> */}
      <FlatList data={breweriesList} renderItem={renderItem} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
