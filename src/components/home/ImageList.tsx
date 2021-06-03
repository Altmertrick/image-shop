import '../../css/imageList.css';
import React from 'react';
import { ImageCard } from './ImageCard';

import { useSelector } from 'react-redux';

interface ImageListProps {
  images: any;
  selectImage: (image: any) => void;
}

export const ImageList: React.FC<ImageListProps> = (props) => {
  const { images, selectImage } = props;

  const state: any = useSelector((state) => state);
  const { likedImages, imagesInCart } = state;

  const renderImages = (): any => {
    if (!images) {
      return;
    }

    return images.map((image: any) => {
      const isLiked = likedImages.includes(image.id);
      console.log(likedImages);

      let isAddedToCart = false;
      const imageInCart = imagesInCart.find(
        (cartImage: { id: any }) => cartImage.id === image.id
      );

      if (imageInCart) {
        isAddedToCart = true;
      }

      console.log(isAddedToCart);

      return (
        <ImageCard
          isAddedToCart={isAddedToCart}
          isLiked={isLiked}
          selectImage={selectImage}
          key={image.id}
          image={image}
        />
      );
    });
  };

  return <div className="image-list">{renderImages()}</div>;
};
