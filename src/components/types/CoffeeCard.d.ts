import {PriceProps, PricesProps} from '@components/types';
export interface CoffeeCard {
  id: string;
  index: number;
  type: string;
  roasted: string;
  imagelink_square: string;
  imagelink_portrait?: string;
  name: string;
  description?: string;
  special_ingredient: string;
  average_rating: number;
  price: PriceProps;
  buttonPressHandler: (props: CoffeeCardActionProps) => void;
  ingredients?: string;
  ratings_count?: string;
  favorite?: boolean;
  type?: string;
}
export interface CoffeeCardActionProps {
  id: string;
  index: number;
  name: string;
  roasted: string;
  imagelink_square: string;
  special_ingredient: string;
  type: string;
  prices: Array<PricesProps>;
  price?: PriceProps;
}
