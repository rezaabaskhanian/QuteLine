import React, { Component, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Colors } from '../../../styles/index';
import Animation from './Animation';
import Loading from './Loading';
const Splash = () => {



  return (
    <View style={styles.container}>
      <View style={styles.viwAnim}>
        <Animation />

      </View>

      <View style={styles.viwContent}>

        <Text>
          {`siteeSho`}
        </Text>

        <Text>
          {`storeName`}
        </Text>

        <Text>
          {`Slogan Store`}
        </Text>

        {/* <Loading /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  viwAnim: {
    flex: 0.6,

  },
  viwContent: {
    flex: 0.4,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },


})


export default Splash;
