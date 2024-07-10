import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from 'src/theme/theme';
import {GradientBGIcon as GradientBGIconProps} from '@components/types';
import style from './style';
import {CustomIcon} from '@components';
export const GradientBGIcon: React.FC<GradientBGIconProps> = ({
  name,
  color,
  size,
}) => {
  return (
    <View style={style.Container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={style.LinearGradientBG}>
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
};
