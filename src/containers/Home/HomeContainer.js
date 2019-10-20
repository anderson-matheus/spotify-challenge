import React from 'react';
import ResearchField from 'Components/ResearchField/ResearchField';
import Card from 'Components/Card/Card';
import {
  Grid,
  Container,
  Content,
  HomeTitle,
} from './Style';

const cards = Array.from(Array(Math.floor(Math.random() * 100)).keys());

const HomeContainer = () => (
  <Container>
    <ResearchField />

    <Content>
      <HomeTitle>Álbuns buscados recentemente</HomeTitle>
      <Grid>
        {cards.map((index) => <Card key={index} />)}
      </Grid>
    </Content>
  </Container>
);

export default HomeContainer;
