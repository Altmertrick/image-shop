import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { upsplash } from '../api/upsplash';
import { MainView } from './home/MainView';
import { Cart } from './cart/Cart';

export const App: React.FC = () => {
  const [images, setImages] = useState<any>();
  const [selectedImages, setSelectedImages] = useState<any>([]);

  const onSearchSubmit = async (term: string) => {
    const response = await upsplash.get('/search/photos', {
      params: { query: term },
    });

    setImages(response.data.results);
  };

  const selectImage = (image: any) => {
    setSelectedImages([...selectedImages, image]);
    console.log(selectedImages);
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainView
              selectImage={selectImage}
              onSearchSubmit={onSearchSubmit}
              images={images}
            />
          </Route>
          <Route exact path="/cart">
            <Cart selectedImages={selectedImages} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
