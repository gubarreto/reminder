import React from "react";
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView, View, TouchableOpacity, Text, FlatList} from "react-native";

import styles from "./styles";
import {useGlobal} from "../../context/global";

import BellIcon from "../../assets/images/bell.svg";
import SettingsIcon from "../../assets/images/settings.svg";
import ArrowLeftIcon from "../../assets/images/arrow-small-left.svg";

export const Header = ({nameScreen, goBack = true}) => {
  const {globalProps} = useGlobal();
  const navigation = useNavigation();
  const route = useRoute();
  const s = styles();

  return (
    <SafeAreaView style={s.safeareaview}>
      <View style={s.container}>
        <View style={s.content}>

          {nameScreen != "Dashboard" &&
            <TouchableOpacity
              activeOpacity={0.8}
              style={{}}
              onPress={() => navigation.goBack()}
            >
              <ArrowLeftIcon width={28} height={28} style={s.arrowIcon} />
            </TouchableOpacity>
          }

          <Text
            numberOfLines={1}
            style={[s.title, nameScreen != "Dashboard" && {textAlign: "center", left: -14}]}
          >
            {nameScreen == "Dashboard" ? `Hello, ${globalProps.userName}` : nameScreen || route.name}
          </Text>

          {nameScreen == "Dashboard" &&
            <View style={{flexDirection: "row"}}>
              <TouchableOpacity
                onPress={() => {}}
                activeOpacity={0.8}
                style={[s.buttonMenu, {marginRight: 10}]}
              >
                <BellIcon width={24} height={24} style={s.icon} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Settings")}
                activeOpacity={0.8}
                style={s.buttonMenu}
              >
                <SettingsIcon width={24} height={24} style={s.icon} />
              </TouchableOpacity>
            </View>
          }

        </View>
      </View>
      <View style={s.separator}/>
    </SafeAreaView>
  )
}