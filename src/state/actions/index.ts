import { ActionType } from '../action-types';
import { ImageType } from '../../types';

interface addLikedImageAction {
  type: ActionType.ADD_LIKED_IMG;
  payload: string;
}

interface removeFromLikedImageAction {
  type: ActionType.REMOVE_FROM_LIKED_IMG;
  payload: string;
}

interface addImageToCartAction {
  type: ActionType.ADD_IMAGE_TO_CART;
  payload: ImageType;
}

interface removeImageFromCart {
  type: ActionType.REMOVE_IMAGE_FROM_CART;
  payload: ImageType;
}

export type Action =
  | addLikedImageAction
  | removeFromLikedImageAction
  | addImageToCartAction
  | removeImageFromCart;
