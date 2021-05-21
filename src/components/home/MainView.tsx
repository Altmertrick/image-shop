import '../../css/generalStyle.css';
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
      <div className="header">
        <div className="center">
          <h1>Search Images</h1>
          <SearchBar onSearchSubmit={props.onSearchSubmit} />
        </div>
        <div className="nav-img">
          <Link to="/cart">
            <i className="shopping cart inverted white big icon" />
          </Link>
        </div>
      </div>
      <div className="main-container">
        <ImageList selectImage={props.selectImage} images={props.images} />
      </div>
    </div>
  );
};
