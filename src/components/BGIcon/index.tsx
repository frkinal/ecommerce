import React from 'react';
import {View} from 'react-native';
import {CustomIcon} from '@components';
import {BGIcon as BGIconProps} from '@components/types';
import style from './style';
export const BGIcon: React.FC<BGIconProps> = ({name, color, size, BGColor}) => {
  return (
    <View style={[style.IconBG, {backgroundColor: BGColor}]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  );
};
