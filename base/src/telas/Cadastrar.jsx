import React from 'react';
import { View, Image, TextInput, Button, StyleSheet, TouchableOpacity, Text, Alert, value} from 'react-native';
import axios from 'axios';
import { useState } from 'react';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    try {
      // Verifica se os campos obrigatórios estão preenchidos
      if (!nome || !sobrenome || !email || !senha) {
        Alert.alert('Erro', 'Todos os campos são obrigatórios!');
        return;
      }

      // Monta o objeto de dados a ser enviado para a API
      const data = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: senha
      };

      // Envia a solicitação POST para a API
      const response = await axios.post('http://10.0.2.2:8085/user/cadastrar', data);

      console.log(response);

      // Verifica se o cadastro foi realizado com sucesso
      if (response.status === 201) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        navigation.navigate('Login');
      }

    } catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Erro', 'Esse email já se encontra na base de dados. Por favor, insira um email diferente.');
      }
      else {
        Alert.alert('Erro', 'Ocorreu um erro ao cadastrar. Por favor, tente novamente.');
      }
    }
  };
  return (
    <View style={styles.container}>
        <View style={styles.logo}>
            <Image source={require("../../res/img/logo2.png")}></Image>
        </View>
        <Text style={styles.title}></Text>
        <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={setNome}
            value={nome}
        />
        <TextInput
            style={styles.input}
            placeholder="Sobrenome"
            onChangeText={setSobrenome}
            value={sobrenome}
        />
        
        <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={value => setEmail(value.toLowerCase())} 
            value={email}
            keyboardType="email-address"
        />
        <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={setSenha}
            value={senha}
            secureTextEntry
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="Cadastrar" onPress={handleCadastro} color="#516c76" />
            </View>
        </View>
        <Text style={styles.text}>Já tem uma conta? <Text onPress={() => navigation.navigate('Login')} style={styles.link} >Entre aqui</Text></Text>
      
        
  
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
    color: 'black',
    marginBottom: 20,
},
input: {
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
    marginBottom: '2%',
    backgroundColor: 'white',
    borderRadius: 20
},
buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
},
button: {
    marginVertical: 10,
    width: '100%',
},
mensagem: {
    color: 'red',
    marginTop: 10,
},
logo: {
    alignItems: 'center',
    width: '2',
    height: '2',
    marginTop: '-25%'
},
text: {
color: 'white',
fontWeight: '500',

},
link:{
  color: '#475f68',
  fontWeight: '600',
}
});

export default Cadastro;
