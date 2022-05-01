import {StyleSheet, View} from "react-native";
import {Header} from "./Header";
import {Menu} from "./Menu";
import {Main} from "./Main";

export const AllApplication = () => {

    return (
        <View style={styles.container}>
            <Header/>
            <Main/>
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