import {StyleSheet, Text, View} from "react-native";

export const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Hi, Eugene!</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {

    },
    headerText: {
        fontSize: 40,
    }
})