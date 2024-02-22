import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState, useContext, createContext, useEffect, useReducer} from "react";
import { useColorScheme } from "react-native";
// import {Toast} from "../components";

export const GlobalContext = createContext(null);

const initialProps = {
  userName: null,
  userEmail: null,
  userPassword: null,
  isAppLoading: true,
  theme: null,
  signed: false
};

const reducer = (globalProps, {key, value}) => {
  const objLiterals = {
    "setUserName": (value) => {return {...globalProps, userName: value}},
    "setUserEmail": (value) => {return {...globalProps, userEmail: value}},
    "setUserPassword": (value) => {return {...globalProps, userPassword: value}},
    "setIsAppLoading": (value) => {return {...globalProps, isAppLoading: value}},
    "setSigned": (value) => {return {...globalProps, signed: value}},
    "setTheme": (value) => {return {...globalProps, theme: value}},
    "setAllProps": (value) => {return {...value}},
    "reset": () => {return {...initialProps}},
    "default": () => {return {...globalProps}},
  };
  
  return objLiterals[key](value);
};

export const GlobalContextProvider = ({ children }) => {

  const [globalProps, dispach] = useReducer(reducer, initialProps);
  const themeDevice = useColorScheme();

  const setGlobalProps = (key, value) => {
    dispach({key: key, value: value});
  };

  useEffect(() => {
    const _getTheme = async() => {
      const themeStorageString = await AsyncStorage.getItem("@theme");
      if (!themeStorageString) {
        setGlobalProps("setTheme", themeDevice);
      };
    };
    _getTheme();
  }, [themeDevice]);

  return (
    <GlobalContext.Provider value={{globalProps, setGlobalProps}}>
      {children}
    </GlobalContext.Provider>
  )
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  return context;
};