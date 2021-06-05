import { Action } from '../actions';
import { ActionType } from '../action-types';
import { ImageType } from '../../types';

export const CartImagesReducer = (state: ImageType[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.ADD_IMAGE_TO_CART:
      return [...state, action.payload];
    case ActionType.REMOVE_IMAGE_FROM_CART:
      return state.filter(
        (cartImage: any) => cartImage.id !== action.payload.id
      );
    default:
      return state;
  }
};
