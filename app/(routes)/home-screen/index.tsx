import { useEffect } from "react";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function HomeScreen() {
    const opacity = useSharedValue(0);

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 500 });
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value
    }));

    return (
        <Animated.View style={[{ flex: 1, justifyContent: "center", alignItems: "center" }, animatedStyle]}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome to HomeScreen</Text>
        </Animated.View>
    );
}
