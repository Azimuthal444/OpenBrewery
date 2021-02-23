import React, {useCallback, useState} from 'react';
import {View, Linking} from 'react-native';
import {Card, Button, Icon, Text, Overlay} from 'react-native-elements';
import strings from '../../constants/strings';
import colors from '../../styles/colors';

import styles from './styles';

const BreweryDetailsScreen = ({
  route: {
    params: {
      name,
      street,
      address_2,
      address_3,
      city,
      state,
      county_province,
      postal_code,
      country,
      longitude,
      latitude,
      website_url,
      phone,
    },
  },
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const openLink = useCallback(async (url) => {
    await Linking.openURL(url);
  }, []);

  const closeOverlay = useCallback(() => setShowOverlay(false), []);

  return (
    <Card>
      <Card.Title h4>{name}</Card.Title>
      <Card.Divider />
      <View style={styles.addressContainer}>
        {[
          street,
          address_2,
          address_3,
          city,
          state,
          county_province,
          postal_code,
          country,
        ].map(
          (item) =>
            Boolean(item) && (
              <Text style={styles.addressText} key={item}>
                {item}
              </Text>
            ),
        )}
      </View>
      <Card.Divider />
      <View style={styles.linkContainer}>
        {[
          {
            id: '1',
            iconName: 'place',
            onPress: async () => {
              setIsLoading('1');
              try {
                await openLink(
                  `http://maps.google.com/maps?q=${latitude},${longitude}`,
                );
              } catch {
                setShowOverlay(true);
              }
              setIsLoading(false);
            },
            dataPresent: Boolean(latitude) && Boolean(longitude),
          },
          {
            id: '2',
            iconName: 'language',
            onPress: async () => {
              setIsLoading('2');
              try {
                await openLink(website_url);
              } catch {
                setShowOverlay(true);
              }
              setIsLoading(false);
            },
            dataPresent: Boolean(website_url),
          },
          {
            id: '3',
            iconName: 'call',
            onPress: async () => {
              setIsLoading('3');
              try {
                await openLink(`tel:+${phone}`);
              } catch {
                setShowOverlay(true);
              }
              setIsLoading(false);
            },
            dataPresent: Boolean(phone),
          },
        ].map(
          ({id, iconName, onPress, dataPresent}) =>
            dataPresent && (
              <Button
                key={id}
                type="outline"
                icon={<Icon name={iconName} size={30} color={colors.black} />}
                onPress={onPress}
                loading={id === isLoading}
                loadingProps={{color: colors.black}}
              />
            ),
        )}
      </View>
      <Overlay isVisible={showOverlay} onBackdropPress={closeOverlay}>
        <Text style={styles.overlayText}>{strings.somethingWentWrong}</Text>
        <Button
          type="outline"
          icon={<Icon name="cancel" size={15} color={colors.red} />}
          buttonStyle={styles.closeButtonStyle}
          onPress={closeOverlay}
        />
      </Overlay>
    </Card>
  );
};

export default BreweryDetailsScreen;
