import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';
import {Header} from '../../components/header';
import {styleApp} from '../../assets/styleApp';
import {useGlobal} from '../../context/global';

export const SecurityScreen = () => {
  const {globalProps} = useGlobal();
  const s = styles();

  const Content = () => {
    return(
      <View style={s.content}>
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
