import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.header}>
          <Image
            source={require("../assets/images/onstream_logo.jpg")}
            style={{ width: 35, height: 35, marginLeft: 10 }}
          />
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 22,
              marginLeft: 5,
            }}
          >
            OnStream
          </Text>
        </View>
        <View style={styles.header}>
          <Feather
            name="search"
            color="white"
            size={24}
            style={{ marginRight: 10 }}
          />
          <Feather
            name="user"
            color="white"
            size={24}
            style={{ marginRight: 10 }}
          />
        </View>
      </View>
      <ScrollView>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              marginLeft: 10,
              fontWeight: "700",
            }}
          >
            Trending
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              marginLeft: 15,
              fontWeight: "700",
            }}
          >
            Popular
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
});
