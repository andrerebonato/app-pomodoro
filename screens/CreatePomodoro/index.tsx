import React, { useState } from 'react'
import {
    View, Text, TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Surface, Button, Snackbar } from 'react-native-paper';

import { BaseScreen } from '../../Types/BaseScreen';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import styles from './styles';
import NavigationScreens from '../../constants/NavigationScreens';

interface ITask {
    workTime: number,
    breakTime: number,
    name: string
}

const CreatePomodoro = ({ navigation }: BaseScreen) => {
    const [task, setTask] = useState<ITask>({ workTime: 25, breakTime: 5, name: ""});
    const [error, setError] = useState<String>("");
    const [visible, setVisible] = useState<boolean>(false);

    const dismissSnackbar = () => setVisible(false);

    const handleChange = (id: string, value: any) => setTask({
        ...task,
        [id]: value
    }) ;

    const handleRedirect = () => {
        if(!task.workTime || !task.breakTime || !task.name) {
            setError("Preencha todos os campos para prosseguir...");
            setVisible(true);
            return false;
        }
        navigation.navigate(NavigationScreens.pomodoro.name, { task: task });
    }

    return (
        <View style={styles.root}>
            <Snackbar  
                style={{
                    backgroundColor: Colors.primary.active
                }}
                theme={{
                    colors: {
                        placeholder: Colors.primary.black,
                        backdrop: Colors.primary.white
                    }
                }}
                onDismiss={dismissSnackbar}
                visible={visible}
            >
                {error}
            </Snackbar>
            <Animatable.View animation="fadeIn" delay={100}>
                <Surface style={{ elevation: 4, height: 300, width: 300 }}>
                    <Text style={styles.title}>Nova atividade</Text>
                    <View>
                        <TextInput
                            style={{
                                fontFamily: Fonts.primary.regular,
                                alignSelf: "center",
                                textAlign: "center",
                                width: "100%"
                            }}
                            value={String(task.name)}
                            onChangeText={(value) => handleChange("name", value)}
                            placeholder="Informe o nome da atividade"
                        />
                        <Text style={styles.text}>
                            Tempo atividade:
                        </Text>
                        <TextInput
                            style={{
                                marginTop: 10,
                                alignSelf: "center"
                            }}
                            keyboardType={'numeric'}
                            value={String(task.workTime)}
                            onChangeText={(value) => handleChange("workTime", value)}
                            placeholder=""
                        />
                        <Text style={styles.text}>
                            Intervalo atividade:
                        </Text>
                        <TextInput
                            style={{
                                marginTop: 10,
                                alignSelf: "center"
                            }}
                            keyboardType={'numeric'}
                            value={String(task.breakTime)}
                            onChangeText={(value) => handleChange("breakTime", value)}
                            placeholder=""
                        />
                        <View style={{ margin: 15}}>
                            <Button 
                                color={Colors.primary.active} 
                                mode="contained" 
                                onPress={handleRedirect}
                            >
                                Começar
                            </Button>
                        </View>
                        
                    </View>
                </Surface>
            </Animatable.View>
        </View>
    )
}

export default CreatePomodoro;