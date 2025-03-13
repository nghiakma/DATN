import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Raleway_700Bold } from '@expo-google-fonts/raleway';
import { router } from 'expo-router';
import { styles } from '@/common/onboard';

const OnBoardingScreen = () => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Raleway_700Bold,
  });

  // Animation values
  const logoScale = useSharedValue(0);
  const shapeOpacity = useSharedValue(0);
  const textOpacity = useSharedValue(0);

   // Animation values for button
  const buttonScale = useSharedValue(1); // Scale effect
  const buttonOpacity = useSharedValue(0); // Fade-in effect
  const buttonTranslateY = useSharedValue(50); // Move up effect

  useEffect(() => {
    logoScale.value = withSpring(1, { damping: 10, stiffness: 100 });
    shapeOpacity.value = withTiming(1, { duration: 1000, easing: Easing.ease });
    textOpacity.value = withTiming(1, { duration: 1000, easing: Easing.ease });
  }, []);

  // Animated styles
  const logoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }],
  }));

  const shapeStyle = useAnimatedStyle(() => ({
    opacity: shapeOpacity.value,
  }));

  const textStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: buttonScale.value }],
  }));

 // Trigger animations when component mounts
 useEffect(() => {
   buttonOpacity.value = withTiming(1, { duration: 1000, easing: Easing.ease });
   buttonTranslateY.value = withSpring(0, { damping: 10, stiffness: 100 });
 }, []);

 // Animated styles for button
 const buttonAnimatedStyle = useAnimatedStyle(() => ({
   opacity: buttonOpacity.value,
   transform: [
     { scale: buttonScale.value }, // Scale effect
     { translateY: buttonTranslateY.value }, // Move up effect
   ],
 }));

 // Handle button press events
 const handlePressIn = () => {
   buttonScale.value = withSpring(0.95); // Slightly shrink on press
 };

 const handlePressOut = () => {
   buttonScale.value = withSpring(1); // Return to normal size on release
 };

 if (!fontsLoaded) {
   return null;
 }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.firstContainer}>
        <View>
          <Animated.Image
            source={require('@/assets/images/onboarding/logo.png')}
            style={[styles.logo, logoStyle]}
          />
          <Animated.Image
            source={require('@/assets/images/onboarding/shape_9.png')}
            style={shapeStyle}
          />
        </View>

        <View style={styles.titleWrapper}>
          <Animated.Image
            style={[styles.titleTextShape1, shapeStyle]}
            source={require('@/assets/images/onboarding/shape_3.png')}
          />
          <Animated.Text style={[styles.titleText, textStyle, { fontFamily: 'Raleway_700Bold' }]}>
            Bắt Đầu Học Với
          </Animated.Text>
          <Animated.Image
            style={[styles.titleTextShape2, shapeStyle]}
            source={require('@/assets/images/onboarding/shape_2.png')}
          />
        </View>

        <View>
          <Animated.Image
            style={[styles.titleTextShape3, shapeStyle]}
            source={require('@/assets/images/onboarding/shape_6.png')}
          />
          <Animated.Text style={[styles.titleText, textStyle, { fontFamily: 'Raleway_700Bold' }]}>
            Ứng Dụng Học Tập Trực Tuyến
          </Animated.Text>
        </View>

        <View style={styles.descWrapper}>
          <Animated.Text style={[styles.descText, textStyle, { fontFamily: 'Nunito_400Regular' }]}>
            Khám phá nhiều bài học tương tác, video,
          </Animated.Text>
          <Animated.Text style={[styles.descText, textStyle, { fontFamily: 'Nunito_400Regular' }]}>
            các câu hỏi thú vị và bài tập
          </Animated.Text>
        </View>

        <Animated.View style={[styles.buttonWrapper, buttonStyle]}>
          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => router.push('/(routes)/welcome-intro')}
            activeOpacity={0.7}
          >
            <Text style={[styles.buttonText, { fontFamily: 'Nunito_700Bold' }]}>
              Bắt tay vào khám phá
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default OnBoardingScreen;