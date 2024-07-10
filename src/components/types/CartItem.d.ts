import {PricesProps} from '@components/types';
export interface CartItem {
  id: string;
  index: number;
  name: string;
  imagelink_square: string;
  special_ingredient: string;
  roasted: string;
  prices: Array<PricesProps>;
  type: string;
  incrementCartItemQuantityHandler: (id: string, size: string) => void;
  decrementCartItemQuantityHandler: (id: string, size: string) => void;
}
