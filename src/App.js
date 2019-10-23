
import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { authorize } from 'Actions/Authorize';
import AlbumContainer from './containers/Album/AlbumContainer';
import HomeContainer from './containers/Home/HomeContainer';
import GlobalStyle from './styles/GlobalStyle';
import { Section, Article } from './styles/Style';
import Header from './components/Header/Header';
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
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={HomeContainer} />
              <Route path="/albums/:albumId" component={AlbumContainer} />
            </Switch>
          </BrowserRouter>
        </Article>
        <GlobalStyle />
      </Section>
    </Provider>
  );
};

export default App;
