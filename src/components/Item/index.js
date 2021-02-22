import React from 'react';
import {ListItem} from 'react-native-elements';

const Item = ({
  item: {
    name = 'N/A',
    city = 'N/A',
    state = 'N/A',
    country = 'N/A',
    phone = 'N/A',
  },
}) => {
  return (
    <ListItem onPress={() => console.log('Pressed')}>
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
        <ListItem.Subtitle>{city}</ListItem.Subtitle>
        <ListItem.Subtitle>{state}</ListItem.Subtitle>
        <ListItem.Subtitle>{country}</ListItem.Subtitle>
        <ListItem.Subtitle>{'+' + phone}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron name={'keyboard-arrow-right'} />
    </ListItem>
  );
};

export default Item;
