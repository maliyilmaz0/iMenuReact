/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import {PRIMARY} from '../theme/colors';
import axios from 'axios';
import Register from '../components/Register';
import ForgotPassword from '../components/forgotPassword';

const Login = ({navigation}) => {
  const axios = require('axios');
  const url = 'http://10.0.2.2:1416';
  const [token, setToken] = useState('Not Logged in Yet');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [user, setUser] = useState('');
  const [items, setItems] = useState([]);
  useEffect(() => {
    Company();
  }, []);
  const headers = {
    authorization: 'Bearer ' + token,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const Company = () => {
    axios
      .get(url + '/api/Company', {headers})
      .then(function (response) {
        const d = response.data;

        Object.keys(d).map((key, i) => d[key]);

        // console.log(d);
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const Login = () => {
    console.log(mail, pass);
    axios
      .post(url + '/api/Authenticate/login', {
        email: mail,
        password: pass,
        // email: "user@example.com",
        // password: "String123+",
      })
      .then(function (response) {
        if (response.status == 200) {
          if (response.data.role == 'User') {
            setToken(response.data.token);
            statusMessage('Hoşgeldiniz!', 'Giriş ', 'danger');
            Company();
            console.log('THIS', items);
            navigation.navigate('MyTabs', {items: items});
          }
        }
      })
      .catch(function (error) {
        statusMessage('Hata!', 'Kullanıcı adı veya parola hatalı', 'danger');
      });
  };

  // const Register = () => {

  //   const createe = {
  //     "email": "u@example.com",
  //     "password": "String123+",
  //     "name": "Mustafa",
  //     "surname": "Algan",
  //     "birthday": "2022-04-18T09:05:48.766Z",
  //     "phoneNumber": "string"
  //   }

  //   axios.post(url + "/api/Authenticate/Register", createe)
  //     .then(function (response) {
  //       setToken(response.data);
  //       alert("Kayıt Başarılı");
  //       navigation.navigate("Login");

  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const onMailChangeHandler = e => {
    // console.log(e);
    setMail(e);
  };
  const onPassChangeHandler = e => {
    // console.log(e);
    setPass(e);
  };

  const bgImg = {
    uri: 'https://i.pinimg.com/564x/3e/2a/13/3e2a1337f8305ee33d127af08d354770.jpg',
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const passRef = useRef();
  const resetPassRef = useRef();

  return (
    <ImageBackground source={bgImg} resizeMode="cover" style={styles.bg}>
      <FlashMessage position="top" />
      <StatusBar animated={true} backgroundColor={PRIMARY} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />

        <CustomInput
          name="username"
          control={control}
          placeholder="Kullanıcı adı"
          onChangeText={onMailChangeHandler}
          rules={{
            required: 'Kullanıcı adı yada e-mail giriniz',
            pattern: {value: EMAIL_REGEX, message: 'Email geçersizdir'},
            minLength: {
              value: 3,
              message: 'Kullanıcı adı minimum 3 karakter uzunluğunda olmalıdır',
            },
          }}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          onChangeText={onPassChangeHandler}
          rules={{
            required: 'Parola geçersiz',
            minLength: {
              value: 3,
              message: 'Parola minimum 3 karakter uzunluğunda olmalıdır',
            },
          }}
        />

        <CustomButton bgColor={PRIMARY} text={'LOGIN'} onPress={Login} />
        {/*     onPress={handleSubmit(Login)}*/}
        {/* <TextInput
          style={[styles.input, { width: "80%", marginTop: "20%" }]}
          onChangeText={setMail}
          placeholder={"e-mail"}
        /> */}

        <View
          style={{
            flexDirection: 'row',
            marginTop: '5%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={styles.textButton}
            onPress={() => resetPassRef.current.open()}>
            <Text>Parolamı unuttum </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textButton}
            onPress={() => passRef.current.open()}>
            <Text>Hesap Oluştur </Text>
          </TouchableOpacity>
        </View>

        <Register passRef={passRef} />
        <ForgotPassword resetPassRef={resetPassRef} />
      </View>
    </ImageBackground>
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
export default Login;

function statusMessage(message, description, type) {
  showMessage({
    message: message,
    description: description,
    type: type,
  });
}
