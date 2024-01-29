import React, { Component, useEffect, useState } from 'react';
import { I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as HomeScreen from '../../screens/home/index';

const Home = createNativeStackNavigator();

export default function AuthStackScreen() {
    return (
        <Home.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Home.Screen name="Table" component={HomeScreen.Home} />

        </Home.Navigator>
    );
}