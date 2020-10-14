import React from 'react';
import { View, Button as RNButton } from 'react-native';

import Colors from '../../constants/Colors';
import styles from './styles'

interface IButtonProps {
    text: string,
    onPress: Function
}

export default function Button({ text, onPress }: IButtonProps){
    return (
        <View style={styles.container}>
            <RNButton title={text} onPress={() => onPress()} color={Colors.primary.active} />
        </View>
    )
}

