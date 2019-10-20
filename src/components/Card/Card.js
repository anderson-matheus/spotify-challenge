import React from 'react';
import {
  Album,
  Title,
  Image,
  SubTitle,
} from './Style';

const Card = () => (
  <Album>
    <Image>imagem</Image>
    <Title>título do álbum</Title>
    <SubTitle>subtítulo do álbum</SubTitle>
  </Album>
);

export default Card;
