import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("../../res/img/Modern_Elegant_Beauty_Skincare_And_Makeup_Logo-removebg-preview.png")}></Image>
            </View>
            <Text style={styles.title}></Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Cadastrar"
                    onPress={() => navigation.navigate('Cadastrar')}
                    color='#6495ED'
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate('Login')}
                    color='#6495ED'
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0C4DE',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    buttonContainer: {
        marginBottom: 1,
        width: '45%',
        marginTop: 5,
    },
    logo: {
        alignItems: 'center',
        width: '40%',
        height: '50%',
    },
});

export default Home;
