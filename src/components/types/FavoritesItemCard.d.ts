import {ImageProps} from 'react-native';
export interface FavoritesItemCard {
  id: string;
  imagelink_portrait: ImageProps;
  name: string;
  special_ingredient: string;
  type: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  description: string;
  favourite: boolean;
  ToggleFavouriteItem: (favourite: boolean, type: string, id: string) => void;
}
