import { ImageType } from '../../types';
import { ActionType } from '../action-types';

export const addLikedImg = (imgId: string) => {
  return {
    type: ActionType.ADD_LIKED_IMG,
    payload: imgId,
  };
};

export const removeFromLikedImg = (imgId: string) => {
  return {
    type: ActionType.REMOVE_FROM_LIKED_IMG,
    payload: imgId,
  };
};

export const addImageToCart = (image: ImageType) => {
  return {
    type: ActionType.ADD_IMAGE_TO_CART,
    payload: image,
  };
};

export const removeImageFromCart = (image: ImageType) => {
  return {
    type: ActionType.REMOVE_IMAGE_FROM_CART,
    payload: image,
  };
};
