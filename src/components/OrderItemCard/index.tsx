import {Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTSIZE} from 'src/theme/theme';
import {
  OrderItemCard as OrderItemCardProps,
  PricesProps,
} from '@components/types';
import style from './style';
export const OrderItemCard: React.FC<OrderItemCardProps> = ({
  type,
  name,
  imagelink_square,
  special_ingredient,
  prices,
  ItemPrice,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={style.CardLinearGradient}>
      <View style={style.CardInfoContainer}>
        <View style={style.CardImageInfoContainer}>
          <Image source={{uri: imagelink_square}} style={style.Image} />
          <View>
            <Text style={style.CardTitle}>{name}</Text>
            <Text style={style.CardSubtitle}>{special_ingredient}</Text>
          </View>
        </View>
        <View>
          <Text style={style.CardCurrency}>
            ₺<Text style={style.CardPrice}>{ItemPrice}</Text>
          </Text>
        </View>
      </View>
      {prices.map((data: PricesProps, index: any) => (
        <View key={index.toString()} style={style.CardTableRow}>
          <View style={style.CardTableRow}>
            <View style={style.SizeBoxLeft}>
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
            <View style={style.PriceBoxRight}>
              <Text style={style.PriceCurrency}>
                {data.currency}
                <Text style={style.Price}> {data.price}</Text>
              </Text>
            </View>
          </View>

          <View style={style.CardTableRow}>
            <Text style={style.CardQuantityPriceText}>
              X <Text style={style.Price}>{data.quantity}</Text>
            </Text>
            <Text style={style.CardQuantityPriceText}>
              ₺{(data.quantity * data.price).toFixed(2).toString()}
            </Text>
          </View>
        </View>
      ))}
    </LinearGradient>
  );
};
