import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';
import {
  HomeScreen,
  FavoritesScreen,
  CartScreen,
  OrderHistoryScreen,
} from '@screens';
import {CustomIcon} from '@components';
import {HomeBottomTabParamList} from '@navigators/types';
const Tab = createBottomTabNavigator<HomeBottomTabParamList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.BlurViewStyles}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabContainer}>
              <CustomIcon
                name="home"
                size={25}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
              {focused && <Text style={styles.tabText}>Home</Text>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabContainer}>
              <CustomIcon
                name="cart"
                size={25}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
              {focused && <Text style={styles.tabText}>Cart</Text>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabContainer}>
              <CustomIcon
                name="like"
                size={25}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
              {focused && <Text style={styles.tabText}>Favorite</Text>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabContainer}>
              <CustomIcon
                name="bell"
                size={25}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
              {focused && <Text style={styles.tabText}>History</Text>}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  tabContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: COLORS.primaryWhiteHex,
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator;
