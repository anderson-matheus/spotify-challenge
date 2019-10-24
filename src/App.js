
import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { authorize } from 'Actions/Authorize';
import Header from 'Components/Header/Header';
import PlayerMusic from 'Components/PlayerMusic/PlayerMusic';
import AlbumContainer from './containers/Album/AlbumContainer';
import HomeContainer from './containers/Home/HomeContainer';
import GlobalStyle from './styles/GlobalStyle';
import { Section, Article } from './styles/Style';
import store from './store';

const App = () => {
  useEffect(() => {
    authorize();
  }, []);

  return (
    <Provider store={store}>
      <Section>
        <Header />
        <Article>
          <BrowserRouter basename={process.env.BASE_NAME}>
            <Switch>
              <Route path="/" exact component={HomeContainer} />
              <Route path="/albums/:albumId" component={AlbumContainer} />
            </Switch>
          </BrowserRouter>
        </Article>
        <GlobalStyle />
        <PlayerMusic />
      </Section>
    </Provider>
  );
};

export default App;
