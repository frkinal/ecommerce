import React from 'react';
import {View, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import {useStore} from 'src/store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS} from 'src/theme/theme';
import {Header, CoffeeAnimation, FavoritesItemCard} from '@components';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {DetailsNavigationProp} from '@navigators/types';
export const FavoritesScreen = () => {
  const navigation = useNavigation<DetailsNavigationProp>();
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const tabBarHeight = useBottomTabBarHeight();
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };
  return (
    <View style={style.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.ScrollViewFlex}>
        <View style={[style.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={style.ItemContainer}>
            <Header title="Favourites" />
            {FavoritesList.length == 0 ? (
              <CoffeeAnimation title={'No Favourites'} />
            ) : (
              <View style={style.ListItemContainer}>
                {FavoritesList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Details', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}
                    key={data.id}>
                    <FavoritesItemCard
                      id={data.id}
                      imagelink_portrait={data.imagelink_portrait}
                      name={data.name}
                      special_ingredient={data.special_ingredient}
                      type={data.type}
                      ingredients={data.ingredients}
                      average_rating={data.average_rating}
                      ratings_count={data.ratings_count}
                      roasted={data.roasted}
                      description={data.description}
                      favourite={data.favourite}
                      ToggleFavouriteItem={ToggleFavourite}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
