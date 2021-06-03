import { combineReducers } from 'redux';
//Reducers:
import { CartImagesReducer } from './CartImagesReducer';
import { LikedImagesReducer } from './LikedImagesReducer';

export const reducers = combineReducers({
  imagesInCart: CartImagesReducer,
  likedImages: LikedImagesReducer,
});
