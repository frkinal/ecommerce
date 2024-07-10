import React from 'react';
import {View, Text} from 'react-native';
import {Header as HeaderProps} from '@components/types';
import {ProfilePic} from '@components';
import style from './style';
export const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={style.HeaderContainer}>
      <View style={style.Empty} />
      <Text style={style.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};
