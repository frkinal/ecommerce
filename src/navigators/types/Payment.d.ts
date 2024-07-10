import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export type PaymentStackParamList = {
  Payment: {amount: string};
};

export type PaymentNavigationProp =
  NativeStackNavigationProp<PaymentStackParamList>;

export type PaymentRouteProp = RouteProp<PaymentStackParamList, 'Payment'>;
