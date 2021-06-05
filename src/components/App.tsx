import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { unsplash } from '../api/unsplash';
import { MainView } from './home/MainView';
import { Cart } from './cart/Cart';

import { ImageType } from '../types';

export const App: React.FC = () => {
  const [images, setImages] = useState<ImageType[] | null>([]);

  const onSearchSubmit = async (term: string) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    setImages(response.data.results);
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainView onSearchSubmit={onSearchSubmit} images={images} />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
