import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

export default function Profile() {
  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backArrow}>
          <Image source={require("../images/back.png")} />
        </TouchableOpacity>

        <View style={styles.headerUser}>
          <View style={styles.user}>
            <Image source={require("../images/avatar.png")} style={styles.userAvatar} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Elaynami</Text>
              <Text style={styles.userId}>@id0082i</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editText}>edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../images/order.png")} />
          <Text style={styles.buttonText}>My orders</Text>
          <Image source={require("../images/right-arrow.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../images/card.png")} />
          <Text style={styles.buttonText}>Card & Wallet</Text>
          <Image source={require("../images/right-arrow.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../images/address.png")} />
          <Text style={styles.buttonText}>Address</Text>
          <Image source={require("../images/right-arrow.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../images/wish.png")} />
          <Text style={styles.buttonText}>Wishlist</Text>
          <Image source={require("../images/right-arrow.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../images/exit.png")} />
          <Text style={styles.buttonText}>Log out</Text>
          <Image source={require("../images/right-arrow.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#5780D9",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backArrow: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  headerUser: {
    paddingHorizontal: 10,
    paddingBottom: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 20,
  },
  editBtn: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  editText: {
    textTransform: "uppercase",
    color: "#fff",
    fontWeight: "700",
  },
  userName: {
    color: "#fff",
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 20,
  },
  userId: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 30,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#70707033",
  },
  buttonText: {
    marginRight: "auto",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "100",
    color: "#282C4080",
  },
});
