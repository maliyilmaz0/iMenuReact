/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {PRIMARY, GRAY_MEDIUM} from '../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const ListItem = ({item}) => {
  return (
    <View style={styles.nonsenseItem}>
      <View style={styles.heart}>
        <Icon name={'ios-heart-outline'} size={20} />
      </View>
      <Image
        style={styles.itemImage}
        source={{
          uri: item['item']['imgUrl'],
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: '600', marginLeft: 10}}>
          {item['item']['name']}
        </Text>
        <Icon name={'location-sharp'} size={28} color={PRIMARY} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  discountBanner: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 50,
    borderTopWidth: 50,
    borderRightColor: 'transparent',
    borderTopColor: 'orange',
  },
  discountText: {
    zIndex: 2,
    color: 'red',
    position: 'absolute',
    top: 0,
  },

  nonsenseItem: {
    borderWidth: 1,
    borderColor: GRAY_MEDIUM,
    borderRadius: 10,
    borderTopRightRadius: 10,

    margin: 8,
  },
  itemImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 150,
  },
  heart: {
    top: 5,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    right: 5,
    backgroundColor: 'white',
    // eslint-disable-next-line no-dupe-keys
    zIndex: 1,
    height: 30,
    width: 30,
    borderRadius: 40,
  },
});

export default ListItem;
