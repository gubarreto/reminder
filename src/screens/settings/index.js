import React from "react";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView, View, TouchableOpacity, Text, FlatList, useColorScheme, SectionList} from "react-native";

import styles from "./styles";
import {Header} from "../../components";
import {styleApp} from "../../assets/styleApp";
import {useGlobal} from "../../context/global";

import ExitIcon from "../../assets/images/exit.svg";
import UserIcon from "../../assets/images/user.svg";
import ArrowIcon from "../../assets/images/arrow.svg";
import PaletteIcon from "../../assets/images/palette.svg";
import ShieldIcon from "../../assets/images/shield-check.svg";

export const SettingsScreen = () => {
  const {globalProps, setGlobalProps} = useGlobal();
  const navigation = useNavigation();
  const s = styles();

  const listSettingsItems = [
    {
      title: 'Account settings',
      data: [
        {
          name: "Account",
          icon: UserIcon,
          action: () => navigation.navigate("Account"),
        },
        {
          name: "Privacy and security",
          icon: ShieldIcon,
          action: () => navigation.navigate("Security"),
        },
      ],
    },
    {
      title: 'App settings',
      data: [
        {
          name: "Appearance",
          icon: PaletteIcon,
          action: () => navigation.navigate("Appearance"),
        },
      ],
    },
    {
      title: null,
      data: [
        {
          name: "Logout",
          icon: ExitIcon,
          action: () => setGlobalProps("reset"),
          style: {
            nameColor: "#F54C49",
            noneArrowIcon: true,
          }
        },
      ],
    },
  ];

  const SettingsItem = ({name, icon, action, style, index, section}) => {
    const Icon = icon;
    return (
      <>
        <TouchableOpacity
          style={[
            s.settingsItem,
            index === 0 && s.settingsItemFirst,
            index === section.data.length - 1 && s.settingsItemLast
          ]}
          activeOpacity={0.7}
          onPress={action}
        >
          <View style={{flexDirection: "row"}}>
            <Icon width={styleApp.icon_size} height={styleApp.icon_size} style={s.icon} />
            <Text style={[s.settingsItemTitle, style?.nameColor && {color: style.nameColor}]} numberOfLines={2}>{name}</Text>
          </View>
          {!style?.noneArrowIcon ?
            <View style={s.buttonItem}>
              <ArrowIcon width={styleApp.icon_size*1.2} height={styleApp.icon_size*1.2} style={s.arrowIcon} />
            </View>
          :
            <View style={{height: 36}} />
          }
        </TouchableOpacity>
        {index !== section.data.length - 1 && <View style={s.separatorInitial}><View style={s.separatorEnd}/></View>}
      </>
    );
  };

  return (
    <SafeAreaView style={s.safeareaview}>
      <Header goBack={false} />
      <SectionList
        style={s.container}
        sections={listSettingsItems}
        keyExtractor={(_, index) => index}
        // SectionSeparatorComponent={() => (<View style={s.separator} />)}
        renderItem={({item, index, section}) => <SettingsItem {...item} index={index} section={section} />}
        renderSectionHeader={({section: {title}}) => (title ?
          <Text style={[s.sectionItemTitle]}>{title}</Text> : <View style={{height: 30}}/>
        )}
      />
    </SafeAreaView>
  )
};
