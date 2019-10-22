
import React, { useState, useEffect } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { authorize } from 'Actions/Authorize';
import AlbumContainer from './containers/Album/AlbumContainer';
import HomeContainer from './containers/Home/HomeContainer';
import GlobalStyle from './styles/GlobalStyle';
import { Section, Article } from './styles/Style';
import Header from './components/Header/Header';

const App = () => {
  useEffect(() => {
    authorize();
  }, []);

  return (
    <Section>
      <Header />
      <Article>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/albums/:artist" component={AlbumContainer} />
          </Switch>
        </HashRouter>
      </Article>
      <GlobalStyle />
    </Section>
  );
};

export default App;
