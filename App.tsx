import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AllApplication} from "./components/AllApplication";
import {store} from "./Redux/store";
import {Provider} from "react-redux";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar style="auto"/>
                <AllApplication/>
            </View>
        </Provider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    }
});