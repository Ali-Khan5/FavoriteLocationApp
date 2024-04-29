import React from "react";
import {StyleSheet, Pressable, Text, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';

const styles = StyleSheet.create({
    button:{
        padding:8,
         margin:4,
         justifyContent:'center',
         alignItems:'center'
    },
    pressed:{
        opacity: 0.7,
    }
});

const IconButton = ({ icon,size,color,onPress, }) => (
  <Pressable style={({pressed})=>pressed?[styles.button,styles.pressed]:[styles.button]}>
   <Ionicons  name ={icon} color={color} size={size} onPress={onPress}/>
  </Pressable>
);

export default IconButton;
