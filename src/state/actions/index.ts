import { ActionType } from '../action-types';

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
  payload: any;
}

interface removeImageFromCart {
  type: ActionType.REMOVE_IMAGE_FROM_CART;
  payload: any;
}

export type Action =
  | addLikedImageAction
  | removeFromLikedImageAction
  | addImageToCartAction
  | removeImageFromCart;
