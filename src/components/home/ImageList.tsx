import '../../css/imageList.css';
import React from 'react';
import { ImageCard } from './ImageCard';

import { useSelector } from 'react-redux';

interface ImageListProps {
  images: any;
}

export const ImageList: React.FC<ImageListProps> = ({ images }) => {
  const state: any = useSelector((state) => state);
  const { likedImages, imagesInCart } = state;

  const renderImages = (): any => {
    if (!images) {
      return;
    }

    return images.map((image: any) => {
      const isLiked = likedImages.includes(image.id);

      let isAddedToCart = false;
      const imageInCart = imagesInCart.find(
        (cartImage: { id: any }) => cartImage.id === image.id
      );

      if (imageInCart) {
        isAddedToCart = true;
      }

      console.log(isAddedToCart);
      console.log(imagesInCart);

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
