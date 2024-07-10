import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import {DetailsScreen, PaymentScreen, ProfileScreen} from '@screens';
import {InAppStackParamList} from '@navigators/types';
const Stack = createNativeStackNavigator<InAppStackParamList>();
export const InAppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{animation: 'slide_from_bottom'}}
      />
    </Stack.Navigator>
  );
};
