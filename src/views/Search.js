import React, { useState } from "react";
import { Image, View, TextInput, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from "react-native";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import collections from "../data/collections";
import allProduct from "../data/products";
import { Product1 } from "../component/Product";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

const { width, height } = Dimensions.get("window");

export default function Search() {
  const [query, setQuery] = useState("");
  const navigation = useNavigation();
  const searchResult = allProduct.filter((item) => String(item.name).toLocaleLowerCase().includes(String(query).toLocaleLowerCase()) == true);
  return (
    <ScrollView style={styles.home}>
      <View style={styles.header}>
        <View style={styles.search}>
          <Image source={require("../images/search.png")} />
          <TextInput placeholder="Search shoes" style={styles.searchInput} onChangeText={(text) => setQuery(text)} />
        </View>
      </View>

      {query.length > 0 ? (
        <View>
          <View style={styles.group}>
            <View style={styles.groupHeader}>
              <Text style={styles.groupHeaderText}>Results</Text>
            </View>
            {searchResult.length > 0 ? (
              <FlatList
                data={searchResult}
                style={{ paddingLeft: 5 }}
                renderItem={({ item, index }) => <Product1 item={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                decelerationRate="fast"
                bouncesZoom={true}
                numColumns={2}
                // horizontal={true}
              />
            ) : (
              <Text>{`Can't find any product contain "${query}"`}</Text>
            )}
          </View>
        </View>
      ) : (
        <>
          <View>
            <View style={styles.group}>
              <View style={styles.groupHeader}>
                <Text style={styles.groupHeaderText}>Collection</Text>
              </View>
              <FlatList
                data={collections.slice(0, 4)}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={() => navigation.push("CollectionDetail", { collection: item })} style={styles.groupWrap}>
                    <SharedElement
                      id={`collection.${item.name}.picture`}
                      style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }, styles.groupImage]}
                    >
                      <Image source={item.picture} style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }, styles.groupImage]} />
                    </SharedElement>
                    <View style={[StyleSheet.absoluteFillObject, styles.groupTopLayer]}></View>
                    <SharedElement id={`collection.${item.name}.text`}>
                      <Text style={styles.groupText}>{item.name}</Text>
                    </SharedElement>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
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
                <Text style={styles.groupHeaderText}>You might like</Text>
              </View>
              <FlatList
                data={allProduct.slice(6, 11)}
                style={{ paddingLeft: 5 }}
                renderItem={({ item, index }) => <Product1 item={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                decelerationRate="fast"
                bouncesZoom={true}
                numColumns={2}
                // horizontal={true}
              />
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#F5F5F5",
  },
  header: {
    padding: 10,
    // borderBottomColor: "#7070701A",
    // borderBottomWidth: 1,
    paddingVertical: 30,
    // marginBottom: 10,
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
    width: "100%",
  },
  groupWrap: {
    width: width * 0.5 - 10,
    height: 150,
    marginRight: 10,
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: "center",
    overflow: "hidden",
  },
  groupImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
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
