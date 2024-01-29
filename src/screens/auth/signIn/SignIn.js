import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../../styles/index';

const SignIn = () => {
    return (
        <View style={styles.container}>
            <Text>{'SignIn'}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    }

})


export default SignIn
