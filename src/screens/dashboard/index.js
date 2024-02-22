import React from "react";
import {SafeAreaView, View, TouchableOpacity, Text, FlatList} from "react-native";

import styles from "./styles";
import {Header} from "../../components";
import {CalendarDashboard} from "./calendar";
import {useGlobal} from "../../context/global";

export const DashboardScreen = () => {
  const {globalProps} = useGlobal();
  const s = styles();

  const Content = () => {
    return (
      <View style={s.content}>
        {/* <TouchableOpacity
          style={s.buttonItem}
          activeOpacity={0.7}
          onPress={() => {}}
        >
          <Text style={s.buttonTitle} numberOfLines={2}>auwghudgajwd</Text>
        </TouchableOpacity> */}
        <CalendarDashboard />
      </View>
    );
  };

  return (
    <SafeAreaView style={s.safeareaview}>
      <Header nameScreen={"Dashboard"} />
      <FlatList
        style={s.container}
        data={[1]}
        keyExtractor={(_, index) => index}
        renderItem={({item, index}) => <Content />}
      />
      
    </SafeAreaView>
  )
}