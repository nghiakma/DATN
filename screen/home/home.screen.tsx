import { Alert, BackHandler, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import HeaderComponent from '@/components/header'


export default function HomeScreen() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to exit the app?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent/>
    </View>
  )
}

const styles = StyleSheet.create({})