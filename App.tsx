import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Header} from "./components/Header";
import {Menu} from "./components/Menu";

export default function App() {

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>

            <Header/>

            <Menu/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 40,
    }
});
