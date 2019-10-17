
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AlbumsContainer from './containers/Albums/AlbumsContainer';
import GlobalStyle from './GlobalStyle';
import { Section, Article } from './Style';

const App = () => (
  <Section>
    <div>Logo</div>
    <Article>
      <Switch>
        <Route path="/albums" component={AlbumsContainer} />
      </Switch>
    </Article>
    <GlobalStyle />
  </Section>
);

export default App;
