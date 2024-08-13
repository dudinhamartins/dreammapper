import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("../../res/img/logo2.png")}></Image>
            </View>
            <Text style={styles.title}></Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Cadastrar"
                    onPress={() => navigation.navigate('Cadastrar')}
                    color='#516c76'
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Entar"
                    onPress={() => navigation.navigate('Login')}
                    color='#516c76'
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
        marginTop: 10,
    },
    logo: {
        alignItems: 'center',
        width: '40%',
        height: '50%',
    },
});

export default Home;
