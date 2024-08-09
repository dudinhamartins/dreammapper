import React, { useState } from "react";
import { StatusBar ,KeyboardAvoidingView, ImageBackground ,Platform, SafeAreaView, ScrollView, View, Alert } from "react-native";
import styles from './Styles';
import { Input, Button, Icon, Text } from '@rneui/themed';
import { TextInputMask } from 'react-native-masked-text';
import ImagemFundo from '../../../../res/img/corpoIMC.png'

export default function AtvImc() {
    StatusBar.setHidden(true);
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    let resultado = '';

    const calcularIMC = () => {
        if (altura && peso != 0) {
          const imc = Math.round(peso / (altura * altura), 2);
    
          let categoria = '';
          if (imc < 18.5) {
            categoria = 'Magreza - Obesidade Grau 0';
          } else if (imc >= 18.5 && imc < 25) {
            categoria = 'Normal - Obesidade Grau 0';
          } else if (imc >= 25 && imc < 30) {
            categoria = 'Sobrepeso - Obesidade Grau 1';
          } else if (imc >= 30 && imc < 40) {
            categoria = 'Obesidade Grau 2';
          } else {
            categoria = 'Obesidade Grave - Grau 3';
          }
    
          resultado = (`Seu IMC é: ${imc} \nCategoria: ${categoria}`);
        } else {
          resultado = ('Por favor, insira altura e peso.');
        }
        Alert.alert(resultado);
      };

    return (
        
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={50}
        style={styles.container}>
        <ImageBackground style={{height: '105%'}} source={ImagemFundo}>
        <ScrollView>
        <View style={styles.divTitulo}>
                <Text h1 style={styles.titulo}>Calculadora IMC</Text>
            </View>
            <View style={styles.formContato}>
                <Input
                    style={[styles.inputContainerMask, styles.inputStyle]}
                    placeholder='Digite sua altura em metros'
                    keyboardType='phone-pad'
                    value={altura}
                    onChangeText={int => setAltura(int)}
                />
                <Input
                    style={[styles.inputContainerMask, styles.inputStyle]}
                    placeholder='Digite seu peso'
                    keyboardType='phone-pad'
                    value={peso}
                    onChangeText={int => setPeso(int)}
                />
                <Button onPress={calcularIMC} radius={"sm"} type="solid" color="gray">
                    Calcular IMC
                    <Icon style={{ padding: 5 }} type='font-awesome' name="heart" color="white" />
                </Button>
            </View>
        </ScrollView>
        </ImageBackground>
        </KeyboardAvoidingView>
    );
}
