import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {COLORS, FONTSIZE} from 'src/theme/theme';
import {
  GradientBGIcon,
  PaymentFooter,
  CustomIcon,
  PopUpAnimation,
} from '@components';
import LinearGradient from 'react-native-linear-gradient';
import {useStore} from 'src/store/store';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {HistoryNavigationProp, PaymentRouteProp} from '@navigators/types';
import {NativeModules} from 'react-native';
const {PaymentModule} = NativeModules;
PaymentModule.init();
export const PaymentScreen = () => {
  const navigation = useNavigation<HistoryNavigationProp>();
  const route = useRoute<PaymentRouteProp>();
  const {amount} = route.params;
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToOrderHistoryListFromCart = useStore(
    (state: any) => state.addToOrderHistoryListFromCart,
  );
  const [paymentMode, setPaymentMode] = useState('Credit Card');
  const [showAnimation, setShowAnimation] = useState(false);
  const buttonPressHandler = () => {
    PaymentModule.startPayment(
      '3879892367454638',
      '0230',
      '123',
      100.5,
      (result: any) => {
        if (result === null) {
          PaymentModule.confirmPayment('123456', (confirmResult: any) => {
            if (confirmResult === null) {
              setShowAnimation(true);
              addToOrderHistoryListFromCart();
              calculateCartPrice();
              setTimeout(() => {
                setShowAnimation(false);
                navigation.navigate('History');
              }, 2000);
            } else {
              Alert.alert('Error1', 'Error');
            }
          });
        } else {
          Alert.alert('Error2', 'Error');
        }
      },
    );
  };
  return (
    <View style={style.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showAnimation ? (
        <PopUpAnimation
          style={style.LottieAnimation}
          source={require('../../../lottie/successful.json')}
        />
      ) : (
        <></>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.ScrollViewFlex}>
        <View style={style.HeaderContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <GradientBGIcon
              name="left"
              color={COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>
          <Text style={style.HeaderText}>Payments</Text>
          <View style={style.EmptyView} />
        </View>
        <View style={style.PaymentOptionsContainer}>
          <TouchableOpacity
            onPress={() => {
              setPaymentMode('Credit Card');
            }}>
            <View
              style={[
                style.CreditCardContainer,
                {
                  borderColor:
                    paymentMode == 'Credit Card'
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryGreyHex,
                },
              ]}>
              <Text style={style.CreditCardTitle}>Credit Card</Text>
              <View style={style.CreditCardBG}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={style.LinearGradientStyle}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
                  <View style={style.CreditCardRow}>
                    <CustomIcon
                      name="chip"
                      size={FONTSIZE.size_20 * 2}
                      color={COLORS.primaryOrangeHex}
                    />
                    <CustomIcon
                      name="visa"
                      size={FONTSIZE.size_30 * 2}
                      color={COLORS.primaryWhiteHex}
                    />
                  </View>
                  <View style={style.CreditCardNumberContainer}>
                    <Text style={style.CreditCardNumber}>3879</Text>
                    <Text style={style.CreditCardNumber}>8923</Text>
                    <Text style={style.CreditCardNumber}>6745</Text>
                    <Text style={style.CreditCardNumber}>4638</Text>
                  </View>
                  <View style={style.CreditCardRow}>
                    <View style={style.CreditCardNameContainer}>
                      <Text style={style.CreditCardNameSubitle}>
                        Card Holder Name
                      </Text>
                      <Text style={style.CreditCardNameTitle}>
                        Robert Evans
                      </Text>
                    </View>
                    <View style={style.CreditCardDateContainer}>
                      <Text style={style.CreditCardNameSubitle}>
                        Expiry Date
                      </Text>
                      <Text style={style.CreditCardNameTitle}>02/30</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </TouchableOpacity>
          {/* {PaymentList.map((data: any) => (
            <TouchableOpacity
              key={data.name}
              onPress={() => {
                setPaymentMode(data.name);
              }}>
              <PaymentMethod
                paymentMode={paymentMode}
                name={data.name}
                icon={data.icon}
                isIcon={data.isIcon}
              />
            </TouchableOpacity>
          ))} */}
        </View>
      </ScrollView>
      <PaymentFooter
        buttonTitle={`Pay with ${paymentMode}`}
        price={{price: amount, currency: '₺'}}
        buttonPressHandler={buttonPressHandler}
      />
    </View>
  );
};
