import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {PRIMARY} from '../theme/colors';
const CustomButton = ({onPress, text, type = 'PRIMARY'}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={[styles.button, styles[`container_${type}`]]}
        onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '50%',
    alignItems: 'center',
    borderRadius: 100,
    height: 40,
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  container_PRIMARY: {
    backgroundColor: PRIMARY,
  },
  buttonText: {
    color: 'white',
  },
});

export default CustomButton;
