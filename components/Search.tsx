import {StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

export const Search = () => {

    const [inputValue, setInputValue] = useState<string>('')
    const onChangeInputValue = (e: any) => {
        setInputValue(e)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={() => {}}
                value={''}
                placeholder={'Search'}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#63A4DC',
        height: 50,
        borderRadius: 10,
    }
})