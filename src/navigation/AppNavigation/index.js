import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, Text, View} from 'react-native';

import {screenNames} from '../../constants/constants';
import HomeScreen from '../../screens/HomeScreen';
import strings from '../../constants/strings';
import images from '../../assets/images';
import styles from './styles';
import BreweryDetailsScreen from '../../screens/BreweryDetailsScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.homeScreen}
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Image source={images.logo} style={styles.logo} />
              <Text style={styles.headerTitle}>{strings.openBrewery}</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name={screenNames.breweryDetailsScreen}
        component={BreweryDetailsScreen}
        options={({
          route: {
            params: {name},
          },
        }) => ({
          headerTitle: () => (
            <View>
              <Text style={styles.detailsHeaderTitle}>{name}</Text>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
