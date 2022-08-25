import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import CustomButton from './CustomButton';
import {PRIMARY} from '../theme/colors';
import RBSheet from 'react-native-raw-bottom-sheet';

const ForgotPassword = ({resetPassRef}) => {
  return (
    <RBSheet
      ref={resetPassRef}
      closeOnDragDown={true}
      closeOnPressMask={true}
      height={200}
      customStyles={{
        container: {
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },

        draggableIcon: {
          backgroundColor: PRIMARY,
        },
      }}>
      <TextInput style={styles.input} placeholder={'e-mail'} />

      <CustomButton
        text={'Gönder'}
        // onPress={console.log(" şifre unuttum butonu")}
        type={'PRIMARY'}
      />
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: PRIMARY,
    padding: 10,
    borderRadius: 40,
  },
});
export default ForgotPassword;
