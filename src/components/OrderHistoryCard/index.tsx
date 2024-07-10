import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {OrderItemCard} from '@components';
import style from './style';
import {OrderHistoryCard as OrderHistoryCardProps} from '@components/types';
export const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
  navigationHandler,
  CartList,
  CartListPrice,
  OrderDate,
}) => {
  return (
    <View style={style.CardContainer}>
      <View style={style.CardHeader}>
        <View>
          <Text style={style.HeaderTitle}>Order Time</Text>
          <Text style={style.HeaderSubtitle}>{OrderDate}</Text>
        </View>
        <View style={style.PriceContainer}>
          <Text style={style.HeaderTitle}>Total Amount</Text>
          <Text style={style.HeaderPrice}>₺ {CartListPrice}</Text>
        </View>
      </View>
      <View style={style.ListContainer}>
        {CartList.map((data: any, index: any) => (
          <TouchableOpacity
            key={index.toString() + data.id}
            onPress={() => {
              navigationHandler({
                index: data.index,
                id: data.id,
                type: data.type,
              });
            }}>
            <OrderItemCard
              type={data.type}
              name={data.name}
              imagelink_square={data.imagelink_square}
              special_ingredient={data.special_ingredient}
              prices={data.prices}
              ItemPrice={data.ItemPrice}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
