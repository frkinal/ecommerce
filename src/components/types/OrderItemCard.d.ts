import {PricesProps} from '@components/types';
export interface OrderItemCard {
  type: string;
  name: string;
  imagelink_square: string;
  special_ingredient: string;
  prices: Array<PricesProps>;
  ItemPrice: string;
}
