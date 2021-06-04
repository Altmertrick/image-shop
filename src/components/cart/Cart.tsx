import '../../css/generalStyle.css';
import '../../css/cart.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { removeImageFromCart } from '../../state/actions';

export const Cart: React.FC = () => {
  const { imagesInCart } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const removeFromCart = (image: any): void => {
    dispatch(removeImageFromCart(image));
    console.log('image was removed');
    console.log(image);
  };

  const renderSelectedImages = () => {
    return imagesInCart.map((image: any) => {
      const imgPrice = image.likes / 100;

      return (
        <div className="flex-container">
          <div key={image.id} className="image-container">
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

  const countTotalValue = (imagesInCart: any) => {
    if (imagesInCart.length === 0) {
      return;
    }

    const value = imagesInCart.reduce((acr: number, image: any) => {
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
          <p>Total Prise: ${countTotalValue(imagesInCart)}</p>
        </div>
      </div>
    </div>
  );
};
