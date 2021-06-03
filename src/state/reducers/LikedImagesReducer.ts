export const LikedImagesReducer = (state: string[] = [], action: any) => {
  switch (action.type) {
    case 'ADD_LIKED_IMG':
      return [...state, action.payload];
    case 'REMOVE_FROM_LIKED_IMG':
      return state.filter((id) => id !== action.payload);
    default:
      return state;
  }
};
