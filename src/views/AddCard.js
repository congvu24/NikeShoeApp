import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Animated, FlatList, View, Text } from "react-native";
import { connect } from "react-redux";
import WalletCard from "../component/WalletCard";
import { setCard } from "../redux/index";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const cards = [1, 2, 3, 4, 5, 6];

const Wallet = ({ ...props }) => {
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });
  const navigation = useNavigation();

  function handleSetCard(num) {
    props.setCard(num);
    navigation.navigate("PaymentMethod");
  }
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
        renderItem={({ index }) => <WalletCard handleSetCard={handleSetCard} {...{ index, y }} type={index} />}
        keyExtractor={(item) => item.index}
        {...{ onScroll }}
      />
    </>
  );
};

const mapDispatchToProps = {
  setCard,
};

export default connect(null, mapDispatchToProps)(Wallet);
