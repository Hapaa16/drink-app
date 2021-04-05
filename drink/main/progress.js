import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export default function ProgressMain() {
    return(
        <ProgressCircle percent={11} radius={50} borderWidth={2} color="red" shadowColor="#999" bgColor="#fff" >
            <Text style={{ fontSize: 18 }}>{'11%'}</Text>
        </ProgressCircle>
    )
}
