import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import BackButton from "../component/BackButton";
import { Modalize } from "react-native-modalize";
import * as Animateable from "react-native-animatable";
import { connect } from "react-redux";

import { addCart, addHistory, addBookmark } from "../redux/index";
import { showMessage } from "react-native-flash-message";

const { width, height } = Dimensions.get("window");
const flip360 = {
  0: {
    opacity: 0,
    transform: [{ rotateY: "0deg" }],
  },
  0.5: {
    opacity: 0.7,
    transform: [{ rotateY: "180deg" }],
  },
  1: {
    opacity: 1,
    transform: [{ rotateY: "360deg" }],
  },
};
const upAndDown = {
  0: {
    transform: [{ translateY: 0 }],
  },

  0.5: {
    transform: [{ translateY: 10 }],
  },
  1: {
    transform: [{ translateY: 0 }],
  },
};
class Detail extends React.PureComponent {
  constructor(props) {
    super(props);
    const { item } = this.props.route.params;
    this.state = {
      item,
      selectedType: item.variety[0],
      selectedSize: item.size[0],
      selectedColor: item.colors[0],
    };
  }
  selectType = (selection) => {
    this.setState({
      selectedType: selection,
    });
  };
  selectSize = (selection) => {
    this.setState({
      selectedSize: selection,
    });
  };
  selectColor = (selection) => {
    this.setState({
      selectedColor: selection,
    });
  };

  addToCart = (id) => {
    this.props.addCart({ id });
    this.props.navigation.push("Checkout");
  };

  addToBag = (id) => {
    this.props.addCart({ id });
    showMessage({
      message: "Successful",
      description: "Item was added to your cart.",
      icon: "success",
      type: "success",
      titleStyle: {
        fontSize: 16,
        fontWeight: "700",
      },
    });
  };

  componentDidMount() {
    const { item } = this.props.route.params;
    this.props.addHistory(item.id);
  }

  render() {
    const { item: product } = this.state;
    const { bookmark } = this.props;

    return (
      <View style={[StyleSheet.absoluteFill, styles.home]}>
        <View style={styles.navbar}>
          <BackButton />
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={[styles.navbarButton, styles.navbarButtonMargin]} onPress={() => this.props.addBookmark(product.id)}>
              {bookmark[product.id] == true ? (
                <Image source={require("../images/bookmarked.png")} />
              ) : (
                <Image source={require("../images/bookmark.png")} />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Checkout")} style={[styles.navbarButton, styles.navbarButtonMargin]}>
              <Image source={require("../images/bag1.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.product}>
          <Animateable.Image animation="fadeInLeft" style={styles.productBackground} source={require("../images/circle.png")} />
          <Animateable.View animation="fadeInUp" duration={1000} style={styles.productPictureWrap}>
            <Animateable.Image
              animation={upAndDown}
              delay={1010}
              duration={2000}
              easing="linear"
              direction="alternate"
              iterationCount="infinite"
              style={styles.productPicture}
              source={product.picture}
            />
          </Animateable.View>

          <Animateable.View animation={flip360} delay={500} duration={1000} iterationCount={1} direction="alternate" style={[styles.productPrice]}>
            <Text style={styles.productPriceText}>${product.price}</Text>
          </Animateable.View>
        </View>
        <Modalize alwaysOpen={height * 0.4} modalStyle={styles.modal}>
          <View style={styles.name}>
            <Text style={styles.nameText}>{product.name}</Text>
            <TouchableOpacity style={styles.addCart} onPress={() => this.addToBag(product.id)}>
              <Text style={styles.addCartText}>ADD TO BAG</Text>
              <Image source={require("../images/small-bag.png")} />
            </TouchableOpacity>
          </View>
          <View style={styles.rating}>
            <View style={styles.ratingList}>
              <Image source={require("../images/good-star.png")} />
              <Image source={require("../images/good-star.png")} />
              <Image source={require("../images/good-star.png")} />
              <Image source={require("../images/good-star.png")} />
              <Image source={require("../images/bad-star.png")} />
            </View>
            <View style={styles.ratingDetail}>
              <Text style={styles.ratingDetailText}>4.1</Text>
              <Image source={require("../images/start.png")} />
              <Text style={styles.ratingDetailGap}></Text>
              <Text style={styles.ratingDetailText}>(340)</Text>
            </View>
          </View>

          <View>
            <Text style={styles.description}>{product.description}</Text>
          </View>
          <View>
            <Text style={styles.sectionTitle}>Varity</Text>
            <View style={styles.size}>
              {product.variety.map((item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => this.selectType(item)}
                  style={[styles.varityBtn, item == this.state.selectedType ? styles.varityBtnSelected : {}]}
                >
                  <Text style={[styles.varityBtnText, item == this.state.selectedType ? styles.varityBtnSelectedText : {}]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.sectionTitle}>Size</Text>
            <View style={styles.size}>
              {product.size.map((item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => this.selectSize(item)}
                  style={[styles.sizeBtnsizeBtn, item == this.state.selectedSize ? styles.sizeBtnsizeBtnSelected : {}]}
                >
                  <Text style={[styles.sizeBtnTextsizeBtnText, item == this.state.selectedSize ? styles.sizeBtnTextsizeBtnTextSelected : {}]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.sectionTitle}>Color</Text>
            <View style={styles.size}>
              {product.colors.map((item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => this.selectColor(item)}
                  style={[styles.sizeBtnsizeBtn, item == this.state.selectedColor ? styles.sizeBtncolorBtnSelected : {}, { backgroundColor: item }]}
                >
                  {item == this.state.selectedColor && <Image source={require("../images/check.png")} />}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modalize>
        <TouchableOpacity style={styles.nextBtn} onPress={() => this.addToCart(product.id)}>
          <Text style={styles.nextBtnText}>Buy now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  // ...state
  bookmark: state.general.bookmark,
});

const mapDispatchToProps = {
  addCart,
  addHistory,
  addBookmark,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
// Detail.sharedElements = (route, otherRoute, showing) => {
//   const { product } = route.params;
//   console.log(product);
//   return [
//     {
//       id: `product.${product.name}.picture`,
//       animation: "move",
//       resize: "clip",
//       align: "center-top",
//     },
//   ];
// };

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#F5F5F5",
  },
  navbar: {
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  navbarButton: {
    display: "flex",
    padding: 0,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  navbarButtonMargin: {
    marginLeft: 20,
  },
  navbarGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  nextBtn: {
    position: "absolute",
    zIndex: 100000,
    bottom: 0,
    backgroundColor: "#5780D9",
    left: 0,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    padding: 15,
  },
  nextBtnText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    textTransform: "uppercase",
  },
  productPrice: {
    alignSelf: "center",
    top: 0,
    position: "absolute",
    backgroundColor: "#fff",
    padding: 10,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 140,
  },
  productPriceText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#282C40",
  },
  productBackground: {
    width: 400,
    height: 400,
    left: "-30%",
    top: 0,
    position: "absolute",
  },
  productPictureWrap: {
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  productPicture: {
    alignSelf: "center",
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
  modal: {
    padding: 10,
    paddingTop: 20,
  },
  name: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#282C40",
  },
  addCart: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#7070701E",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  addCartText: {
    fontWeight: "700",
    opacity: 0.7,
    fontSize: 12,
    marginRight: 5,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  ratingList: {
    flexDirection: "row",
    marginRight: 20,
    justifyContent: "space-between",
    width: 90,
  },
  ratingDetail: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4D79D7",
    padding: 5,
    borderRadius: 3,
  },
  ratingDetailText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    marginHorizontal: 2,
  },
  ratingDetailGap: {
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    height: "80%",
    width: 2,
    marginHorizontal: 4,
  },
  description: {
    color: "#282C405A",
    fontSize: 16,
    lineHeight: 26,
  },

  sectionTitle: {
    color: "#282C40",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  size: {
    flexDirection: "row",
    margin: 10,
  },
  sizeBtnsizeBtn: {
    padding: 5,
    marginRight: 15,
    borderWidth: 0.5,
    borderColor: "#707070",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeBtnsizeBtnSelected: {
    backgroundColor: "#4D79D7",
  },
  sizeBtncolorBtnSelected: {
    opacity: 0.7,
  },
  sizeBtnTextsizeBtnText: {
    color: "#70707050",
    fontWeight: "bold",
    fontSize: 14,
  },
  sizeBtnTextsizeBtnTextSelected: {
    color: "#fff",
  },
  varityBtn: {
    marginHorizontal: 5,
    borderWidth: 1,
    padding: 5,
    borderRadius: 2,
    borderColor: "#D0D0D0",
    backgroundColor: "#fff",
  },
  varityBtnSelected: {
    borderColor: "#4D79D7",
  },
  varityBtnText: {
    color: "#D0D0D0",
  },
  varityBtnSelectedText: {
    color: "#4D79D7",
    fontWeight: "700",
  },
  commentList: {
    paddingVertical: 10,
    paddingBottom: 60,
  },
  comment: {
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,.09)",
    paddingBottom: 10,
  },
  commentAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentOwner: {
    marginLeft: 10,
  },
  commentName: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20,
  },
  commentTime: {
    fontWeight: "600",
    fontSize: 12,
    color: "#C6C6c6",
    lineHeight: 20,
  },
  commentDetail: {
    marginTop: 5,
    lineHeight: 18,
    color: "#282C40",
    fontWeight: "normal",
  },
});
