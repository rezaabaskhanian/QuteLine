import React, { Component } from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import Main from '../../../components/template/auth/main';
import Footer from '../../../components/template/home/Footer';

import Header from '../../../components/organism/auth/Header';
const SignUp = () => {
    return (
        <View style={styles.container}>
            <Header/>
           <Main />
           {/* <Footer/> */}
         
        </View>

    );
}

export default SignUp;


const styles =StyleSheet.create({
container:{
    flex:1,
}

})