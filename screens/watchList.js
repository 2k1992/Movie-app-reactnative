import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const data = [
  { id: 1, image: require("../assets/images/image1.jpg"), title: "Ted" },
  { id: 2, image: require("../assets/images/image1.jpg"), title: "Ted" },
  { id: 3, image: require("../assets/images/image1.jpg"), title: "Ted" },
  { id: 4, image: require("../assets/images/image1.jpg"), title: "Ted" },
  { id: 5, image: require("../assets/images/image1.jpg"), title: "Ted" },
  { id: 6, image: require("../assets/images/image1.jpg"), title: "Ted" },
  { id: 7, image: require("../assets/images/image1.jpg"), title: "Ted" },
  { id: 8, image: require("../assets/images/image1.jpg"), title: "Ted" },
  { id: 9, image: require("../assets/images/image1.jpg"), title: "Ted" },
  { id: 10, image: require("../assets/images/image1.jpg"), title: "Ted" },
  { id: 11, image: require("../assets/images/image1.jpg"), title: "Ted" },
  { id: 12, image: require("../assets/images/image1.jpg"), title: "Ted" },
];

const WatchList = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={{ color: "white", marginLeft: 15, fontWeight: "bold" }}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ color: "#fff7", fontSize: 22, fontWeight: "bold" }}>
          Watch List
        </Text>
        <Feather name="search" color="#fff9" size={20} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#C8DF52", fontSize: 13, fontWeight: "bold" }}>
            Movies
          </Text>
          <Text
            style={{
              marginLeft: 20,
              color: "#fff7",
              fontSize: 13,
              fontWeight: "bold",
            }}
          >
            Tv Series
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              marginLeft: 20,
              color: "#fff9",
              fontSize: 13,
              fontWeight: "bold",
              marginRight: 10,
            }}
          >
            Filter
          </Text>
          <Feather name="filter" color="#fff9" size={14} />
        </View>
      </View>

      <ScrollView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default WatchList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },

  image: {
    width: 80,
    height: 100,
    marginBottom: 10,
    marginLeft: 10,
  },
});
