import React from 'react';
import BouncingPreloader from 'react-native-bouncing-preloader';

const icons = [
  'https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png',
  'https://www.shareicon.net/data/256x256/2016/05/04/759908_food_512x512.png',
  'https://www.shareicon.net/data/256x256/2016/05/04/759956_food_512x512.png',
  'https://www.shareicon.net/data/256x256/2016/05/04/759954_food_512x512.png',
  'https://www.shareicon.net/data/256x256/2016/05/04/759906_food_512x512.png',
  'https://www.shareicon.net/data/256x256/2016/05/04/759921_food_512x512.png',
];
const WaitComponent = () => {
  return (
    <BouncingPreloader
      icons={icons}
      leftDistance={-100}
      rightDistance={-150}
      speed={1000}
    />
  );
};

export default WaitComponent;
