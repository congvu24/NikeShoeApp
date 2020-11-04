import React, { Component } from "react";
import { View, SafeAreaView, Dimensions, StyleSheet, Animated, TouchableOpacity, Text } from "react-native";
import Svg, { G, Path } from "react-native-svg";
import { Feather as Icon } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const tabs = [
  { name: "clock", text: "Lịch sử", screenName: "HistoryTab" },
  { name: "search", text: "Tìm kiếm", screenName: "SearchTab" },
  { name: "home", active: true, text: "Trang chủ", screenName: "HomeTab" },
  { name: "bookmark", text: "Bookmark", screenName: "BookMarkTab" },
  { name: "gift", text: "Ưu đãi", screenName: "DealTab" },
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
  };
  render() {
    return (
      <>
        <View style={styles.wrapper} pointerEvents={!this.state.animating ? "auto" : "none"}>
          <AnimatedSvg
            height="50"
            width="100%"
            viewBox={`0 0 ${tabWidth} 30`}
            style={[
              styles.chop,
              {
                width: width,
                transform: [
                  {
                    translateX: this.state.animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [this.state.lastTab * tabWidth, this.state.activeTab * tabWidth],
                    }),
                  },
                ],
              },
            ]}
          >
            <Path fill="white" d="M72.8,21.4C59.1,21.4,52,0.8,36.3,0.8C21.4,0.8,12.5,21.4,0,21.4H72.8z" />
          </AnimatedSvg>
          <View style={styles.list}>
            {this.state.tabs.map((item, index) => (
              <TouchableOpacity
                onPress={() => this.changeTab(item.name, index, this.state.activeTab, item.screenName)}
                style={[styles.tab, item.active ? styles.tabActive : null]}
              >
                <View style={styles.tabContent}>
                  <Icon name={item.name} size={20} style={{ alignSelf: "center" }} />
                  {!item.active && <Text style={styles.tabText}>{item.text}</Text>}
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
    transform: [{ translateY: -10 }],
  },
  tabText: {
    fontSize: 8,
    textAlign: "center",
  },
});
