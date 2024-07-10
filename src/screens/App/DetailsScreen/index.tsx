import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useStore} from 'src/store/store';
import {COLORS, FONTSIZE} from 'src/theme/theme';
import {ImageBackgroundInfo, PaymentFooter} from '@components';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CartNavigationProp, DetailsRouteProp} from '@navigators/types';
import {CoffeeCardActionProps} from '@components/types';
export const DetailsScreen = () => {
  const route = useRoute<DetailsRouteProp>();
  const navigation = useNavigation<CartNavigationProp>();
  const ItemOfIndex = useStore((state: any) =>
    route?.params?.type == 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route?.params?.index];
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const [price, setPrice] = useState(ItemOfIndex?.prices[0]);
  const [fullDesc, setFullDesc] = useState(false);
  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };
  const BackHandler = () => {
    navigation.pop();
  };
  const addToCarthandler = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    price,
  }: CoffeeCardActionProps) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{...price, quantity: 1}],
    });
    calculateCartPrice();
    navigation.navigate('Cart');
  };
  return (
    <View style={style.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.ScrollViewFlex}>
        <ImageBackgroundInfo
          EnableBackHandler={true}
          imagelink_portrait={ItemOfIndex?.imagelink_portrait}
          type={ItemOfIndex?.type}
          id={ItemOfIndex?.id}
          favourite={ItemOfIndex?.favourite}
          name={ItemOfIndex?.name}
          special_ingredient={ItemOfIndex?.special_ingredient}
          ingredients={ItemOfIndex?.ingredients}
          average_rating={ItemOfIndex?.average_rating}
          ratings_count={ItemOfIndex?.ratings_count}
          roasted={ItemOfIndex?.roasted}
          BackHandler={BackHandler}
          ToggleFavourite={ToggleFavourite}
        />

        <View style={style.FooterInfoArea}>
          <Text style={style.InfoTitle}>Description</Text>
          {fullDesc ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(prev => !prev);
              }}>
              <Text style={style.DescriptionText}>
                {ItemOfIndex?.description}
              </Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(prev => !prev);
              }}>
              <Text numberOfLines={3} style={style.DescriptionText}>
                {ItemOfIndex?.description}
              </Text>
            </TouchableWithoutFeedback>
          )}
          <Text style={style.InfoTitle}>Size</Text>
          <View style={style.SizeOuterContainer}>
            {ItemOfIndex?.prices.map((data: any) => (
              <TouchableOpacity
                key={data.size}
                onPress={() => {
                  setPrice(data);
                }}
                style={[
                  style.SizeBox,
                  {
                    borderColor:
                      data.size == price?.size
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryDarkGreyHex,
                  },
                ]}>
                <Text
                  style={[
                    style.SizeText,
                    {
                      fontSize:
                        ItemOfIndex?.type == 'Bean'
                          ? FONTSIZE.size_14
                          : FONTSIZE.size_16,
                      color:
                        data.size == price?.size
                          ? COLORS.primaryOrangeHex
                          : COLORS.secondaryLightGreyHex,
                    },
                  ]}>
                  {data.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <PaymentFooter
          price={price}
          buttonTitle="Add to Cart"
          buttonPressHandler={() => {
            addToCarthandler({
              id: ItemOfIndex?.id,
              index: ItemOfIndex?.index,
              name: ItemOfIndex?.name,
              roasted: ItemOfIndex?.roasted,
              imagelink_square: ItemOfIndex?.imagelink_square,
              special_ingredient: ItemOfIndex?.special_ingredient,
              type: ItemOfIndex?.type,
              prices: price,
            });
          }}
        />
      </ScrollView>
    </View>
  );
};
