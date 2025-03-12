import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInImage from "../../assets/images/onboarding/1.png";
import { Entypo, Fontisto, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { commonStyles } from "../../common/styles";
import { router } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-notifications";
import { URL_SERVER } from "@/utils/url";
import Animated, { FadeIn, FadeInUp, FadeOut, SlideInLeft, SlideInRight,useSharedValue, withTiming, useAnimatedStyle, runOnJS } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { useLoginMutation
 } from "@/redux/auth/authApi";
 
const styles = StyleSheet.create({
    signInImage: {
        width: "60%",
        height: 300,
        alignSelf: "center",
        marginTop: 60,
    },
   
    inputContainer: {
        marginHorizontal: 16,
        marginTop: 30,
        rowGap: 30,
    },
    input: {
        height: 55,
        marginHorizontal: 16,
        borderRadius: 12,
        paddingLeft: 40,
        fontSize: 16,
        backgroundColor: "#f0f0f0",
        color: "#333",
        fontFamily: "Nunito_500Medium",
    },
    visibleIcon: {
        position: "absolute",
        right: 30,
        top: 15,
    },
    icon2: {
        position: "absolute",
        left: 23,
        top: 17.8,
        marginTop: -2,
    },
    forgotSection: {
        marginHorizontal: 16,
        textAlign: "right",
        fontSize: 16,
        marginTop: 10,
        color: "#2467EC",
        fontFamily: "Nunito_600SemiBold",
    },
    signUpRedirect: {
        flexDirection: "row",
        marginHorizontal: 16,
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 20,
    },
    button: {
        padding: 16,
        borderRadius: 12,
        marginHorizontal: 16,
        marginTop: 20,
        overflow: "hidden",
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
        fontFamily: "Raleway_700Bold",
    },
});

export default function SignInScreen() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });
    const [required, setRequired] = useState("");
    const [error, setError] = useState({
        password: ""
    });
    // Sử dụng hook useLoginMutation từ authApi
    const [login] = useLoginMutation();

    const opacity = useSharedValue(1);
    const scale = useSharedValue(1);
    const rotate = useSharedValue("0deg");

    const handlePasswordValidation = (value: string) => {
        const password = value;
        const passwordOneNumber = /(?=.*[0-9])/;
        const passwordThreeValue = /(?=.{6,})/;

        if (!passwordOneNumber.test(password)) {
            setError({
                ...error,
                password: "Mật khẩu phải có ít nhất một ký tự số 0-9"
            });
            setUserInfo({ ...userInfo, password: "" });
            return false;
        } else if (!passwordThreeValue.test(password)) {
            setError({
                ...error,
                password: "Mật khẩu phải có độ dài 6 ký tự trở lên"
            });
            setUserInfo({ ...userInfo, password: "" });
            return false;
        }
        setError({
            ...error,
            password: ""
        });

        return true;
    }

    const OnHandleSignIn = async () => {
        setButtonSpinner(true);
        const isValid = handlePasswordValidation(userInfo.password);
        try {
            let { email, password } = userInfo;
            if (isValid) {
                const response = await login({ email, password }).unwrap();
                console.log(response);
                
                opacity.value = withTiming(0, { duration: 500 });
               scale.value = withTiming(0.8, { duration: 500 });
               rotate.value = withTiming("-10deg", { duration: 500 }, () => {
            // Khi animation hoàn thành, chuyển trang
            runOnJS(router.push)("/home-screen");
        });
            
            }
        } catch (error) {
            console.log(error);
            Toast.show("Email hoặc mật khâu không chính xác!", {
                type: "danger"
            });
        } finally {
            setButtonSpinner(false);
        }
    }

    return (
        <LinearGradient
            colors={["#ffffff", "#f0f0f0"]}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <Animated.Image
                        style={styles.signInImage}
                        source={SignInImage}
                        entering={FadeIn.duration(1000)}
                    />
                    <View style={styles.inputContainer}>
                        <Animated.View entering={FadeInUp.duration(1000).delay(600)}>
                            <TextInput
                                style={styles.input}
                                keyboardType="email-address"
                                placeholder="Nhập địa chỉ email"
                                placeholderTextColor="#888"
                                value={userInfo.email}
                                onChangeText={(v) => setUserInfo({ ...userInfo, email: v })}
                            />
                            <Fontisto
                                style={{ position: "absolute", left: 26, top: 17.6 }}
                                name="email"
                                size={20}
                                color={"#888"}
                            />
                            {
                                required && (
                                    <View style={commonStyles.errorContainer}>
                                        <Entypo name="cross" size={18} color={"red"} />
                                    </View>
                                )
                            }
                        </Animated.View>
                        <Animated.View entering={FadeInUp.duration(1000).delay(800)}>
                            <View style={{ marginTop: 15 }}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="default"
                                    secureTextEntry={!isPasswordVisible}
                                    placeholder="**********"
                                    placeholderTextColor="#888"
                                    value={userInfo.password}
                                    onChangeText={(v) => setUserInfo({ ...userInfo, password: v })}
                                />
                                <TouchableOpacity
                                    style={styles.visibleIcon}
                                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                                >
                                    {
                                        isPasswordVisible ?
                                            (
                                                <Ionicons
                                                    name="eye-off-outline"
                                                    size={23}
                                                    color={"#888"}
                                                />
                                            )
                                            :
                                            (
                                                <Ionicons
                                                    name="eye-outline"
                                                    size={23}
                                                    color={"#888"}
                                                />
                                            )

                                    }
                                </TouchableOpacity>
                                <SimpleLineIcons
                                    style={styles.icon2}
                                    name="lock"
                                    size={20}
                                    color={"#888"}
                                />
                            </View>
                            {error.password !== '' && (
                                <View style={[commonStyles.errorContainer, { top: 82 }]}>
                                    <Entypo name="cross" size={18} color={"red"} />
                                    <Text style={{ color: "red", fontSize: 11, marginTop: -1 }}>
                                        {error.password}
                                    </Text>
                                </View>
                            )}
                            <TouchableOpacity
                                onPress={() => router.push({ pathname: "/forget-password" })}
                            >
                                <Text
                                    style={styles.forgotSection}
                                >
                                    Quên mật khẩu?
                                </Text>
                            </TouchableOpacity>
                            <Animated.View entering={SlideInLeft.duration(1000).delay(1000)}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => OnHandleSignIn()}
                                >
                                    <LinearGradient
                                        colors={["#2467EC", "#1E4E9E"]}
                                        style={{ padding: 16, borderRadius: 12 }}
                                    >
                                        {buttonSpinner ? (
                                            <ActivityIndicator size="small" color={"#fff"} />
                                        ) : (
                                            <Text style={styles.buttonText}>
                                                Đăng nhập
                                            </Text>
                                        )}
                                    </LinearGradient>
                                </TouchableOpacity>
                            </Animated.View>
                            <View style={styles.signUpRedirect}>
                                <Text style={{ fontSize: 16, fontFamily: "Nunito_500Medium", color: "#666" }}>
                                    Không có tài khoản?
                                </Text>
                                <TouchableOpacity
                                    onPress={() => router.push({ pathname: "/sign-up" })}
                                >
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontFamily: "Nunito_600SemiBold",
                                            color: "#2467EC",
                                            marginLeft: 5,
                                        }}
                                    >
                                        Đăng ký
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}