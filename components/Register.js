import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import CustomButton from './CustomButton';
import {PRIMARY} from '../theme/colors';
import RBSheet from 'react-native-raw-bottom-sheet';

const Register = ({passRef}) => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [user, setUser] = useState('');

  return (
    <RBSheet
      ref={passRef}
      closeOnDragDown={true}
      closeOnPressMask={true}
      height={400}
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
      <View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={[styles.input, {flex: 2}]}
            onChangeText={setUser}
            placeholder={'adınız'}
          />
          <TextInput
            style={[styles.input]}
            onChangeText={setPass}
            placeholder={'soyadınız'}
          />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setMail}
          placeholder={'e-mail'}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPass}
          placeholder={'şifre'}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPass}
          placeholder={'şifre tekrarı'}
          secureTextEntry={true}
        />
        <CustomButton
          text={'Gönder'}
          // onPress={console.log("yeni hesap oluşturma ekranı gönder butonu")}
          type={'PRIMARY'}
        />
      </View>
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
  logo: {
    width: 300,
    height: 300,
    marginTop: '10%',
  },

  bg: {
    flex: 1,
    justifyContent: 'center',
  },
  textButton: {
    height: 40,
    margin: 12,
    padding: 10,
  },
  button: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 100,
    height: 40,
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default Register;
