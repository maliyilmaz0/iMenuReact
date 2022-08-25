/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import {PRIMARY} from '../theme/colors';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  onChangeText,
}) => {
  return (
    <View style={{alignItems: 'center', width: '100%'}}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
            <View
              style={[
                styles.container,
                {borderColor: error ? 'red' : '#e8e8e8'},
              ]}>
              <TextInput
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
              />
              {error && (
                <Text
                  style={{
                    position: 'absolute',
                    left: 10,
                    top: 45,
                    color: 'red',
                    alignSelf: 'stretch',
                  }}>
                  {error.message || 'Error'}
                </Text>
              )}
            </View>
          </>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '70%',
    borderRadius: 30,
    borderColor: PRIMARY,
    borderWidth: 1,
    height: 45,
    marginBottom: 25,
  },
  input: {
    height: 50,
    flex: 1,
    padding: 10,
  },
});

export default CustomInput;
