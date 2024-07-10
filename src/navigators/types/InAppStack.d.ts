import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';

import type {
  HomeBottomTabParamList,
  DetailsStackParamList,
  PaymentStackParamList,
} from '@navigators/types';

export type InAppStackParamList = {
  Tab: NavigatorScreenParams<HomeBottomTabParamList>;
  Details: NavigatorScreenParams<DetailsStackParamList>;
  Payment: NavigatorScreenParams<PaymentStackParamList>;
  Profile: undefined;
};

export type InAppStackNavigationProp =
  BottomTabNavigationProp<InAppStackParamList>;
