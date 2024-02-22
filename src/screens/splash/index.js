import React, {useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {SafeAreaView, View, TouchableOpacity, Text, ActivityIndicator, useColorScheme} from "react-native";

import styles from "./styles";
import {styleApp} from "../../assets/styleApp";
import {useGlobal} from "../../context/global";

export const SplashScreen = () => {
  const {setGlobalProps} = useGlobal();
  const themeDevice = useColorScheme();
  const s = styles();

  useEffect(() => {
    const _getData = async() => {

      const themeStorageToString = await AsyncStorage.getItem("@theme");
      const themeStorage = await JSON.parse(themeStorageToString);

      setTimeout(() => {
        const initialProps = {
          userName: "Gustavo",
          userEmail: "gustavo@email.com",
          userPassword: "1234",
          isAppLoading: false,
          theme: themeStorageToString ? themeStorage : themeDevice,
          signed: false
        };
        setGlobalProps("setAllProps", initialProps);
      }, 500);
    };
    _getData();
  },[]);

  return (
    <SafeAreaView style={s.safeareaview}>
      <View style={s.container}>
        <ActivityIndicator size="large" color={styleApp.font_color} />
      </View>
    </SafeAreaView>
  )
}