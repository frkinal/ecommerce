import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from '@navigators/types';
import {AuthStack} from './AuthStack';
import {InAppStack} from './InAppStack';
const Stack = createNativeStackNavigator<AppStackParamList>();
export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="App"
        component={InAppStack}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{animation: 'slide_from_bottom'}}
      />
    </Stack.Navigator>
  );
};
