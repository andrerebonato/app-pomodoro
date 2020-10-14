import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface IClockStatusProps {
    running: boolean,
    mode: string,
    taskName: string
}

export default function ClockStatus({ running, taskName, mode }: IClockStatusProps) {
    const [status, setStatus] = useState<string>("");

    useEffect(() => {
        handleDisplayStatus();
    }, [running, mode]);

    const handleDisplayStatus = () => {
        if(running) {
            mode === "session" ? setStatus("Mantenha-se no foco!") : setStatus("Hora do descanso :D");
        } else {
            setStatus("Iniciar atividade");
        }
    }

    return (
        <View>
            <Text style={styles.title}>{taskName}</Text>
            <View style={styles.container}>
                <Text style={styles.subTitle}>
                    {status}
                </Text>
            </View>
        </View>
    )
}