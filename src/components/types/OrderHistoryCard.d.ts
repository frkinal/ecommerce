import {CartItem} from '@components/types';
export interface OrderHistoryCard {
  navigationHandler: ({index: number, id: string, type: string}) => void;
  CartList: Array<CartItem>;
  CartListPrice: string;
  OrderDate: string;
}
