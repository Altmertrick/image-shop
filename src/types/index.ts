export interface StoreState {
  likedImages: string[];
  imagesInCart: ImageType[];
}

export interface ImageType {
  alt_description: string;
  blur_hash: string;
  categories: [];
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: any;
  promoted_at: null;
  sponsorship: null;
  tags: any;
  updated_at: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: any;
  width: number;
}
