import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

export default function App() {

    const [counterValue, setCounterValue] = useState<number>(0)

    const increment = () => {
        setCounterValue(counterValue + 1)
        console.log('increment')
    }

    const decrement = () => {
        setCounterValue(counterValue - 1)
    }

    const reset = () => {
        setCounterValue(0)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{counterValue}</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={styles.button}>
                    <Button title={'+'} color={'black'} onPress={increment}/>
                </View>
                <View style={styles.button}>
                    <Button title={'-'} color={'black'} onPress={decrement}/>
                </View>
            </View>
            <View style={styles.button}>
                <Button title={'reset'} color={'black'} onPress={reset}/>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    text: {
        fontSize: 50,
    },
    button: {
        width: 100,
        padding: 10,
    }
});
