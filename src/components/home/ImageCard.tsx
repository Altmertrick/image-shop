import '../../css/imageCard.css';

import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  addLikedImg,
  removeFromLikedImg,
  addImageToCart,
  removeImageFromCart,
} from '../../state/actions';

interface ImageCardProps {
  image: any;
  isLiked: boolean;
  isAddedToCart: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = (props) => {
  const [spans, setSpans] = useState(0);

  const imageRef = useRef<HTMLImageElement | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    imageRef.current?.addEventListener('load', countSpans);
  }, []);

  const countSpans = () => {
    if (imageRef.current) {
      const height = imageRef.current.clientHeight;
      console.log(height);
      const countedSpans = Math.ceil(height / 10) + 3;
      setSpans(countedSpans);
    }
  };

  const likeImage = () => {
    const imgId = props.image.id;

    if (!props.isLiked) {
      dispatch(addLikedImg(imgId));
    }

    if (props.isLiked) {
      dispatch(removeFromLikedImg(imgId));
    }
  };

  const addToCart = () => {
    if (!props.isAddedToCart) {
      dispatch(addImageToCart(props.image));
    }

    if (props.isAddedToCart) {
      dispatch(removeImageFromCart(props.image));
    }
  };

  return (
    <div className="grid-div " style={{ gridRowEnd: `span ${spans}` }}>
      <div className="card">
        <img
          ref={imageRef}
          alt={props.image.description}
          src={props.image.urls.regular}
        />
        <div className="card-bottom">
          <div className="icon">
            <i
              onClick={likeImage}
              className={
                props.isLiked ? 'heart red icon' : 'heart outline icon'
              }
            />
          </div>
          <div className="icon">
            <i
              onClick={addToCart}
              className={
                props.isAddedToCart ? 'bookmark  icon' : 'bookmark outline icon'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
