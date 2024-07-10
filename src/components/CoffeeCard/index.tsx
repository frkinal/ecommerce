import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTSIZE} from 'src/theme/theme';
import {CustomIcon, BGIcon} from '@components';
import {CoffeeCard as CoffeeCardProps} from '@components/types';
import style from './style';
export const CoffeeCard: React.FC<CoffeeCardProps> = ({
  id,
  index,
  type,
  roasted,
  imagelink_square,
  name,
  special_ingredient,
  average_rating,
  price,
  buttonPressHandler,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={style.CardLinearGradientContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={{uri: imagelink_square}}
        style={style.CardImageBG}
        resizeMode="cover">
        <View style={style.CardRatingContainer}>
          <CustomIcon
            name={'star'}
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_16}
          />
          <Text style={style.CardRatingText}>{average_rating}</Text>
        </View>
      </ImageBackground>
      <Text style={style.CardTitle}>{name}</Text>
      <Text style={style.CardSubtitle}>{special_ingredient}</Text>
      <View style={style.CardFooterRow}>
        <Text style={style.CardPriceCurrency}>
          ₺<Text style={style.CardPrice}>{price.price}</Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            buttonPressHandler({
              id,
              index,
              type,
              roasted,
              imagelink_square,
              name,
              special_ingredient,
              prices: [{...price, quantity: 1}],
            });
          }}>
          <BGIcon
            color={COLORS.primaryWhiteHex}
            name={'add'}
            BGColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_10}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
