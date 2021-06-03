export const CartImagesReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case 'ADD_IMAGE_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_IMAGE_FROM_CART':
      return state.filter((image: any) => image.id !== action.payload.id);
    default:
      return state;
  }
};