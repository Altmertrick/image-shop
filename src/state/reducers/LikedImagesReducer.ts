import { Action } from '../actions';
import { ActionType } from '../action-types';

export const LikedImagesReducer = (state: string[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.ADD_LIKED_IMG:
      return [...state, action.payload];
    case ActionType.REMOVE_FROM_LIKED_IMG:
      return state.filter((id) => id !== action.payload);
    default:
      return state;
  }
};
