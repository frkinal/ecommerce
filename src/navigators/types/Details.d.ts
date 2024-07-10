import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type DetailsStackParamList = {
  Details: {index: number; id: number; type: string};
};

export type DetailsNavigationProp =
  NativeStackNavigationProp<DetailsStackParamList>;

export type DetailsRouteProp = RouteProp<DetailsStackParamList, 'Details'>;
