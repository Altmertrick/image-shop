import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { upsplash } from '../api/upsplash';
import { MainView } from './home/MainView';
import { Cart } from './cart/Cart';

export const App: React.FC = () => {
  const [images, setImages] = useState<any>();

  const onSearchSubmit = async (term: string) => {
    const response = await upsplash.get('/search/photos', {
      params: { query: term },
    });

    setImages(response.data.results);
    console.log(images);
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainView onSearchSubmit={onSearchSubmit} />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
