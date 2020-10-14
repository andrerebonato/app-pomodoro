import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';

import styles from './styles';

interface ITimerProp {
    currentTime: any
}

export default function Timer({ currentTime }: ITimerProp){
    return (
        <View style={styles.container}>
            <Animatable.Text animation="fadeIn" delay={100} style={styles.title}>{moment(currentTime).format('mm:ss')}</Animatable.Text>
        </View>
    )
}
