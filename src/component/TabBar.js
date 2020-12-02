import React, { Component } from "react";
import { View, SafeAreaView, Dimensions, StyleSheet, Animated, TouchableOpacity, Text } from "react-native";
import Svg, { G, Path } from "react-native-svg";
import { Feather as Icon } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const tabs = [
  { name: "clock", text: "History", screenName: "HistoryTab" },
  { name: "search", text: "Search", screenName: "Search" },
  { name: "home", active: true, text: "Home", screenName: "HomeTab" },
  { name: "bookmark", text: "Bookmark", screenName: "BookMarkTab" },
  { name: "gift", text: "Coupon", screenName: "DealTab" },
];
const tabWidth = width / tabs.length;

export default class TabBar extends Component {
  state = {
    tabs: tabs,
    activeTab: 0,
    lastTab: 0,
    animating: false,
    animation: new Animated.Value(0),
  };
  changeTab = (name, num, lastTab, screenName) => {
    if (screenName != "Search") {
      this.props.handleTab(screenName);
      const newTabs = this.state.tabs.map((item) => {
        if (item.name == name) {
          return {
            ...item,
            active: true,
          };
        } else
          return {
            ...item,
            active: false,
          };
      });
      this.setState(
        {
          tabs: newTabs,
          activeTab: num - 2,
          lastTab,
          animating: true,
        },
        () => {
          this.state.animation.setValue(0);
          Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            this.setState({
              animating: false,
            });
          });
        }
      );
    } else this.props.handleTab(screenName);
  };
  render() {
    return (
      <>
        <View style={styles.wrapper} pointerEvents={!this.state.animating ? "auto" : "none"}>
          <View style={styles.list}>
            {this.state.tabs.map((item, index) => (
              <TouchableOpacity
                key={`item-${index}`}
                onPress={() => this.changeTab(item.name, index, this.state.activeTab, item.screenName)}
                style={[styles.tab]}
              >
                <View style={styles.tabContent}>
                  <Icon name={item.name} size={20} style={[{ alignSelf: "center" }, styles.tabIcon, item.active ? styles.tabIconActive : {}]} />
                  <Text style={[styles.tabText, item.active ? styles.tabTextActive : {}]}>{item.text}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    height: 60,
    position: "absolute",
    justifyContent: "center",
    bottom: 0,
    elevation: 5,
  },
  chop: {
    position: "absolute",
    bottom: "50%",
  },
  list: {
    flexDirection: "row",
  },
  tab: {
    width: width / tabs.length - 20,
    marginHorizontal: 10,
    justifyContent: "center",
    alignContent: "center",
    height: width / tabs.length - 20,
    borderRadius: 50,
  },
  tabContent: {
    justifyContent: "center",
    alignContent: "center",
  },
  tabActive: {
    backgroundColor: "blue",
    // transform: [{ translateY: -10 }],
  },
  tabText: {
    fontSize: 8,
    textAlign: "center",
    color: "black",
  },
  tabTextActive: {
    color: "#5780D9",
    fontWeight: "700",
  },
  tabIconActive: {
    color: "#5780D9",
    fontWeight: "700",
  },
  tabIcon: {
    color: "black",
  },
});
