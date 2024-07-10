import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';

import type {AuthStackParamList, InAppStackParamList} from '@navigators/types';

export type AppStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  App: NavigatorScreenParams<InAppStackParamList>;
};

export type AppStackNavigationProp = BottomTabNavigationProp<AppStackParamList>;
