import React, { Component, useEffect, useState } from 'react';
import { I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as TableScreen from '../../screens/table/index';

const Table = createNativeStackNavigator();

export default function AuthStackScreen() {
    return (
        <Table.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Table.Screen name="Table" component={TableScreen.Table} />

        </Table.Navigator>
    );
}