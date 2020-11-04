import React, { useEffect } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, BackHandler } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import StickyParallaxHeader from "react-native-sticky-parallax-header";

const { width, height } = Dimensions.get("window");

export default function DrawerHome() {
  return (
    <View style={[StyleSheet.absoluteFill, styles.wrapDrawer]}>
      <View style={styles.draw}>
        <View style={styles.header}>
          <Image source={require("../images/avatar.png")} style={styles.avatar} />
          <View style={styles.user}>
            <Text style={styles.userName}>Elayanmi</Text>
            <Text style={styles.userEmail}>@congvu24</Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View styles={styles.body}>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Image source={require("../images/men.png")} />
                <Text style={styles.categoryName}>Men</Text>
                <TouchableOpacity style={styles.dropdown}>
                  <Image source={require("../images/bottom-arrow.png")} />
                </TouchableOpacity>
              </View>
              <View style={styles.sectionBody}>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View styles={styles.body}>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Image source={require("../images/men.png")} />
                <Text style={styles.categoryName}>Men</Text>
                <TouchableOpacity style={styles.dropdown}>
                  <Image source={require("../images/bottom-arrow.png")} />
                </TouchableOpacity>
              </View>
              <View style={styles.sectionBody}>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View styles={styles.body}>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Image source={require("../images/men.png")} />
                <Text style={styles.categoryName}>Men</Text>
                <TouchableOpacity style={styles.dropdown}>
                  <Image source={require("../images/bottom-arrow.png")} />
                </TouchableOpacity>
              </View>
              <View style={styles.sectionBody}>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                  <Text style={styles.sectionItemText}>Casual shoes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapDrawer: {
    backgroundColor: "#2A5CC8",
    flex: 1,
    padding: 20,
  },
  draw: {
    width: "70%",
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
  },
  user: {
    marginLeft: 10,
  },
  userName: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
  userEmail: {
    color: "#FFFFFF99",
    fontWeight: "500",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  dropdown: {
    marginLeft: "auto",
  },
  categoryName: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  sectionItem: {
    marginLeft: 20,
    marginVertical: 5,
  },
  sectionItemText: {
    color: "#81A0E2",
    fontSize: 16,
  },
  section: {
    borderTopWidth: 1,
    borderTopColor: "#FFFFFF17",
    paddingTop: 30,
    marginBottom: 30,
  },
});
