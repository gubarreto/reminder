import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {SafeAreaView, View, TouchableOpacity, Text, FlatList, useColorScheme} from "react-native";

import styles from "./styles";
import {Header} from "../../components";
import {styleApp} from "../../assets/styleApp";
import {useGlobal} from "../../context/global";

import DarkIcon from "../../assets/images/moon.svg";
import ReplaceIcon from "../../assets/images/replace.svg";
import LightIcon from "../../assets/images/brightness.svg";

export const AppearanceScreen = () => {
  const {globalProps, setGlobalProps} = useGlobal();
  const s = styles();

  const Content = () => {
    const themeData = [
      {
        name: "Light",
        icon: LightIcon,
        action: () => UpdateTheme("light"),
      },
      {
        name: "Dark",
        icon: DarkIcon,
        action: () => UpdateTheme("dark"),
      },
      {
        name: "Dispositivo",
        icon: ReplaceIcon,
        action: () => UpdateTheme("device"),
      },
    ];
    return (
      <View style={s.content}>
        <ThemeContent />
      </View>
    );
  };

  return (
    <SafeAreaView style={s.safeareaview}>
      <FlatList
        style={s.container}
        data={[1]}
        keyExtractor={(_, index) => index}
        ListHeaderComponent={(<Header />)}
        renderItem={({item, index}) => <Content />}
      />
    </SafeAreaView>
  )
};

const ThemeContent = () => {
  const {globalProps, setGlobalProps} = useGlobal();
  const themeDevice = useColorScheme();
  const s = styles();
  const themeData = [
    {
      name: "Light",
      icon: LightIcon,
      action: () => UpdateTheme("light"),
    },
    {
      name: "Dark",
      icon: DarkIcon,
      action: () => UpdateTheme("dark"),
    },
    {
      name: "Device",
      icon: ReplaceIcon,
      action: () => UpdateTheme("device"),
    },
  ];

  const UpdateTheme = async(theme) => {
    if (theme == "device") {
      await AsyncStorage.removeItem("@theme");
      setGlobalProps("setTheme", themeDevice);
    } else {
      AsyncStorage.setItem("@theme", JSON.stringify(theme));
      setGlobalProps("setTheme", theme);
    };
  };

  const ThemeItem = ({name, icon, action}) => {
    const Icon = icon;
    return(
      <View>
        <TouchableOpacity style={s.themeButton} onPress={action}>
          <Icon width={styleApp.icon_size} height={styleApp.icon_size} style={s.themeButtonIcon} />
        </TouchableOpacity>
        <Text style={s.buttonName}>{name}</Text>
      </View>
    )
  };

  return (
    <View style={s.content}>
      <Text style={s.title}>Theme</Text>
      <FlatList
        horizontal
        data={themeData}
        style={{flex: 1, marginTop: 10}}
        keyExtractor={(_, index) => index}
        ItemSeparatorComponent={() => <View style={{ width:  20}} />}
        renderItem={({item, index}) => <ThemeItem {...item} />}
      />
    </View>
  );
};
