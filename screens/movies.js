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
  { id: 1, image: require("../assets/images/image1.jpg") },
  { id: 2, image: require("../assets/images/image1.jpg") },
  { id: 3, image: require("../assets/images/image1.jpg") },
  { id: 4, image: require("../assets/images/image1.jpg") },
  { id: 5, image: require("../assets/images/image1.jpg") },
  { id: 6, image: require("../assets/images/image1.jpg") },
  { id: 7, image: require("../assets/images/image1.jpg") },
  { id: 8, image: require("../assets/images/image1.jpg") },
  { id: 9, image: require("../assets/images/image1.jpg") },
  { id: 10, image: require("../assets/images/image1.jpg") },
  { id: 11, image: require("../assets/images/image1.jpg") },
  { id: 12, image: require("../assets/images/image1.jpg") },
];

const NUM_COLUMNS = 3;
const SCREEN_WIDTH = Dimensions.get("window").width;

const Movies = () => {
  const renderItem = ({ item }) => {
    return <Image source={item.image} style={styles.image} />;
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
          Movies
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
            Latest
          </Text>
          <Text
            style={{
              marginLeft: 20,
              color: "#fff7",
              fontSize: 13,
              fontWeight: "bold",
            }}
          >
            Trending
          </Text>
          <Text
            style={{
              marginLeft: 20,
              color: "#fff7",
              fontSize: 13,
              fontWeight: "bold",
            }}
          >
            Popular
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
          numColumns={NUM_COLUMNS}
          columnWrapperStyle={styles.columnWrapper}
        />
      </ScrollView>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  columnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  image: {
    width: (SCREEN_WIDTH - (NUM_COLUMNS + 1) * 10) / NUM_COLUMNS,
    height: 200,
    marginBottom: 10,
  },
});
