import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function MatchCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2}>
        <View style={styles.cskVsMiRow}>
          <Text style={styles.cskVsMi}>CSK vs MI</Text>
          <View style={styles.rect4}>
            <Text style={styles.live}>Live</Text>
          </View>
          <Icon name="chevron-right" style={styles.icon}></Icon>
        </View>
        <View style={styles.rect3}></View>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/image_iaYu..png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.csk2}>CSK</Text>
          <Text style={styles.csk5}>203/11</Text>
        </View>
        <View style={styles.image1Row}>
          <Image
            source={require("../assets/images/image_iaYu..png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Text style={styles.csk3}>CSK</Text>
          <Text style={styles.csk6}>203/11</Text>
        </View>
        <View style={styles.rect5}></View>
        <Text style={styles.text}>
          CSK won the toss and decided to bat first
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
  },
  rect2: {
    width: "100%",
    height: 140,
    backgroundColor: "rgba(249,249,249,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 12,
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  cskVsMi: {
    fontFamily: "inter-700",
    color: "#121212",
    fontSize: 12,
    marginTop: 4,
  },
  rect4: {
    width: 21,
    height: 10,
    backgroundColor: "rgba(219,0,0,1)",
    borderRadius: 2,
    marginLeft: 9,
    marginTop: 7,
  },
  live: {
    fontFamily: "inter-700",
    color: "rgba(255,255,255,1)",
    fontSize: 7,
    marginTop: 1,
    marginLeft: 3,
  },
  icon: {
    color: "rgba(0,27,121,1)",
    fontSize: 20,
    height: 22,
    width: 20,
    marginLeft: 208,
  },
  cskVsMiRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 22,
    marginRight: 8,
  },
  rect3: {
    width: 346,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 3,
  },
  image: {
    height: 32,
    width: 32,
  },
  csk2: {
    fontFamily: "inter-700",
    color: "#121212",
    fontSize: 12,
    marginLeft: 15,
    marginTop: 9,
  },
  csk5: {
    fontFamily: "inter-500",
    color: "rgba(99,99,99,1)",
    fontSize: 12,
    marginLeft: 191,
    marginTop: 9,
  },
  imageRow: {
    height: 32,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 22,
    marginRight: 28,
  },
  image1: {
    height: 32,
    width: 32,
  },
  csk3: {
    fontFamily: "inter-700",
    color: "#121212",
    fontSize: 12,
    marginLeft: 15,
    marginTop: 9,
  },
  csk6: {
    fontFamily: "inter-500",
    color: "rgba(99,99,99,1)",
    fontSize: 12,
    marginLeft: 191,
    marginTop: 8,
  },
  image1Row: {
    height: 32,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 22,
    marginRight: 28,
  },
  rect5: {
    width: 346,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 8,
  },
  text: {
    fontFamily: "inter-regular",
    color: "rgba(99,99,99,1)",
    fontSize: 10,
    marginTop: 3,
    marginLeft: 74,
  },
});

export default MatchCard;
