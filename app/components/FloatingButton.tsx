import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import colors from '../values/colors'

interface IButtonProps{
  onPress:()=>void;
}

const FloatingButton:FC<IButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      
        <Text style={styles.icon}>+</Text>
     
    </TouchableOpacity>
  )
}

export default FloatingButton

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: colors.green,
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    right: 20,
    zIndex:1
  },
  icon: {
    fontSize: 35,
    color: colors.textBlack
  }
})