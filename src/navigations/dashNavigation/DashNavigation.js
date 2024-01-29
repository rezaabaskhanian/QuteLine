import React, { Component, useEffect, useState } from 'react';
import { I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import * as DashScreen from '../../screens/dashboard/index';

const Dash = createNativeStackNavigator();
export default function DashStackScreen() {
    return (
        <Dash.Navigator
            initialRouteName="SignUp"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Dash.Screen name="Dashboard" component={DashScreen.Dashboard} />
        
        </Dash.Navigator>
    );
}

