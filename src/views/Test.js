import React from "react";
import { Image, View, TextInput, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from "react-native";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../component/BackButton";
import { useRoute } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import allProduct from "../data/products";

const { width, height } = Dimensions.get("window");

export default function Test({ route }) {
  // const route = useRoute();
  const { item } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <SharedElement id={`item.${item.name}.picture`} style={[StyleSheet.absoluteFillObject]}>
        <Image source={item.picture} style={[{ width: 100, height: 100, opacity: 0.8 }]} resizeMode="cover" />
      </SharedElement>
    </View>
  );
}

// Test.sharedElements = (route, otherRoute, showing) => {
//   const { item } = route.params;
//   return [
//     {
//       id: `item.${item.name}.picture`,
//     },
//     {
//       id: `item.${item.name}.text`,
//     },
//   ];
// };
