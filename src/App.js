
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AlbumsContainer from './containers/Albums/AlbumsContainer';

const App = () => (
  <div>
    <p>Logo</p>
    <Switch>
      <Route path="/albums" component={AlbumsContainer} />
    </Switch>
  </div>
);

export default App;
