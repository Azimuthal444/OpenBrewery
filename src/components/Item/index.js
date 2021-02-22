import React from 'react';
import {ListItem} from 'react-native-elements';

const Item = ({
  item: {name, city, state, country, phone},
  onPress = undefined,
}) => {
  return (
    <ListItem onPress={onPress} bottomDivider>
      <ListItem.Content>
        {Boolean(name) && <ListItem.Title>{name}</ListItem.Title>}
        {Boolean(city) && <ListItem.Subtitle>{city}</ListItem.Subtitle>}
        {Boolean(state) && <ListItem.Subtitle>{state}</ListItem.Subtitle>}
        {Boolean(country) && <ListItem.Subtitle>{country}</ListItem.Subtitle>}
        {Boolean(phone) && <ListItem.Subtitle>{'+' + phone}</ListItem.Subtitle>}
      </ListItem.Content>
      <ListItem.Chevron name={'keyboard-arrow-right'} />
    </ListItem>
  );
};

export default Item;
