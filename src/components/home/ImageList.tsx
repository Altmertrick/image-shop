import '../../css/imageList.css';
import React from 'react';
import { ImageCard } from './ImageCard';

interface ImageListProps {
  images: any;
  selectImage: (image: any) => void;
}

export const ImageList: React.FC<ImageListProps> = (props) => {
  const { images, selectImage } = props;

  const renderImages = (): any => {
    if (!images) {
      return;
    }

    return images.map((image: any) => {
      return (
        <ImageCard selectImage={selectImage} key={image.id} image={image} />
      );
    });
  };

  return <div className="image-list">{renderImages()}</div>;
};
