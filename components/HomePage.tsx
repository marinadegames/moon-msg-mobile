import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Search} from "./Search";
import {NewsBox} from "./NewsBox";


export const HomePage = () => {
    return (
        <View style={styles.container}>


            <ScrollView style={styles.scrollViewHomePage}>
                <Search/>
                <View style={styles.newsBlock}>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: '#1D4C71FF',}}>What's news?</Text>
                    <Text style={{fontSize: 20, color: '#1D4C71FF',}}>Say hello to new users!</Text>
                    <TouchableOpacity style={styles.buttonShow}
                                      onPress={() => {
                                      }}>
                        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1D4C71FF'}}>{`Watch new users`} </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize: 25, marginBottom: 20, fontWeight: 'bold', color: '#1D4C71FF',}}>For you</Text>
                <View style={styles.boxes}>
                    <View style={styles.boxesLeft}>
                        <NewsBox groupTitle={'Hot 🔥'}
                                 title={'What is a JS?'}
                                 likes={2756}
                                 description={'Syntax, Promises, Classes, Functions, Objects, Arrays and more...'}
                                 backgroundColor={'#1e9c50'}
                                 textColor={'white'}/>
                        <NewsBox groupTitle={'Study 📚'}
                                 title={'10 facts about C++'}
                                 likes={9863}
                                 backgroundColor={'#dee0df'}
                                 textColor={'black'}/>
                        <NewsBox groupTitle={'Management 😎'}
                                 title={'Agile or Waterfall? ✅'}
                                 likes={923}
                                 description={'What is better for you?'}
                                 backgroundColor={'#bca817'}
                                 textColor={'white'}/>
                    </View>

                    <View style={styles.boxesRight}>
                        <NewsBox groupTitle={'React ⚛️'}
                                 title={'Note about useState'}
                                 description={'Lorem ipsum dolar skop hilldon'}
                                 likes={883}
                                 backgroundColor={'#dee0df'}
                                 textColor={'black'}/>
                        <NewsBox groupTitle={'Study 📚'}
                                 title={'Important array methods'}
                                 description={'map, filter, forEach and more...'}
                                 likes={3444}
                                 backgroundColor={'#b53939'}
                                 textColor={'white'}/>
                        <NewsBox groupTitle={'Books 📚'}
                                 title={'JavaScript for kids'}
                                 likes={28837}
                                 backgroundColor={'#1d4c71'}
                                 textColor={'white'}/>
                    </View>
                </View>

                <TouchableOpacity style={{
                    borderWidth: 2,
                    paddingVertical: 15,
                    borderRadius: 15,
                    backgroundColor: '#9ac9f1',
                    borderColor: '#9ac9f1'
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 26,
                        color: 'white',
                    }}>Loading more...</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxesLeft: {
        width: '47%',
    },
    boxesRight: {
        width: '47%',
    },
    boxes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    scrollViewHomePage: {
        marginVertical: 20,
    },
    buttonShow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 'auto',
        height: 40,
        backgroundColor: 'white',
        marginTop: 20,
        paddingHorizontal: 20
    },
    newsBlock: {
        height: 160,
        padding: 20,
        marginBottom: 20,
        borderRadius: 15,
        backgroundColor: '#8cc3f1'
    },

})