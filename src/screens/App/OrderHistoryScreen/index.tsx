import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from 'src/store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS} from 'src/theme/theme';
import {
  Header,
  CoffeeAnimation,
  PopUpAnimation,
  OrderHistoryCard,
} from '@components';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {DetailsNavigationProp} from '@navigators/types';
export const OrderHistoryScreen = () => {
  const navigation = useNavigation<DetailsNavigationProp>();
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  const tabBarHeight = useBottomTabBarHeight();
  const [showAnimation, setShowAnimation] = useState(false);
  const navigationHandler = ({index, id, type}: any) => {
    navigation.push('Details', {
      index,
      id,
      type,
    });
  };
  const buttonPressHandler = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
  };
  return (
    <View style={style.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showAnimation ? (
        <PopUpAnimation
          style={style.LottieAnimation}
          source={require('../../../lottie/download.json')}
        />
      ) : (
        <></>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.ScrollViewFlex}>
        <View style={[style.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={style.ItemContainer}>
            <Header title="Order History" />
            {OrderHistoryList.length == 0 ? (
              <CoffeeAnimation title={'No Order History'} />
            ) : (
              <View style={style.ListItemContainer}>
                {OrderHistoryList.map((data: any, index: any) => (
                  <OrderHistoryCard
                    key={index.toString()}
                    navigationHandler={navigationHandler}
                    CartList={data.CartList}
                    CartListPrice={data.CartListPrice}
                    OrderDate={data.OrderDate}
                  />
                ))}
              </View>
            )}
          </View>
          {OrderHistoryList.length > 0 ? (
            <TouchableOpacity
              style={style.DownloadButton}
              onPress={() => {
                buttonPressHandler();
              }}>
              <Text style={style.ButtonText}>Download</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
