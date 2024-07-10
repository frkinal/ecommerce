import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';

import type {
  HomeBottomTabParamList,
  CartStackParamList,
  HistoryStackParamList,
} from '@navigators/types';

export type HomeBottomTabParamList = {
  Home: undefined;
  Cart: NavigatorScreenParams<CartStackParamList>;
  Favorite: undefined;
  History: NavigatorScreenParams<HistoryStackParamList>;
};

export type HomeBottomTabNavigationProp =
  BottomTabNavigationProp<HomeBottomTabParamList>;
