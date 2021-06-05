import '../../css/generalStyle.css';
import '../../css/cart.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { removeImageFromCart } from '../../state/action-creators';

import { ImageType, StoreState } from '../../types';

export const Cart: React.FC = () => {
  const { imagesInCart } = useSelector((state: StoreState) => state);
  const dispatch = useDispatch();

  const removeFromCart = (image: ImageType): void => {
    dispatch(removeImageFromCart(image));
  };

  const renderSelectedImages = () => {
    return imagesInCart.map((image: ImageType) => {
      const imgPrice = image.likes / 100;

      return (
        <div key={image.id} className="flex-container">
          <div className="image-container">
            <img alt={image.description} src={image.urls.regular} />
            <div className="image-overlay">
              <button onClick={() => removeFromCart(image)} className="button">
                Remove
              </button>
            </div>
          </div>
          <p className="img-price">{`$${imgPrice}`}</p>
        </div>
      );
    });
  };

  const countTotalValue = (imageList: ImageType[]) => {
    if (imageList.length === 0) {
      return;
    }

    const value = imageList.reduce((acr: number, image) => {
      return acr + image.likes;
    }, 0);

    return value / 100;
  };

  const renderMessage = () => {
    if (imagesInCart.length === 0) {
      return (
        <div className="message-container">
          <h2>Your cart is empty Add some images!</h2>
        </div>
      );
    }
    return (
      <div className="total-price">
        <p>Total Prise: ${countTotalValue(imagesInCart)}</p>
      </div>
    );
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
      <div className="main-container">{renderMessage()}</div>
    </div>
  );
};
