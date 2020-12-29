import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  BackHandler,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import allCategories from "../data/categories";

const { width, height } = Dimensions.get("window");

function DrawerHome({ user, ...props }) {
  const navigation = useNavigation();
  return (
    <View style={[StyleSheet.absoluteFill, styles.wrapDrawer]}>
      <View style={styles.draw}>
        <View style={styles.header}>
          {user ? (
            <>
              <Image
                source={
                  user.photoUrl
                    ? {
                        uri: user.photoUrl,
                      }
                    : require("../images/ads-banner-1.jpg")
                }
                style={styles.avatar}
              />
              <View style={styles.user}>
                {/* <Text style={styles.userName}>{user.name}</Text> */}
                <Text style={styles.userName}>
                  {user.name ? user.name : "USER"}
                </Text>
                <Text style={styles.userEmail}>{user.email}</Text>
              </View>
            </>
          ) : (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.push("Login")}
                style={{
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: "white",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          )}
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
                {allCategories.slice(0, 5).map((item) => (
                  <TouchableOpacity
                    style={styles.sectionItem}
                    key={`category.${item.id}`}
                    onPress={() =>
                      navigation.navigate("CategoryDetail", { item })
                    }
                  >
                    <Text style={styles.sectionItemText}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Image source={require("../images/women.png")} />
                <Text style={styles.categoryName}>Women</Text>
                <TouchableOpacity style={styles.dropdown}>
                  <Image source={require("../images/bottom-arrow.png")} />
                </TouchableOpacity>
              </View>
              <View style={styles.sectionBody}>
                {allCategories.slice(5, 7).map((item) => (
                  <TouchableOpacity
                    style={styles.sectionItem}
                    key={`category.${item.id}`}
                  >
                    <Text style={styles.sectionItemText}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Image source={require("../images/kids.png")} />
                <Text style={styles.categoryName}>Kids</Text>
                <TouchableOpacity style={styles.dropdown}>
                  <Image source={require("../images/bottom-arrow.png")} />
                </TouchableOpacity>
              </View>
              <View style={styles.sectionBody}>
                {allCategories.slice(8, 10).map((item) => (
                  <TouchableOpacity
                    style={styles.sectionItem}
                    key={`category.${item.id}`}
                    onPress={() =>
                      navigation.navigate("CategoryDetail", { item })
                    }
                  >
                    <Text style={styles.sectionItemText}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  user: state.general.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerHome);

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
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
});
