/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomList from '../../components/CustomList';
import WaitComponent from '../../components/Wait';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import {PRIMARY} from '../../theme/colors';

const ListPage = (props) => {
  const {items} = props.route.params;
  const item = JSON.stringify(items);

  const onClick = () => {
    //        console.log(mail);
  };
  return (
    <View
      style={{
        paddingTop: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hoşgeldin Hakan</Text>
        <Icon name="notifications-on" color="#fff" size={25} />
      </View>
      {item && (
        <>
          <CustomList items={item} />
        </>
      )}

      {!items && <WaitComponent />}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    backgroundColor: PRIMARY,
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: 'white',
  },
});

export default ListPage;
