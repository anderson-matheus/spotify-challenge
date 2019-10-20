import React from 'react';
import { Link } from 'react-router-dom';
import {
  Album,
  Title,
  Image,
  SubTitle,
} from './Style';

const albumName = 'teste';

const RegularCard = () => (
  <Album>
    <Link to={`/albums/${albumName}`}>
      <Image>imagem</Image>
      <Title>título do álbum</Title>
      <SubTitle>subtítulo do álbum</SubTitle>
    </Link>
  </Album>
);

export default RegularCard;
