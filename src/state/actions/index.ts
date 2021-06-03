export const addLikedImg = (imgId: string) => {
  return {
    type: 'ADD_LIKED_IMG',
    payload: imgId,
  };
};

export const removeFromLikedImg = (imgId: string) => {
  return {
    type: 'REMOVE_FROM_LIKED_IMG',
    payload: imgId,
  };
};

export const addImageToCart = (image: any) => {
  return {
    type: 'ADD_IMAGE_TO_CART',
    payload: image,
  };
};

export const removeImageFromCart = (image: any) => {
  return {
    type: 'REMOVE_IMAGE_FROM_CART',
    payload: image,
  };
};
