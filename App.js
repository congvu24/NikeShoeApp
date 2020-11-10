import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
// import AnimatedSplash from "react-native-animated-splash-screen";

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
import Loading from "./src/component/Loading";
import CategoryDetail from "./src/views/CategoryDetail";
import CollectionDetail from "./src/views/CollectionDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { useScreens as enableScreens } from "react-native-screens";
import BigProductDetail from "./src/views/BigProductDetail";
import Test from "./src/views/Test";
import { Easing, View, Text } from "react-native";
import allCategories from "./src/data/categories";
import { checkLogined } from "./src/utils/utils";
import AnimatedSplash from "react-native-animated-splash-screen";
import { connect, Provider } from "react-redux";
import store from "./src/redux/setup";
import { changeCount } from "./src/redux/action";

enableScreens();
const Stack = createSharedElementStackNavigator();
// const store = config();

export default class Wrap extends React.Component {
  state = {
    isLoaded: false,
  };

  async componentDidMount() {
    // console.log(this.props.TEST);
    // const isLogined = await checkLogined();
    await setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 0);
  }
  render() {
    return (
      <Provider store={store}>
        <AnimatedSplash
          translucent={true}
          isLoaded={this.state.isLoaded}
          logoImage={require("./src/images/logo.png")}
          backgroundColor={"#2A5CC8"}
          logoHeight={150}
          logoWidth={150}
        >
          <App2 />
        </AnimatedSplash>
      </Provider>
    );
  }
}

function mapDispatchToProps() {
  return {
    changeCount,
  };
}

const mapStateToProps = (state) => {
  return state;
};

const App2 = connect(mapStateToProps, mapDispatchToProps)(App);

function App(props) {
  console.log(props);
  return (
    <>
      <StatusBar hidden />
      {/* <Text>hello</Text> */}
      <NavigationContainer>
        <Loading visible={false} text="Logging in..." />

        <Navigator />
      </NavigationContainer>
    </>
  );
}

const option = () => ({
  gestureEnabled: false,
  transitionSpec: {
    open: {
      animation: "timing",
      config: { duration: 700, easing: Easing.inOut(Easing.sin) },
    },
    close: {
      animation: "timing",
      config: { duration: 500, easing: Easing.inOut(Easing.ease) },
    },
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        opacity: current.progress,
      },
    };
  },
});

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName="Home"
      // headerMode="none"
      // screenOptions={{
      //   gestureEnabled: true,
      //   gestureDirection: "horizontal",
      //   gestureResponseDistance: {
      //     horizontal: 300,
      //   },
      //   cardStyleInterpolator: ({ current, next, layouts }) => {
      //     return {
      //       // cardStyle: {
      //       //   transform: [
      //       //     {
      //       //       translateX: current.progress.interpolate({
      //       //         inputRange: [0, 1],
      //       //         outputRange: [layouts.screen.width, 0],
      //       //       }),
      //       //     },
      //       //   ],
      //       //   // opacity: current.progress,
      //       // },
      //       cardStyle: {
      //         opacity: current.progress,
      //       },
      //       // overlayStyle: {
      //       //   opacity: current.progress.interpolate({
      //       //     inputRange: [0, 1],
      //       //     outputRange: [0, 0.5],
      //       //   }),
      //       // },
      //     };
      //   },
      // }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        // options={option}
      />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Address" component={AddressManage} />
      <Stack.Screen name="AddressEdit" component={AddressEdit} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="CheckoutResult" component={CheckoutResult} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="CategoryDetail"
        component={CategoryDetail}
        options={option}
        sharedElementsConfig={(route) => {
          return allCategories.map((item) => ({ id: `type.${item.id}.name`, animation: "fade", align: "center-center" }));
        }}
      />
      <Stack.Screen
        name="CollectionDetail"
        component={CollectionDetail}
        // options={option}
        sharedElementsConfig={(route) => {
          const { collection } = route.params;
          return [
            {
              id: `collection.${collection.name}.picture`,
              resize: "clip",
              align: "center-top",
            },
            {
              id: `collection.${collection.name}.text`,
            },
          ];
        }}
      />
      <Stack.Screen
        name="BigProductDetail"
        component={BigProductDetail}
        options={option}
        sharedElementsConfig={(route) => {
          const { item } = route.params;
          return [
            {
              id: `item.${item.name}.bg`,
              resize: "clip",
              align: "center-top",
            },
            {
              id: `item.${item.name}.name`,
              resize: "clip",
              align: "center-top",
            },
            {
              id: `item.${item.name}.price`,
              resize: "clip",
              align: "center-top",
            },
            {
              id: `item.${item.name}.picture`,
              resize: "clip",
              align: "center-top",
            },
          ];
        }}
      />
    </Stack.Navigator>
  );
};
