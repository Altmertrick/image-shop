import React from 'react';
import { Link } from 'react-router-dom';

import { SearchBar } from './SearchBar';
import { ImageList } from './ImageList';

interface MainViewProps {
  onSearchSubmit: (term: string) => void;
  selectImage: (image: any) => void;
  images: any;
}

export const MainView: React.FC<MainViewProps> = (props) => {
  return (
    <div>
      <Link to="/cart">Cart</Link>
      <SearchBar onSearchSubmit={props.onSearchSubmit} />
      <ImageList selectImage={props.selectImage} images={props.images} />
    </div>
  );
};
