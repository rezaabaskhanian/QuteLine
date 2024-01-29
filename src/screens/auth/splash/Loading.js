import React, { Component, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Colors } from '../../../styles/index';

const Animation = () => {
    const box1AnimationValue = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(box1AnimationValue, {
                    toValue: 1,
                    duration: 2500,
                    // delay: 300,
                    useNativeDriver: true,

                }),
                // Animated.timing(box1AnimationValue, {
                //     toValue: 0,
                //     duration: 2500,
                //     useNativeDriver: true,
                // })
            ]),
            {
                iterations: 1000
            }
        ).start()
    }, [box1AnimationValue])

    const animatedStyles = (outPutX, outPutY) => {
        return {
            transform: [{
                scaleX: box1AnimationValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 50],
                })
            },

            ],
        };
    };

    return (

        <View style={{ flex: 1, flexDirection: 'row' }}>

            <Animated.View style={[styles.animOne, animatedStyles()]} />
            <Animated.View style={[styles.animTwo, animatedStyles()]} />
        </View>

    );
}

const styles = StyleSheet.create({
    animOne: {
        height: 20,
        // width: 20,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'red',
        borderRadius: 5
    },
    animTwo: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        marginBottom: 20,
        backgroundColor: 'blue',
        borderRadius: 5
    },




})

export default Animation;