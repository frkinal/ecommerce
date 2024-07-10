import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {AppStackParamList} from '@navigators/types';
import {useStore} from 'src/store/store';
import {AuthStack, InAppStack} from '@navigators';
import firestore from '@react-native-firebase/firestore';

const Stack = createNativeStackNavigator<AppStackParamList>();
const App = () => {
  const isLoggedIn = useStore((state: any) => state.isLoggedIn);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const getCoffeeList = useStore((state: any) => state.getCoffeeList);
  const getBeanList = useStore((state: any) => state.getBeanList);
  useEffect(() => {
    firestore()
      .collection('coffeeList')
      .onSnapshot(querysnapshot => {
        const datas = [];
        querysnapshot?.forEach(documentsnapshot => {
          datas.push({
            ...documentsnapshot.data(),
          });
        });
        getCoffeeList(datas);
      });
    firestore()
      .collection('beanList')
      .onSnapshot(querysnapshot => {
        const datas = [];
        querysnapshot?.forEach(documentsnapshot => {
          datas.push({
            ...documentsnapshot.data(),
          });
        });
        getBeanList(datas);
      });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Screen
            name="App"
            component={InAppStack}
            options={{animation: 'slide_from_bottom'}}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{animation: 'slide_from_bottom'}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
