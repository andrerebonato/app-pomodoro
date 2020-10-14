import React, { useState, useEffect, useCallback } from 'react';
import {
    View, Vibration
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Timer from '../../components/Timer/index';
import ClockStatus from '../../components/ClockStatus/index';
import Button from '../../components/Button/index';
import Colors from '../../constants/Colors';
import { BaseScreen } from '../../Types/BaseScreen';
import styles from './styles';
import { useInterval } from '../../hooks/useInterval';

interface IClockProps {
    workTime: number,
    breakTime: number,
    active: boolean,
    mode: string
    time: any;
} 

export default function Pomodoro({ navigation, route }: BaseScreen){
    const { task } = route.params;
    const [clock, setClock] = useState<IClockProps>(
        { time: task?.workTime * 1000, workTime: task?.workTime, breakTime: task?.breakTime, mode: "session", active: false }
    );

    const handleWorkTimeFinishedFeedback = () => Vibration.vibrate(1500);

    const handlePlay = () => clock.active ? setClock({
        ...clock,
        active: false
    }) : setClock({
        ...clock,
        active: true
    });

    const handleReset = () => {
        setClock({
            ...clock,
            active: false,
            mode: "session",
            breakTime: 5,
            workTime: 25,
            time: task?.workTime * 1000
        });
    }

    const watchWorkTime = useCallback(() => {
        setClock({
            ...clock,
            workTime: clock.workTime
        });
    }, [clock.workTime]);

    //decrement seconds
    useInterval(() => setClock({
        ...clock,
        time: clock.time - 1000
    }), clock.active ? 1000 : null);

    //watch the worktime change
    useEffect(() => {
        watchWorkTime();
    }, [])

    //starts a new cicle when the time ends
    useEffect(() => {
        if(clock.time === 0 && clock.mode === "session") {
            handleWorkTimeFinishedFeedback();
            setClock({
                ...clock,
                mode: "break",
                time: clock.breakTime * 1000
            });
        }
        else if(clock.time === 0 && clock.mode === "break")
            setClock({
                ...clock,
                mode: "session",
                time: clock.workTime * 1000
            });
    }, [clock.time, clock.breakTime, clock.workTime, clock.mode])

    return (
        <LinearGradient     
            colors={[Colors.primary.accent, Colors.primary.active]}
            style={styles.root}
        >
            <Timer currentTime={clock.time} />
           
            <ClockStatus mode={clock.mode} running={clock.active} taskName={task?.name} />
            <View style={{ flexDirection: "row" }}>
                <Button text={clock.active ? 'Pausar' : 'Continuar'} onPress={handlePlay} />
                <Button text="Resetar" onPress={handleReset} />
            </View>
        </LinearGradient>
    )
}