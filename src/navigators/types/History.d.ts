import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export type HistoryStackParamList = {
  History: undefined;
};
export type HistoryNavigationProp =
  NativeStackNavigationProp<HistoryStackParamList>;
export type HistoryRouteProp = RouteProp<HistoryStackParamList, 'History'>;
