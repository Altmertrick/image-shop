import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { MainView } from './MainView';
import { Cart } from './Cart';

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainView />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
};
