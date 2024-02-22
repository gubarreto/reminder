import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Modal, Switch, TextInput} from 'react-native';

import styles from "./styles";
import {styleApp} from '../../../../assets/styleApp';
import {useGlobal} from '../../../../context/global';

import ArrowIcon from "../../../../assets/images/arrow.svg";
import ToggleOnIcon from "../../../../assets/images/toggleOn.svg";
import ToggleOffIcon from "../../../../assets/images/toggleOff.svg";

export const ModalAddNote = ({visible, closeModal, dayPress}) => {
  const {globalProps} = useGlobal();
  const [title, setTitle] = useState(null);
  const [allDay, setAllDay] = useState(false);
  const [location, setLocation] = useState(null);
  const s = styles();

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
    >
      <View style={s.container}>
        <View style={s.nav}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={closeModal}
            style={{flexDirection: "row"}}
          >
            <ArrowIcon width={styleApp.icon_size} height={styleApp.icon_size} style={[s.closeModalIcon, s.closeModalText]} />
            <Text style={s.closeModalText}>Cancel</Text>
          </TouchableOpacity>

          <Text style={[s.text, {left: -20}]}>New note</Text>

          
          <TouchableOpacity
            activeOpacity={1}
            onPress={closeModal}
            style={{flexDirection: "row"}}
          >
            <Text style={s.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <View style={s.content}>

          <View style={s.box}>
            <TextInput
              style={{fontSize: styleApp.text_size}}
              value={title}
              maxLength={40}
              numberOfLines={1}
              placeholder="Título"
              onChangeText={t => setTitle(t)}
            />
            <View style={s.separator}/>
            <TextInput
              style={{fontSize: styleApp.text_size}}
              value={location}
              maxLength={40}
              numberOfLines={1}
              placeholder="Localização"
              onChangeText={t => setLocation(t)}
            />
          </View>

          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={s.text}>All day</Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setAllDay(prev => !prev)}
            >
              <ToggleOffIcon
                color={styleApp[globalProps.theme].font_color}
                style={allDay && {transform: [{rotate: "180deg"}]}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
};
