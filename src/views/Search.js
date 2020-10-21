import React from "react";
import { Image, View, TextInput, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from "react-native";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const group = [
  { url: require("../images/group-1.jpg"), text: "Man" },
  { url: require("../images/group-2.jpg"), text: "Women" },
  { url: require("../images/group-3.jpg"), text: "Young" },
  { url: require("../images/group-4.jpg"), text: "Unisex" },
];

export default function Search() {
  return (
    <ScrollView style={styles.home}>
      <View style={styles.header}>
        <View style={styles.search}>
          <Image source={require("../images/search.png")} />
          <TextInput placeholder="Search shoes" style={styles.searchInput} />
        </View>
      </View>
      <View>
        <View style={styles.group}>
          <View style={styles.groupHeader}>
            <Text style={styles.groupHeaderText}>Men</Text>
          </View>
          <FlatList
            data={group}
            renderItem={({ item }) => (
              <View style={styles.groupWrap}>
                <Image source={item.url} style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }, styles.groupImage]} />
                <View style={[StyleSheet.absoluteFillObject, styles.groupTopLayer]}></View>
                <Text style={styles.groupText}>{item.text}</Text>
              </View>
            )}
            keyExtractor={(item) => item.title}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            bouncesZoom={true}
            alwaysBounceHorizontal={true}
            numColumns={2}
            // horizontal={true}
          />
        </View>
      </View>
      <View>
        <View style={styles.group}>
          <View style={styles.groupHeader}>
            <Text style={styles.groupHeaderText}>Women</Text>
          </View>
          <FlatList
            data={group}
            renderItem={({ item }) => (
              <View style={styles.groupWrap}>
                <Image source={item.url} style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }, styles.groupImage]} />
                <View style={[StyleSheet.absoluteFillObject, styles.groupTopLayer]}></View>
                <Text style={styles.groupText}>{item.text}</Text>
              </View>
            )}
            keyExtractor={(item) => item.title}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            bouncesZoom={true}
            alwaysBounceHorizontal={true}
            numColumns={2}
            // horizontal={true}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#F5F5F5",
  },
  header: {
    padding: 10,
    borderBottomColor: "#7070701A",
    borderBottomWidth: 1,
    paddingVertical: 30,
    marginBottom: 20,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    color: "#8F919B80",
    fontWeight: "100",
    marginLeft: 20,
  },
  groupWrap: {
    width: width * 0.5 - 10,
    height: 150,
    marginRight: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "red",
    justifyContent: "center",
    overflow: "hidden",
  },
  groupImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  group: {
    paddingBottom: 20,
    paddingHorizontal: 5,
    marginTop: 20,
  },
  groupHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  groupHeaderButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 60,
    fontSize: 5,
    opacity: 0.5,
  },
  groupHeaderText: {
    fontSize: 17,
    color: "#282C40",
    fontWeight: "700",
    marginBottom: 10,
  },
  groupText: {
    fontSize: 40,
    color: "#fff",
    alignSelf: "center",
    fontWeight: "bold",
  },
  groupTopLayer: {
    backgroundColor: "#3C3C3C",
    opacity: 0.42,
    top: 0,
    left: 0,
  },
});
