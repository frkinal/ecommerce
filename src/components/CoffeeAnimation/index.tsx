import {Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import style from './style';
import {CoffeeAnimation as CoffeeAnimationProps} from '@components/types';
export const CoffeeAnimation: React.FC<CoffeeAnimationProps> = ({title}) => {
  return (
    <View style={style.EmptyCartContainer}>
      <LottieView
        style={style.LottieStyle}
        source={require('../../lottie/coffeecup.json')}
        autoPlay
        loop
      />
      <Text style={style.LottieText}>{title}</Text>
    </View>
  );
};
