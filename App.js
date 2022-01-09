import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import BackIcon from "react-native-vector-icons/AntDesign";
import CartIcon from "react-native-vector-icons/AntDesign";
import { Feather } from "@expo/vector-icons";
import { Rating, AirbnbRating } from "react-native-ratings";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.IconsView}>
          <BackIcon name="arrowleft" style={styles.BackIcon} />
        </View>

        <View styles={styles.IconsView}>
          <CartIcon name="shoppingcart" style={styles.CartIcon} />
        </View>
      </View>

      <View style={styles.list}>
        <Image source={require("./assets/jacket.jpg")} style={styles.jacket} />
      </View>

      <View style={styles.HeartIcon}>
        <Feather
          style={{ bottom: 225 }}
          name="heart"
          size={24}
          color="#569FD4"
        />
      </View>

      <View style={styles.Text}>
        <Text style={{ fontWeight: "bold" }}>Red Woman Jacket</Text>
      </View>

      <View style={styles.Reviewheader}>
        <Text style={{}}>Review:</Text>

        <View style={styles.reviews}>
          <AirbnbRating
            count={5}
            defaultRating={11}
            size={10}
            showRating={false}
            is
            disabled={true}
          />
        </View>
      </View>

      <View style={styles.Textheader}>
        <Text style={{ bottom: 580, paddingLeft: 25, fontSize: 12 }}>
          It is a long established fact that a render will be directed by the
          readable content of a page
        </Text>
      </View>

      <View>
        <Text
          style={{
            backgroundColor: "white",
            padding: 20,
            bottom: 565,
            borderRadius: 100,
            marginRight: 110,
            fontSize: 10,
            shadowColor: "white",
            paddingRight: 30,
            color: "blue",
            shadowRadius: 3,
            elevation: 5,
          }}
        >
          Material: 91% polyester. 9% elastane
        </Text>
      </View>

      <View style={styles.size}>
        <Text style={styles.extra}>XS</Text>
        <Text style={styles.small}>S</Text>
        <Text style={styles.medium}>M</Text>
        <Text style={styles.large}>XL</Text>
      </View>

      <View style={styles.amount}>
        <Text
          style={{
            padding: 35,
            right: 30,
            fontSize: 15,
            bottom: 20,
          }}
        >
          Total amount
        </Text>
        <Text style={styles.cash}>$110</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.cart}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    paddingHorizontal: 16,
    flex: 100,
    margin: 0,
  },

  header: {
    flex: 7,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  IconsView: {
    bottom: 26,
    color: "gray",
  },

  BackIcon: {
    fontSize: 25,
    padding: 20,
    right: 15,
    top: 0,
    bottom: 90,
  },

  CartIcon: {
    bottom: 35,
    fontSize: 30,
    left: 15,
    padding: 30,
  },

  HeartIcon: {
    fontSize: 30,
    left: 335,
    marginBottom: 590,
  },

  jacket: {
    borderWidth: 1,
    borderRadius: 25,
    overflow: "hidden",
    borderColor: "white",
    width: 300,
    height: 280,
    left: 20,
    top: 40,
  },

  Text: {
    fontSize: 15,
    bottom: 558,
    paddingLeft: 25,
  },

  Reviewheader: {
    bottom: 553,
    flexDirection: "row",
    marginBottom: 40,
    paddingLeft: 25,
  },

  size: {
    bottom: 560,
    flexDirection: "row",
    right: 2,
  },

  extra: {
    backgroundColor: "white",
    borderBottomWidth: 10,
    width: 40,
    fontSize: 17,
    margin: 9,
    borderRadius: 50,
    padding: 8,
  },

  small: {
    backgroundColor: "white",
    borderBottomWidth: 10,
    width: 40,
    fontSize: 17,
    margin: 9,
    borderRadius: 50,
    padding: 8,
  },

  medium: {
    // borderWidth: 1,
    // overflow: "hidden",
    backgroundColor: "#A865C9",
    width: 40,
    borderLeftWidth: 20,
    borderLeftWidth: 0,
    fontSize: 17,
    margin: 9,
    borderRadius: 50,
    padding: 8,
  },

  large: {
    backgroundColor: "white",
    borderBottomWidth: 10,
    width: 40,
    fontSize: 17,
    margin: 9,
    borderRadius: 90,
    padding: 8,
  },

  amount: {
    backgroundColor: "#A865C9",
    bottom: 550,
    height: 72,
    padding: 0,
    borderRadius: 15,
    marginRight: 80,
    left: 5,
    paddingRight: 30,
    color: "blue",
  },

  cash: {
    bottom: 30,
    left: 10,
    marginBottom: 56,
  },

  button: {
    backgroundColor: "#CF9FFF",
    padding: 15,
    width: 110,
    bottom: 130,
    left: 158,
    height: 50,
    borderRadius: 25,
  },
});
