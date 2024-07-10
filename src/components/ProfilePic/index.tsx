import React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {AppStackNavigationProp} from '@navigators/types';
export const ProfilePic = () => {
  const navigation = useNavigation<AppStackNavigationProp>();
  const navigateProfile = () => navigation.navigate('Profile');
  return (
    <TouchableWithoutFeedback onPress={navigateProfile}>
      <View style={style.ImageContainer}>
        <Image
          source={require('../../assets/app_images/avatar.png')}
          style={style.Image}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
