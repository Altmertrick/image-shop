import './cart.css';
import React from 'react';
import { Link } from 'react-router-dom';

interface CartProps {
  selectedImages: any;
}

export const Cart: React.FC<CartProps> = ({ selectedImages }) => {
  const renderSelectedImages = () => {
    return selectedImages.map((image) => {
      return (
        <div className="grid-item">
          <img alt={image.description} src={image.urls.regular} />
        </div>
      );
    });
  };

  return (
    <div>
      <h3>Cart</h3>
      <Link to="/">Home</Link>
      <div className="grid-container">{renderSelectedImages()}</div>
    </div>
  );
};
