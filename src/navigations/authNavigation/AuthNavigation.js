import React, { Component, useEffect, useState } from 'react';
import { I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import * as AuthScreen from '../../screens/auth/index';

const Auth = createNativeStackNavigator();
export default function AuthStackScreen() {
    return (
        <Auth.Navigator
            initialRouteName="SignUp"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Auth.Screen name="Splash" component={AuthScreen.Splash} />
            <Auth.Screen name="SignUp" component={AuthScreen.SignUp} />
            <Auth.Screen name="SignIn" component={AuthScreen.SignIn} />
            <Auth.Screen name="ForgetPass" component={AuthScreen.ForgetPass} />
        </Auth.Navigator>
    );
}

