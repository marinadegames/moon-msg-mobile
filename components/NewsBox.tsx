import {Text, View, StyleSheet} from "react-native";

type PropsType = {
    groupTitle: string
    title: string
    description?: string
    likes: number
    backgroundColor: string
    textColor: string
}

export const NewsBox = ({textColor, backgroundColor, groupTitle, likes, title, description}: PropsType) => {
    return (
        <View style={
            {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flex: 1,
                padding: 15,
                maxHeight: 240,
                marginBottom: 20,
                borderRadius: 10,
                backgroundColor: backgroundColor,

            }
        }>

            <Text style={{fontSize: 16, color: textColor, marginBottom: 8}}>{groupTitle}</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: textColor, marginBottom: 8}}>{title}</Text>

            {description && <Text style={{fontSize: 15, color: textColor}}>{description}</Text>}


            <View style={styles.likes}>
                <Text style={
                    {
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#1D4C71FF',

                    }}>❤️ {likes}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    box: {},
    likes: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        height: 30,
        marginTop: 10,
        paddingHorizontal: 10,
    },
})