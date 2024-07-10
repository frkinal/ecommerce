import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
  FlatList,
} from 'react-native';
import {useStore} from 'src/store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, FONTSIZE} from 'src/theme/theme';
import {Header, CustomIcon, CoffeeCard} from '@components';
import style from './style';
import {
  CoffeeCard as CoffeeCardProps,
  CoffeeCardActionProps,
} from '@components/types';
import {useNavigation} from '@react-navigation/native';
import {DetailsNavigationProp} from '@navigators/types';
const getCategoriesFromData = (data: Array<CoffeeCardProps>) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};
const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
  }
};
export const HomeScreen = () => {
  const navigation = useNavigation<DetailsNavigationProp>();
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const [categories] = useState(getCategoriesFromData(CoffeeList));
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );
  const ListRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();
  const searchCoffee = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({index: 0, category: categories[0]});
      setSortedCoffee([
        ...CoffeeList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };
  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({index: 0, category: categories[0]});
    setSortedCoffee([...CoffeeList]);
    setSearchText('');
  };
  const CoffeCardAddToCart = (item: CoffeeCardActionProps) => {
    const {
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices,
    } = item;
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices,
    });
    calculateCartPrice();
    ToastAndroid.showWithGravity(
      `${name} is Added to Cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  return (
    <View style={style.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.ScrollViewFlex}>
        <Header />
        <Text style={style.ScreenTitle}>Find the best{'\n'}coffee for you</Text>
        <View style={style.InputContainerComponent}>
          <TouchableOpacity
            onPress={() => {
              searchCoffee(searchText);
            }}>
            <CustomIcon
              style={style.InputIcon}
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Coffee..."
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
              searchCoffee(text);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={style.TextInputContainer}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                resetSearchCoffee();
              }}>
              <CustomIcon
                style={style.InputIcon}
                name="close"
                size={FONTSIZE.size_16}
                color={COLORS.primaryLightGreyHex}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={style.CategoryScrollViewStyle}>
          {categories.map((data, index) => (
            <View
              key={index.toString()}
              style={style.CategoryScrollViewContainer}>
              <TouchableOpacity
                style={style.CategoryScrollViewItem}
                onPress={() => {
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                  setCategoryIndex({index: index, category: categories[index]});
                  setSortedCoffee([
                    ...getCoffeeList(categories[index], CoffeeList),
                  ]);
                }}>
                <Text
                  style={[
                    style.CategoryText,
                    categoryIndex.index == index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {data}
                </Text>
                {categoryIndex.index == index ? (
                  <View style={style.ActiveCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <FlatList
          ref={ListRef}
          horizontal
          ListEmptyComponent={
            <View style={style.EmptyListContainer}>
              <Text style={style.CategoryText}>No Coffee Available</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={style.FlatListContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item?.prices[2]}
                  buttonPressHandler={CoffeCardAddToCart}
                />
              </TouchableOpacity>
            );
          }}
        />
        <Text style={style.CoffeeBeansTitle}>Coffee Beans</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BeanList}
          contentContainerStyle={[
            style.FlatListContainer,
            {marginBottom: tabBarHeight},
          ]}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item?.prices[2]}
                  buttonPressHandler={CoffeCardAddToCart}
                />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};
