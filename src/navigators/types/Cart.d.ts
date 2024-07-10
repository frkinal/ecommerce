import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export type CartStackParamList = {
  Cart: undefined;
};
export type CartNavigationProp = NativeStackNavigationProp<CartStackParamList>;
export type CartRouteProp = RouteProp<CartStackParamList, 'Cart'>;
