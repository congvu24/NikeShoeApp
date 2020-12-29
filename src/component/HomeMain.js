import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions, BackHandler, Animated, PanResponder } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "./TabBar";
import BookMarkTab from "./BookMarkTab";
import HomeTab from "./HomeTab";
import DealTab from "./DealTab";
import HistoryTab from "./HistoryTab";
import { event } from "react-native-reanimated";

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = 80;
const TRANSFORM_X_DRAWER = width * 0.8;

function clamp(value, min, max) {
  return min < max ? (value < min ? min : value > max ? max : value) : value < max ? max : value > min ? min : value;
}

const styles = StyleSheet.create({
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5,
    position: "absolute",
    right: 0,
    top: 0,
  },
  shadowHome: {
    backgroundColor: "white",
    left: "60%",
    width: "100%",
    opacity: 0.5,
    borderRadius: 10,
  },
  wrapHome: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    position: "absolute",
    width: "100%",
    overflow: "hidden",
  },
});

const Tab = createBottomTabNavigator();
const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedTouch = Animated.createAnimatedComponent(TouchableOpacity);

export default class MainHome extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    activeScreen: "HomeTab",
    animation: new Animated.Value(0),
    handAnimation: new Animated.ValueXY(),
    isAnimating: false,
    isOpenDrawer: false,
  };
  handleTab = (screenName) => {
    const { navigation } = this.props;
    navigation.navigate(screenName);
  };

  handleClickDrawer = () => {
    if (this.state.isAnimating == false) {
      this.setState({
        isAnimating: true,
      });
      Animated.timing(this.animation, {
        toValue: this.state.isOpenDrawer == false ? { x: width * 0.8, y: 0 } : 0,
        duration: 400,
        delay: 0,
        useNativeDriver: true,
      }).start(() => {
        this.setState({
          isAnimating: false,
          isOpenDrawer: !this.state.isOpenDrawer,
        });
      });
    }
  };
  animation = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      //bat dau click vao de hanh dong
      this.animation.flattenOffset();
    },
    onPanResponderMove: (e, { dx, dy }) => {
      this.animation.setValue({
        x: TRANSFORM_X_DRAWER + dx,
        y: 0,
        useNativeDriver: true,
      });
    },
    onPanResponderRelease: (e, { dx, dy }) => {
      if (Math.abs(dx) > SWIPE_THRESHOLD && dx < 0) {
        this.setState({
          isAnimating: true,
          isOpenDrawer: false,
        });
        Animated.timing(this.animation, { toValue: { x: 0, y: 0 }, duration: 300, useNativeDriver: true }).start(() => {
          this.setState({ isAnimating: false });
        });
      } else {
        this.setState({
          isAnimating: true,
          isOpenDrawer: true,
        });

        Animated.spring(this.animation, { toValue: { x: TRANSFORM_X_DRAWER, y: 0 }, friction: 5, useNativeDriver: true }).start(() => {
          this.setState({ isAnimating: false });
        });
      }
    },
  });
  render() {
    const homeStyle = {
      borderRadius: this.animation.x.interpolate({
        inputRange: [0, TRANSFORM_X_DRAWER / 2],
        outputRange: [0, 10],
        extrapolate: "clamp",
      }),
      transform: [
        {
          scale: this.animation.x.interpolate({
            inputRange: [0, TRANSFORM_X_DRAWER * 0.8],
            outputRange: [1, 0.9],
            extrapolate: "clamp",
          }),
          // scale: 0.9,
        },
        {
          translateX: this.animation.x,
        },
      ],
    };
    const shadowStyle = {
      transform: [
        {
          scale: this.animation.x.interpolate({
            inputRange: [TRANSFORM_X_DRAWER * 0.8, TRANSFORM_X_DRAWER],
            outputRange: [0.85, 0.8],
            // extrapolate: "clamp",
          }),
        },
        {
          translateX: this.animation.x.interpolate({
            inputRange: [TRANSFORM_X_DRAWER * 0.8, TRANSFORM_X_DRAWER],
            outputRange: [-20, 0],
            // extrapolate: "clamp",
          }),
        },
      ],
    };

    const panHandlers = this.state.isOpenDrawer == true ? this.panResponder.panHandlers : {};
    return (
      <>
        <AnimatedView style={[StyleSheet.absoluteFill, styles.shadowHome, shadowStyle]}></AnimatedView>
        <AnimatedView {...panHandlers} style={[StyleSheet.absoluteFill, styles.wrapHome, homeStyle]}>
          <Tab.Navigator initialRouteName="HomeTab" headerMode="none">
            <Tab.Screen
              name="HomeTab"
              children={() => <HomeTab handleClickDrawer={this.handleClickDrawer} isOpenDrawer={this.state.isOpenDrawer} navigation={this.props.navigation} />}
            />
            <Tab.Screen
              name="HistoryTab"
              children={() => <HistoryTab handleClickDrawer={this.handleClickDrawer} isOpenDrawer={this.state.isOpenDrawer} />}
            />
            <Tab.Screen
              name="BookMarkTab"
              children={() => <BookMarkTab handleClickDrawer={this.handleClickDrawer} isOpenDrawer={this.state.isOpenDrawer} />}
            />
            <Tab.Screen
              name="DealTab"
              children={() => <DealTab handleClickDrawer={this.handleClickDrawer} isOpenDrawer={this.state.isOpenDrawer} />}
            />
          </Tab.Navigator>
          <TabBar handleTab={this.handleTab} pointerEvents={!this.state.isOpenDrawer == true ? "auto" : "none"} />
        </AnimatedView>
      </>
    );
  }
}
