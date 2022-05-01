import {StyleSheet, View} from "react-native";
import {HomePage} from "./HomePage";

export const Main = () => {
    return (
        <View style={styles.container}>

            <HomePage/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 8,
    }
})