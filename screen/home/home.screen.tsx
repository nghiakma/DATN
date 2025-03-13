import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useGetAllCoursesQuery, useGetUsersAllCoursesQuery } from "@/redux/courses/coursesApi"; // Import API
import { useTheme } from "@/context/theme.context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";


export default function HomeScreen() {
    const { data, error, isLoading } = useGetUsersAllCoursesQuery({});
    const { theme } = useTheme()
    const bottomTabBarHeight = useBottomTabBarHeight();

    return (
       <>
        <LinearGradient
          colors={
            theme.dark ? ["#180D41", "#2A2D32", "#131313"] : ["#fff", "#f7f7f7"]
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            flex: 1,
            backgroundColor: theme.dark ? "#101010" : "#fff",
          }}
        >
         
        </LinearGradient>
       </>
    );
}
