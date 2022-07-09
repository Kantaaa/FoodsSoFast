import React from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const RCard = styled(Card)`
  background-color: ${(props) =>
    props.theme.colors.bg.primary};
`;
const RCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) =>
    props.theme.colors.bg.secondary};
`;

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.error};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Le Sandwiches',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
  } = restaurant;

  return (
    <RCard elevation={5}>
      <RCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RCard>
  );
};
