import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from '@navigators/types';
import {Login, Register} from '@screens';
const Stack = createNativeStackNavigator<AuthStackParamList>();
export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{animation: 'slide_from_bottom'}}
      />
    </Stack.Navigator>
  );
};
