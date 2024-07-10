import React from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import {GradientBGIcon} from '@components';
import {COLORS, FONTSIZE} from 'src/theme/theme';
import {useNavigation} from '@react-navigation/native';
import {AppStackNavigationProp} from '@navigators/types';
import style from './style';
export const ProfileScreen = () => {
  const navigation = useNavigation<AppStackNavigationProp>();
  const BackHandler = () => navigation.goBack();
  return (
    <View style={style.ScreenContainer}>
      <ImageBackground
        source={require('../../../assets/app_images/avatar.png')}
        style={style.BackgroundImage}>
        <View style={style.ImageContainer}>
          <TouchableOpacity onPress={BackHandler}>
            <GradientBGIcon
              name="left"
              color={COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>
        </View>
        <View style={style.InfoContainer}>
          <View style={style.InfoInnerContainer}>
            <View style={style.InfoContainerRow}>
              <View>
                <Text style={style.TitleText}>Omer Faruk Inal</Text>
                <Text style={style.SubtitleText}>Istanbul / Kadikoy</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={style.AccountInfoArea}>
        <View style={style.AccountInfoItem}>
          <Text style={style.TitleText}>Mail</Text>
          <Text style={style.SubtitleText}>inalfaruk295@gmail.com</Text>
        </View>
        <View style={style.AccountInfoItem}>
          <Text style={style.TitleText}>Phone Number</Text>
          <Text style={style.SubtitleText}>+90 553 173 4972</Text>
        </View>
      </View>
    </View>
  );
};
