import React from "react";
import { Animated, FlatList, View, Text } from "react-native";
import BackButton from "../component/BackButton";

import { Cards } from "../component/Cards";
import WalletCard from "../component/WalletCard";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const cards = [1, 2, 3, 4, 5, 6];

const Wallet = () => {
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });
  return (
    <>
      <View>
        <Text style={{ padding: 10, textAlign: "center", fontSize: 16, fontWeight: "700", color: "#5780D9" }}>Chọn phương thức thanh toán</Text>
      </View>

      <AnimatedFlatList
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={cards}
        renderItem={({ index }) => <WalletCard {...{ index, y }} type={index} />}
        keyExtractor={(item) => item.index}
        {...{ onScroll }}
      />
    </>
  );
};

export default Wallet;
