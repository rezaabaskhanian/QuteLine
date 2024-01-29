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
                Animated.timing(box1AnimationValue, {
                    toValue: 0,
                    duration: 2500,
                    useNativeDriver: true,
                })
            ]),
            {
                iterations: 1000
            }
        ).start()
    }, [box1AnimationValue])

    const animatedStyles = (outPutX, outPutY) => {
        return {
            transform: [{
                translateX: box1AnimationValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, outPutX],
                })
            },
            {
                translateY: box1AnimationValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, outPutY],
                })
            }
            ],
        };
    };

    return (
        <>
            <Animated.View style={[styles.animOne, animatedStyles(30, 30)]} />
            <Animated.View style={[styles.animTwo, animatedStyles(30, -20)]} />
            <Animated.View style={[styles.animThree, animatedStyles(-30, -20)]} />
            <Animated.View style={[styles.animFour, animatedStyles(10, -20)]} />
            <Animated.View style={[styles.animFive, animatedStyles(-30, 20)]} />
        </>
    );
}

const styles = StyleSheet.create({
    animOne: {
        height: 100,
        width: 100,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'red',
        borderRadius: 100 / 2
    },
    animTwo: {
        height: 50,
        width: 50,
        alignSelf: 'center',
        marginBottom: 20,
        backgroundColor: 'blue',
        borderRadius: 50 / 2
    },
    animThree: {
        height: 70,
        width: 70,
        alignSelf: 'flex-end',
        marginBottom: 20,
        backgroundColor: 'green',
        borderRadius: 70 / 2
    },
    animFour: {
        height: 90,
        width: 90,
        position: "absolute",
        alignSelf: 'flex-end',
        marginBottom: 20,
        backgroundColor: 'yellow',
        borderRadius: 90 / 2
    },
    animFive: {
        height: 80,
        width: 80,
        position: "absolute",
        top: 200,
        left: 20,
        alignSelf: 'flex-start',
        marginBottom: 20,
        backgroundColor: 'gray',
        borderRadius: 80 / 2
    }



})

export default Animation;