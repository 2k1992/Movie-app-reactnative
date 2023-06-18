import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

// Import your screen components
import Home from "./screens/home";
import Movies from "./screens/movies";
import TvSeries from "./screens/tvSeries";
import WatchList from "./screens/watchList";
import More from "./screens/more";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            iconColor = focused ? "#478C5C" : "#000";
          } else if (route.name === "Movies") {
            iconName = focused ? "play" : "play-outline";
            iconColor = focused ? "#478C5C" : "#000";
          } else if (route.name === "Tv Series") {
            iconName = focused ? "folder" : "folder-outline";
            iconColor = focused ? "#478C5C" : "#000";
          } else if (route.name === "Watch List") {
            iconName = focused ? "bookmark" : "bookmark-outline";
            iconColor = focused ? "#478C5C" : "#000";
          } else if (route.name === "More") {
            iconName = focused ? "settings" : "settings-outline";
            iconColor = focused ? "#478C5C" : "#000";
          }

          // You can customize the icon styles here
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
              style={{
                backgroundColor: iconColor,
                width: 65,
                height: 30,
                alignSelf: "center",
                textAlign: "center",
                marginTop: 5,
                borderRadius: 15,
              }}
            />
          );
        },

        tabBarActiveTintColor: "#C8DF52",
        tabBarInactiveTintColor: "#B2BEB5",
        tabBarStyle: { backgroundColor: "black", height: 65, paddingBottom: 5 },
        tabBarLabelStyle: { fontSize: 14, marginBottom: 10 },
        tabBarLabel: ({ focused, color }) => {
          // Customize the label style dynamically based on focus
          const labelStyle = focused ? { fontWeight: "bold" } : {};

          return <Text style={[{ color }, labelStyle]}>{route.name}</Text>;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Tv Series"
        component={TvSeries}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Watch List"
        component={WatchList}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
