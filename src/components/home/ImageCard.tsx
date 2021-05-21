import '../../css/imageCard.css';
import React, { useEffect } from 'react';
import { useRef, useState } from 'react';

interface ImageCardProps {
  image: any;
  selectImage: (image: any) => void;
}

export const ImageCard: React.FC<ImageCardProps> = (props) => {
  const [spans, setSpans] = useState(0);
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    imageRef.current?.addEventListener('load', countSpans);
  }, []);

  const countSpans = () => {
    if (imageRef.current) {
      const height = imageRef.current.clientHeight;
      console.log(height);
      const countedSpans = Math.ceil(height / 10);
      setSpans(countedSpans);
    }
  };

  const addToCart = () => {
    setAdded(!added);
    props.selectImage(props.image);
  };

  return (
    <div className="grid-div " style={{ gridRowEnd: `span ${spans}` }}>
      <div className="card">
        <img
          ref={imageRef}
          alt={props.image.description}
          src={props.image.urls.regular}
        />
        <div className="card-container">
          <i
            onClick={() => setLiked(!liked)}
            className={liked ? 'heart red icon' : 'heart outline icon'}
          />
          <i
            onClick={addToCart}
            className={added ? 'bookmark  icon' : 'bookmark outline icon'}
          />
        </div>
      </div>
    </div>
  );
};
