import {ImageSourcePropType} from 'react-native';
export interface PaymentMethod {
  paymentMode: string;
  name: string;
  icon: ImageSourcePropType;
  isIcon: boolean;
}
