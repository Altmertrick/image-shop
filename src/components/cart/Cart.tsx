import '../../css/generalStyle.css';
import '../../css/cart.css';
import React from 'react';
import { Link } from 'react-router-dom';

interface CartProps {
  selectedImages: any[];
}

export const Cart: React.FC<CartProps> = ({ selectedImages }) => {
  const renderSelectedImages = () => {
    return selectedImages.map((image: any) => {
      const imgPrice = image.likes / 100;

      return (
        <div className="flex-container">
          <img
            key={image.id}
            alt={image.description}
            src={image.urls.regular}
          />
          <p className="img-price">{`$${imgPrice}`}</p>
        </div>
      );
    });
  };

  const countTotalValue = (selectedImages: any) => {
    if (selectedImages.length === 0) {
      return;
    }
    const value = selectedImages.reduce((acr: number, image: any) => {
      return acr + image.likes;
    }, 0);

    return value / 100;
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

      <div className="main-container">{renderSelectedImages()}</div>
      <div className="main-container">
        <div className=" total-price">
          <p>Total Prise: ${countTotalValue(selectedImages)}</p>
        </div>
      </div>
    </div>
  );
};
