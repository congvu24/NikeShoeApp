import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import RNBootSplash from "react-native-bootsplash";
import { Alert, BackHandler, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AnimatedSplash from "react-native-animated-splash-screen";

import Home from "./src/views/Home";
import Detail from "./src/views/Detail";
import Checkout from "./src/views/Checkout";
import AddressManage from "./src/views/AddressManage";
import AddressEdit from "./src/views/AddressEdit";
import PaymentMethod from "./src/views/PaymentMethod";
import AddCard from "./src/views/AddCard";
import CheckoutResult from "./src/views/CheckoutResult";
import Profile from "./src/views/Profile";
import Search from "./src/views/Search";
import Splash from "./src/views/Splash";
import Login from "./src/views/Login";
import CategoryDetail from "./src/views/CategoryDetail";
import Test from "./src/views/Test";

const Stack = createStackNavigator();

export default class Wrap extends React.Component {
  state = {
    isLoaded: false,
  };

  async componentDidMount() {
    await setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 2000);
  }
  render() {
    return (
      <AnimatedSplash
        translucent={true}
        isLoaded={this.state.isLoaded}
        logoImage={require("./src/images/logo.png")}
        backgroundColor={"#2A5CC8"}
        logoHeight={150}
        logoWidth={150}
        // customComponent={() => <Text>Hello</Text>}
      >
        <App />
      </AnimatedSplash>
    );
  }
}

function App() {
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
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        gestureResponseDistance: {
          horizontal: 300,
        },
        cardStyleInterpolator: ({ current, next, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
            overlayStyle: {
              opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
              }),
            },
          };
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      {/* <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Address" component={AddressManage} />
      <Stack.Screen name="AddressEdit" component={AddressEdit} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="CheckoutResult" component={CheckoutResult} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
      <Stack.Screen name="Test" component={Test} /> */}
    </Stack.Navigator>
  );
};
