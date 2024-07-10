import {View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {PopUpAnimation as PopUpAnimationProps} from '@components/types';
export const PopUpAnimation: React.FC<PopUpAnimationProps> = ({
  style,
  source,
}) => {
  return (
    <View style={style}>
      <LottieView style={style} source={source} autoPlay loop={false} />
    </View>
  );
};
