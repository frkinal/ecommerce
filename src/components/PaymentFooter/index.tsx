import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {PaymentFooter as PaymentFooterProps} from '@components/types';
export const PaymentFooter: React.FC<PaymentFooterProps> = ({
  price,
  buttonPressHandler,
  buttonTitle,
}) => {
  return (
    <View style={style.PriceFooter}>
      <View style={style.PriceContainer}>
        <Text style={style.PriceTitle}>Price</Text>
        <Text style={style.PriceText}>
          {price?.currency} <Text style={style.Price}>{price?.price}</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={style.PayButton}
        onPress={() => buttonPressHandler()}>
        <Text style={style.ButtonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};
