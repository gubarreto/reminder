import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, TouchableOpacity, Text, FlatList} from 'react-native';

import styles from './styles';
import {Header} from '../../components';
import {useGlobal} from '../../context/global';

import ArrowIcon from "../../assets/images/arrow.svg";

export const AccountScreen = () => {
  const s = styles();

  const Content = () => {
    return (
      <View style={s.container}>
        <UserData />
      </View>
    );
  };

  return (
    <SafeAreaView style={s.safeareaview}>
      <Header />
      <FlatList
        data={[1]}
        keyExtractor={(_, index) => index}
        renderItem={({item, index}) => <Content />}
      />
      
    </SafeAreaView>
  )
};

const UserData = ({}) => {
  const {globalProps} = useGlobal();
  const s = styles();
  const userData = [
    {
      name: "Name",
      value: globalProps.userName,
      action: () => {},
    },
    {
      name: "Email",
      value: globalProps.userEmail,
      action: () => {},
    },
    {
      name: "Password",
      value: "",
      action: () => {},
    }
  ];

  const UserDataItem = ({name, value, action, index}) => {
    return (
      <>
      <View style={[s.item,
        index === 0 && s.itemFirst,
        index === userData.length - 1 && s.itemLast
      ]}>
        <Text numberOfLines={1} style={[s.itemName, {flex: 1}]}>{name}</Text>
        <View style={{flexDirection: "row"}}>
          <Text numberOfLines={1} style={[s.itemName, {opacity: 0.5}]}>{value}</Text>
          <ArrowIcon width={24} height={24} style={s.arrowIcon} />
        </View>
      </View>
      {index !== userData.length - 1 && <View style={s.separatorInitial}><View style={s.separatorEnd}/></View>}
      </>
    )
  };

  return (
    <View style={{paddingHorizontal: 15}}>
      <Text style={s.title}>Account information</Text>
      <FlatList
        data={userData}
        keyExtractor={(_, index) => index}
        renderItem={({item, index}) => <UserDataItem {...item} index={index} />}
      />
    </View>
  )
};