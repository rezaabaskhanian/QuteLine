import React, { Component, useEffect, useState } from 'react';
import { I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TableStackScreen from '../../screens/table/Table';
import HomeStackScreen from '../../screens/home/Home'
import AuthStackScreen from '../../navigations/authNavigation/AuthNavigation';
import DashStackScreen from '../../navigations/dashNavigation/DashNavigation';

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);



const Stack = createNativeStackNavigator();
const App = () => {
  // useEffect(() => { }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
       screenOptions={{
        headerShown: false,
        
      }}>
        
        {/* <Stack.Screen name="Tabs" component={TabStackScreen} /> */}

         <Stack.Screen name="Table" component={TableStackScreen} />  
        <Stack.Screen name="Home" component={HomeStackScreen} /> 
        <Stack.Screen name="Auth" component={AuthStackScreen} />
        <Stack.Screen name="Dashboards" component={DashStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
