import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {useState} from "react";

type ActiveMenuType = 'HOME' | 'MY_PROFILE' | 'CHAT'

export const Menu = () => {

    const [activeMenu, setActiveMenu] = useState<ActiveMenuType>('HOME')

    const setActiveMenuFunction = (value: ActiveMenuType) => {
        setActiveMenu(value)
    }

    return (
        <View style={styles.menuContainer}>
            <View style={styles.box}>

                <TouchableOpacity style={activeMenu === 'HOME' ? styles.buttonMenuActive : styles.buttonMenu}
                                  onPress={() => setActiveMenuFunction('HOME')}>
                    <Text style={activeMenu === 'HOME' ? {fontSize: 20, color: 'white'} : {fontSize: 20, color: 'black'}}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeMenu === 'MY_PROFILE' ? styles.buttonMenuActive : styles.buttonMenu}
                                  onPress={() => setActiveMenuFunction('MY_PROFILE')}>
                    <Text style={activeMenu === 'MY_PROFILE' ? {fontSize: 20, color: 'white'} : {fontSize: 20, color: 'black'}}>My profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeMenu === 'CHAT' ? styles.buttonMenuActive : styles.buttonMenu}
                                  onPress={() => setActiveMenuFunction('CHAT')}>
                    <Text style={activeMenu === 'CHAT' ? {fontSize: 20, color: 'white'} : {fontSize: 20, color: 'black'}}>Chat</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'column',
        flex: 1
    },
    buttonMenu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        height: 50,
        width: 110,
        borderRadius: 15,
    },
    buttonMenuActive: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        backgroundColor: 'black',
        borderWidth: 2,
        height: 50,
        width: 110,
        borderRadius: 15,
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