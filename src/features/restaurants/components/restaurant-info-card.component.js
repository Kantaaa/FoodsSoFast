import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { Image } from 'react-native';

import { Spacer } from '../../../components/spacer/spacer.component';

const ResturantCard = styled(Card)`
  background-color: ${(props) =>
    props.theme.colors.bg.primary};
`;
const ResturantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) =>
    props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;
const Address = styled.View`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  align-self: center;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const TextClosedTemp = styled.Text`
  align-self: center;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.error};
`;

// const ViewOpen = styled.View`
//   padding: ${(props) => props.theme.space[3]};
// `;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Kantas Sandwiches',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'
    ],
    address = 'Oslo streetfood',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true
  } = restaurant;

  const ratingArray = Array.from(
    new Array(Math.floor(rating))
  );

  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover
        key={name}
        source={{ uri: photos[0] }}
      />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <Image
                style={{ width: 20, height: 20 }}
                source={require('../../../../assets/ratingstar.png')}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily ? (
              <TextClosedTemp>
                Close Temporarily
              </TextClosedTemp>
            ) : null}
            <Spacer position="left" size="large">
              {isOpenNow ? (
                <Image
                  style={{
                    width: 30,
                    height: 20
                  }}
                  source={require('../../../../assets/openred.png')}
                />
              ) : null}
            </Spacer>
            <Spacer position="left" size="large">
              <Image
                style={{
                  width: 15,
                  height: 15
                }}
                source={{ uri: icon }}
              />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </ResturantCard>
  );
};
