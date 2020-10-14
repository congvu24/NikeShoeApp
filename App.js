import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Alert, BackHandler, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/views/Home";
import Detail from "./src/views/Detail";
import Checkout from "./src/views/Checkout";
import AddressManage from "./src/views/AddressManage";
import AddressEdit from "./src/views/AddressEdit";
import PaymentMethod from "./src/views/PaymentMethod";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </>
  );
}

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Checkout" headerMode="none">
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Address" component={AddressManage} />
      <Stack.Screen name="AddressEdit" component={AddressEdit} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
