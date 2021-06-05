import '../../css/imageList.css';
import React from 'react';
import { ImageCard } from './ImageCard';

import { useSelector } from 'react-redux';

import { ImageType, StoreState } from '../../types';

interface ImageListProps {
  images: ImageType[] | null;
}

export const ImageList: React.FC<ImageListProps> = ({ images }) => {
  const { likedImages, imagesInCart } = useSelector(
    (state: StoreState) => state
  );

  const renderImages = (): any => {
    if (!images) {
      return;
    }

    return images.map((image) => {
      const isLiked = likedImages.includes(image.id);

      let isAddedToCart = false;
      const imageInCart = imagesInCart.find(
        (cartImage) => cartImage.id === image.id
      );

      if (imageInCart) {
        isAddedToCart = true;
      }

      return (
        <ImageCard
          isAddedToCart={isAddedToCart}
          isLiked={isLiked}
          key={image.id}
          image={image}
        />
      );
    });
  };

  return <div className="image-list">{renderImages()}</div>;
};
