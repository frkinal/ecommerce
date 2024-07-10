import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';

import type {
  DetailsStackParamList,
  PaymentStackParamList,
} from '@navigators/types';

export type StacParamList = {
  Payment: NavigatorScreenParams<PaymentStackParamList.Payment>;
  Details: NavigatorScreenParams<DetailsStackParamList.Details>;
};

export type StackNavigationProp = NativeStackNavigationProp<StacParamList>;
