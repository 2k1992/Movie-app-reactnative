import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Carousel from "react-native-snap-carousel";

const SnapCarousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { id: 1, image: require("../assets/images/image1.jpg"), name: "Ted" },
    { id: 2, image: require("../assets/images/image2.png"), name: "Ted 2" },
    {
      id: 3,
      image: require("../assets/images/image3.jpg"),
      name: "The Challenge",
    },
    // Add more images and names here
  ];

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      {index === activeIndex && (
        <Text style={styles.movieName}>{item.name}</Text>
      )}
    </View>
  );

  useEffect(() => {
    const timer = setInterval(() => {
      carouselRef.current?.snapToNext();
    }, 100000); // Adjust the interval (in milliseconds) according to your needs

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={200}
        inactiveSlideScale={0.7}
        inactiveSlideOpacity={0.7}
        loop // Enable continuous looping
        autoplay // Enable autoplay
        onSnapToItem={(index) => {
          setActiveIndex(index);
          // Optional: Do something when an item is snapped
          console.log("Snapped to item:", index);
        }}
        onBeforeSnapToItem={() => {
          // Optional: Do something before an item is snapped
        }}
      />
      <Text style={styles.activeMovieName}>{data[activeIndex].name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  itemContainer: {
    width: 200,
    height: 320,
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  movieName: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  activeMovieName: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "white", // Set the text color to white
  },
});

export default SnapCarousel;
