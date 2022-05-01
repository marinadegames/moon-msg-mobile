import {Image, StyleSheet, Text, View} from "react-native";

export const Header = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Hi, Eugene!</Text>
            <View style={styles.avatar}>
                <Image width={150}
                       height={150}
                       style={{ height: 50, width: 50}}
                       source={{uri: 'https://cdn-icons-png.flaticon.com/512/147/147140.png'}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    avatar: {

    }
})