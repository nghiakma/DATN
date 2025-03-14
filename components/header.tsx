import { StyleSheet, Text, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Raleway_700Bold } from "@expo-google-fonts/raleway";
import { useFonts } from "expo-font";
import { URL_IMAGES } from '@/utils/url';
import { useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useGetCartOfUserQuery } from '@/redux/cart/cartApi';


export default function HeaderComponent() {

    const { data, error, isLoading } = useGetCartOfUserQuery({});
    console.log(data);
    const [avatar, setAvatar] = useState('');
    const user = useSelector((state: any) => state.auth.user);
    console.log(user)
    let [fontsLoaded, fontsError] = useFonts({
        Raleway_700Bold
    })

    if (!fontsLoaded && !fontsError) {
        return null;
    }
    useEffect(() => {
        setAvatar(user.userInfo.avatarUrl);
    }, [user]);

    if (isLoading) {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Loading...</Text>
          </View>
        );
      }
    
      if (error) {
        return (
          <View style={styles.errorContainer}>
            <Text>Error: {error.toString()}</Text>
          </View>
        );
      }
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity>
            <Image
              style={styles.image}
              source={{uri: `${URL_IMAGES}/${user.avatar.url}`}}
            />
        </TouchableOpacity>
        <View>
                <Text style={[styles.helloText, { fontFamily: "Raleway_700Bold" }]}>
                        Xin chào,
                </Text>
                <Text style={[styles.text, { fontFamily: "Raleway_700Bold" }]}>
                        {user.name !== '' ? user.name : "Người dùng ^^"}
                </Text>
            </View>
      </View>
      <TouchableOpacity
                style={styles.bellButton}
                onPress={() => router.push("/(routes)/cart")}
            >
                <Feather name="shopping-bag" size={26} color={"black"} />
                <View style={styles.bellContainer}>
                    <Text style={{ color: "#fff", fontSize: 14 }}>
                        {data?.length > 0 ? data.length : 0}
                    </Text>
                </View>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 16,
        marginBottom: 16,
        width: "90%",
    },

    headerWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

    image: {
        width: 45,
        height: 45,
        marginRight: 8,
        borderRadius: 100,
    },

    text: {
        fontSize: 16,
    },

    bellButton: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#E1E2E5",
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },

    bellIcon: {
        alignSelf: "center",
    },

    bellContainer: {
        width: 20,
        height: 20,
        backgroundColor: "#2467EC",
        position: "absolute",
        borderRadius: 50,
        right: -5,
        top: -5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    helloText: { color: "#7C7C80", fontSize: 14 },
})