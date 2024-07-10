import {Text, View} from 'react-native';
import React from 'react';
import {ImageBackgroundInfo} from '@components';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from 'src/theme/theme';
import {FavoritesItemCard as FavoritesItemCardProps} from '@components/types';
import style from './style';
export const FavoritesItemCard: React.FC<FavoritesItemCardProps> = ({
  id,
  imagelink_portrait,
  name,
  special_ingredient,
  type,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  description,
  favourite,
  ToggleFavouriteItem,
}) => {
  return (
    <View style={style.CardContainer}>
      <ImageBackgroundInfo
        EnableBackHandler={false}
        imagelink_portrait={imagelink_portrait}
        type={type}
        id={id}
        favourite={favourite}
        name={name}
        special_ingredient={special_ingredient}
        ingredients={ingredients}
        average_rating={average_rating}
        ratings_count={ratings_count}
        roasted={roasted}
        ToggleFavourite={ToggleFavouriteItem}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={style.ContainerLinearGradient}>
        <Text style={style.DescriptionTitle}>Description</Text>
        <Text style={style.DescriptionText}>{description}</Text>
      </LinearGradient>
    </View>
  );
};
