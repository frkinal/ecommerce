import React from 'react';
import {ScrollView, StatusBar, View, TouchableOpacity} from 'react-native';
import {useStore} from 'src/store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS} from 'src/theme/theme';
import {Header, CoffeeAnimation, PaymentFooter, CartItem} from '@components';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@navigators/types';
import {CartItem as CartItemProps} from '@components/types';
export const CartScreen = () => {
  const navigation = useNavigation<StackNavigationProp>();
  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity,
  );
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity,
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const tabBarHeight = useBottomTabBarHeight();
  const buttonPressHandler = () => {
    navigation.push('Payment', {amount: CartPrice});
  };
  const incrementCartItemQuantityHandler = (id: string, size: string) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };
  const decrementCartItemQuantityHandler = (id: string, size: string) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };
  return (
    <View style={style.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.ScrollViewFlex}>
        <View style={[style.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={style.ItemContainer}>
            <Header title="Cart" />
            {CartList.length == 0 ? (
              <CoffeeAnimation title={'Cart is Empty'} />
            ) : (
              <View style={style.ListItemContainer}>
                {CartList.map((data: CartItemProps) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Details', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}
                    key={data.id}>
                    <CartItem
                      id={data.id}
                      index={data.index}
                      name={data.name}
                      imagelink_square={data.imagelink_square}
                      special_ingredient={data.special_ingredient}
                      roasted={data.roasted}
                      prices={data.prices}
                      type={data.type}
                      incrementCartItemQuantityHandler={
                        incrementCartItemQuantityHandler
                      }
                      decrementCartItemQuantityHandler={
                        decrementCartItemQuantityHandler
                      }
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          {CartList.length != 0 ? (
            <PaymentFooter
              buttonPressHandler={buttonPressHandler}
              buttonTitle="Pay"
              price={{price: CartPrice, currency: '₺'}}
            />
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
