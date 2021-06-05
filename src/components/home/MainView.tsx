import '../../css/generalStyle.css';
import React from 'react';
import { Link } from 'react-router-dom';

import { SearchBar } from './SearchBar';
import { ImageList } from './ImageList';

import { ImageType } from '../../types';

interface MainViewProps {
  onSearchSubmit: (term: string) => void;
  images: ImageType[] | null;
}

export const MainView: React.FC<MainViewProps> = (props) => {
  return (
    <div>
      <div className="header">
        <div className="center">
          <h1>Search for Images</h1>
          <SearchBar onSearchSubmit={props.onSearchSubmit} />
        </div>
        <div className="nav-img">
          <Link to="/cart">
            <i className="shopping cart inverted white big icon" />
          </Link>
        </div>
      </div>
      <div className="main-container">
        <ImageList images={props.images} />
      </div>
    </div>
  );
};
