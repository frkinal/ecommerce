import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTSIZE} from 'src/theme/theme';
import {CustomIcon} from '@components';
import {CartItem as CartItemProps} from '@components/types';
import style from './style';
export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  imagelink_square,
  special_ingredient,
  roasted,
  prices,
  type,
  incrementCartItemQuantityHandler,
  decrementCartItemQuantityHandler,
}) => {
  return (
    <View>
      {prices.length != 1 ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={style.CartItemLinearGradient}>
          <View style={style.CartItemRow}>
            <Image
              source={{uri: imagelink_square}}
              style={style.CartItemImage}
            />
            <View style={style.CartItemInfo}>
              <View>
                <Text style={style.CartItemTitle}>{name}</Text>
                <Text style={style.CartItemSubtitle}>{special_ingredient}</Text>
              </View>
              <View style={style.CartItemRoastedContainer}>
                <Text style={style.CartItemRoastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
          {prices.map((data: any, index: any) => (
            <View key={index.toString()} style={style.CartItemSizeRowContainer}>
              <View style={style.CartItemSizeValueContainer}>
                <View style={style.SizeBox}>
                  <Text
                    style={[
                      style.SizeText,
                      {
                        fontSize:
                          type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                      },
                    ]}>
                    {data.size}
                  </Text>
                </View>
                <Text style={style.SizeCurrency}>
                  {data.currency}
                  <Text style={style.SizePrice}> {data.price}</Text>
                </Text>
              </View>
              <View style={style.CartItemSizeValueContainer}>
                <TouchableOpacity
                  style={style.CartItemIcon}
                  onPress={() => {
                    decrementCartItemQuantityHandler(id, data.size);
                  }}>
                  <CustomIcon
                    name="minus"
                    color={COLORS.primaryWhiteHex}
                    size={FONTSIZE.size_10}
                  />
                </TouchableOpacity>
                <View style={style.CartItemQuantityContainer}>
                  <Text style={style.CartItemQuantityText}>
                    {data.quantity}
                  </Text>
                </View>
                <TouchableOpacity
                  style={style.CartItemIcon}
                  onPress={() => {
                    incrementCartItemQuantityHandler(id, data.size);
                  }}>
                  <CustomIcon
                    name="add"
                    color={COLORS.primaryWhiteHex}
                    size={FONTSIZE.size_10}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={style.CartItemSingleLinearGradient}>
          <View>
            <Image
              source={{uri: imagelink_square}}
              style={style.CartItemSingleImage}
            />
          </View>
          <View style={style.CartItemSingleInfoContainer}>
            <View>
              <Text style={style.CartItemTitle}>{name}</Text>
              <Text style={style.CartItemSubtitle}>{special_ingredient}</Text>
            </View>
            <View style={style.CartItemSingleSizeValueContainer}>
              <View style={style.SizeBox}>
                <Text
                  style={[
                    style.SizeText,
                    {
                      fontSize:
                        type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                    },
                  ]}>
                  {prices[0].size}
                </Text>
              </View>
              <Text style={style.SizeCurrency}>
                {prices[0].currency}
                <Text style={style.SizePrice}> {prices[0].price}</Text>
              </Text>
            </View>
            <View style={style.CartItemSingleQuantityContainer}>
              <TouchableOpacity
                style={style.CartItemIcon}
                onPress={() => {
                  decrementCartItemQuantityHandler(id, prices[0].size);
                }}>
                <CustomIcon
                  name="minus"
                  color={COLORS.primaryWhiteHex}
                  size={FONTSIZE.size_10}
                />
              </TouchableOpacity>
              <View style={style.CartItemQuantityContainer}>
                <Text style={style.CartItemQuantityText}>
                  {prices[0].quantity}
                </Text>
              </View>
              <TouchableOpacity
                style={style.CartItemIcon}
                onPress={() => {
                  incrementCartItemQuantityHandler(id, prices[0].size);
                }}>
                <CustomIcon
                  name="add"
                  color={COLORS.primaryWhiteHex}
                  size={FONTSIZE.size_10}
                />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};
