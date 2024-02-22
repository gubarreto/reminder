import moment from 'moment';
import {Calendar} from 'react-native-calendars';
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';
import {styleApp} from "../../../assets/styleApp";
import {useGlobal} from "../../../context/global";
import {ModalAddNote} from "./modal";

import ArrowIcon from "../../../assets/images/arrow.svg";

export const CalendarDashboard = () => {
  const {globalProps} = useGlobal();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState(null);

  const s = styles();

  const themeCalendar = {
    backgroundColor: styleApp[globalProps.theme].background_700,
    calendarBackground: styleApp[globalProps.theme].background_700,
    todayTextColor: styleApp.primary,
    dayTextColor: styleApp[globalProps.theme].font_color,
    textDisabledColor: '#A9A9A9',
    monthTextColor: styleApp[globalProps.theme].font_color,
    arrowColor: styleApp.primary,
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '500',
    textDayFontSize: 16,
    textMonthFontSize: 18,
    selectedDayBackgroundColor: styleApp.primary,
    selectedDayTextColor: "white",
    textDayHeaderFontSize: 13,
    textSectionTitleColor: '#696969'
  };

  return (
    <View style={s.container}>
      <View style={[s.contentTitle, showCalendar && {paddingBottom: 15}]}>
        <TouchableOpacity
          style={s.button}
          activeOpacity={0.8}
          onPress={() => setShowCalendar(prev => !prev)}
        >
          <Text style={s.title}>Calendario</Text>
          <ArrowIcon width={26} height={26} style={[s.arrowIcon, showCalendar && s.invertY]}/>
        </TouchableOpacity>
        {showCalendar &&
          <View>
            <View style={s.separatorInitial}><View style={s.separatorEnd}/></View>
            <Calendar
              onDayPress={day => {
                setSelected(day.dateString);
              }}
              theme={themeCalendar}
              initialDate={selected}
            />
          </View>
        }
        <ModalAddNote
          visible={!!selected}
          closeModal={() => setSelected(null)}
          dayPress={selected}
        />
      </View>

    </View>
  )
};