import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};
export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
export type AuthRouteProp = RouteProp<AuthStackParamList, 'Auth'>;
