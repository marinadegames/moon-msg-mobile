import {Button, StyleSheet, View} from "react-native";


export const Menu = () => {

    return (
        <View style={styles.menuContainer}>
            <View style={styles.box}>
                <Button title={'Home'} onPress={() => {}}/>
                <Button title={'My profile'} onPress={() => {}}/>
                <Button title={'Friends'} onPress={() => {}}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'column',
        flex: 1
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 60,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0
    }

})