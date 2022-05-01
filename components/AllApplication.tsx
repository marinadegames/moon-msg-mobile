import {StyleSheet, View} from "react-native";
import {Header} from "./Header";
import {Menu} from "./Menu";

export const AllApplication = () => {

    return (
        <View style={styles.container}>
            <Header/>
            <Menu/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
});