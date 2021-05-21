import '../../css/similarStyle.css';
import '../../css/cart.css';
import React from 'react';
import { Link } from 'react-router-dom';

interface CartProps {
  selectedImages: any;
}

export const Cart: React.FC<CartProps> = ({ selectedImages }) => {
  const renderSelectedImages = () => {
    return selectedImages.map((image: any) => {
      return (
        <div className="grid-item">
          <img alt={image.description} src={image.urls.regular} />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="header">
        <div className="center">
          <h1>Cart</h1>
        </div>
        <div className="nav-img">
          <Link to="/">
            <i className="home inverted white big icon" />
          </Link>
        </div>
      </div>

      <div className="grid-container">{renderSelectedImages()}</div>
    </div>
  );
};
