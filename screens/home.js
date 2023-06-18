import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

import SnapCarousel from "../components/caroseal";

const Home = () => {
  const data = [
    { id: 1, title: "Item 1", image: require("../assets/images/image1.jpg") },
    { id: 2, title: "Item 2", image: require("../assets/images/image1.jpg") },
    { id: 3, title: "Item 3", image: require("../assets/images/image1.jpg") },
    { id: 4, title: "Item 4", image: require("../assets/images/image1.jpg") },
    { id: 5, title: "Item 5", image: require("../assets/images/image1.jpg") },

    // Add more items as needed
  ];

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
              color: "#B2BEB5",
              fontSize: 15,
              marginLeft: 10,
              fontWeight: "700",
            }}
          >
            Trending
          </Text>
          <Text
            style={{
              color: "#B2BEB5",
              fontSize: 15,
              marginLeft: 15,
              fontWeight: "700",
            }}
          >
            Popular
          </Text>
        </View>
        <SnapCarousel />
        <View
          style={[
            styles.header,
            { margin: 10, justifyContent: "space-around" },
          ]}
        >
          <View style={{ alignItems: "center" }}>
            <Feather name="info" size={20} color="#B2BEB5" />
            <Text style={{ color: "#B2BEB5" }}>Details</Text>
          </View>
          <View
            style={{
              backgroundColor: "#C8DF52",
              height: 50,
              borderRadius: 10,
              width: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>WATCH NOW</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Feather name="bookmark" size={20} color="#B2BEB5" />
            <Text style={{ color: "#B2BEB5" }}>Add List</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text style={{ color: "#B2BEB5", fontSize: 17 }}>Trending</Text>
            <Text style={{ color: "#C8DF52", fontSize: 17 }}>View all</Text>
          </View>
          <View style={{ height: 200 }}>
            <ScrollView horizontal>
              {/* Horizontal FlatList */}
              <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View
                    style={{
                      width: 110,
                      height: 150,
                      borderRadius: 5,
                      margin: 5,
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{ width: "100%", height: "90%" }}
                    />
                    <Text style={{ color: "#B2BEB5" }}>{item.title}</Text>
                  </View>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </ScrollView>
          </View>
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
