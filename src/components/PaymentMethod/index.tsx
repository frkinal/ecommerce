import {Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTSIZE} from 'src/theme/theme';
import {CustomIcon} from '@components';
import style from './style';
import {PaymentMethod as PaymentMethodProps} from '@components/types';
export const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMode,
  name,
  icon,
  isIcon,
}) => {
  return (
    <View
      style={[
        style.PaymentCardContainer,
        {
          borderColor:
            paymentMode == name
              ? COLORS.primaryOrangeHex
              : COLORS.primaryGreyHex,
        },
      ]}>
      {isIcon ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={style.LinearGradientWallet}>
          <View style={style.WalletRow}>
            <CustomIcon
              name={'wallet'}
              color={COLORS.primaryOrangeHex}
              size={FONTSIZE.size_30}
            />
            <Text style={style.PaymentTitle}>{name}</Text>
          </View>
          <Text style={style.PaymentPrice}>₺ 100.50</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={style.LinearGradientRegular}>
          <Image source={icon} style={style.PaymentImage} />
          <Text style={style.PaymentTitle}>{name}</Text>
        </LinearGradient>
      )}
    </View>
  );
};
