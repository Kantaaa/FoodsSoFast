import React from 'react';
import { Text } from 'react-native';

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Piiza de Restaurante',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'
    ],
    address = ['Oslo gate'],
    isOpenNow = true,
    rating = 4,
    isClosedTemp
  } = restaurant;

  return <Text>Restaurant Info </Text>;
};
