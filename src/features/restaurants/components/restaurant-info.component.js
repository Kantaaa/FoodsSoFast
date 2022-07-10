import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { Image } from 'react-native';

const RCard = styled(Card)`
  background-color: ${(props) =>
    props.theme.colors.bg.primary};
`;
const RCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) =>
    props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.text.primary};
`;
const Address = styled.View`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding: ${(props) => props.theme.space[3]};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-left: ${(props) => props.theme.space[3]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Kantas Sandwiches',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'
    ],
    address = 'Oslo streetfood',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
  } = restaurant;

  const ratingArray = Array.from(
    new Array(Math.floor(rating))
  );

  return (
    <RCard elevation={5}>
      <RCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(() => (
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../../../../assets/ratingstar.png')}
            />
          ))}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RCard>
  );
};
