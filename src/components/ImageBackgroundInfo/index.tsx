import React from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import {GradientBGIcon, CustomIcon} from '@components';
import {COLORS, FONTSIZE, SPACING} from 'src/theme/theme';
import style from './style';
import {ImageBackgroundInfo as ImageBackgroundInfoProps} from '@components/types';
export const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  EnableBackHandler,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  BackHandler,
  ToggleFavourite,
}) => {
  return (
    <View>
      <ImageBackground
        source={{uri: imagelink_portrait}}
        style={style.ItemBackgroundImage}>
        {EnableBackHandler ? (
          <View style={style.ImageHeaderBarContainerWithBack}>
            <TouchableOpacity onPress={BackHandler}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, type, id);
              }}>
              <GradientBGIcon
                name="like"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={style.ImageHeaderBarContainerWithoutBack}>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, type, id);
              }}>
              <GradientBGIcon
                name="like"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}
        <View style={style.ImageInfoOuterContainer}>
          <View style={style.ImageInfoInnerContainer}>
            <View style={style.InfoContainerRow}>
              <View>
                <Text style={style.ItemTitleText}>{name}</Text>
                <Text style={style.ItemSubtitleText}>{special_ingredient}</Text>
              </View>
              <View style={style.ItemPropertiesContainer}>
                <View style={style.ProperFirst}>
                  <CustomIcon
                    name={type == 'Bean' ? 'bean' : 'beans'}
                    size={type == 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text
                    style={[
                      style.PropertyTextFirst,
                      {
                        marginTop:
                          type == 'Bean'
                            ? SPACING.space_4 + SPACING.space_2
                            : 0,
                      },
                    ]}>
                    {type}
                  </Text>
                </View>
                <View style={style.ProperFirst}>
                  <CustomIcon
                    name={type == 'Bean' ? 'location' : 'drop'}
                    size={FONTSIZE.size_16}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={style.PropertyTextLast}>{ingredients}</Text>
                </View>
              </View>
            </View>
            <View style={style.InfoContainerRow}>
              <View style={style.RatingContainer}>
                <CustomIcon
                  name={'star'}
                  color={COLORS.primaryOrangeHex}
                  size={FONTSIZE.size_20}
                />
                <Text style={style.RatingText}>{average_rating}</Text>
                <Text style={style.RatingCountText}>({ratings_count})</Text>
              </View>
              <View style={style.RoastedContainer}>
                <Text style={style.RoastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
