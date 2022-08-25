import React from 'react';
import {View, FlatList, StyleSheet, Animated} from 'react-native';
import {PRIMARY} from '../theme/colors';
import ListItem from './ListItem';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const animatedValue = new Animated.Value(0);
const CustomList = ({items}) => {
  let translateY = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: [0, -180],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <AnimatedFlatList
        //  contentContainerStyle={{ marginTop: 200 }}
        scrollEventThrottle={16} // <-- Use 1 here to make sure no events are ever missed
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedValue}}}],
          {useNativeDriver: true}, // <-- Add this
        )}
        data={items}
        renderItem={item => <ListItem item={item} />}
      />
      <Animated.View
        style={[styles.headerWrapper, {transform: [{translateY}]}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginBottom: 16,
  },

  headerWrapper: {
    position: 'absolute',
    backgroundColor: PRIMARY,
    left: 0,
    right: 0,
  },
});

export default CustomList;
