import React from 'react';
import { View,Image, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { useState } from 'react';
import axios from 'axios';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () =>{
      try{

          //verificar se os campos foram preenchidos
          if(!email || !senha){
              Alert.alert('Erro', 'Por favor, preencha todos os campos.');
              return
          }

          //Objeto para enviar para a API 
          const data = {
              email:email,
              senha:senha
          }
         //console.log(data);
          //Enviar os dados para a API 
          const response = await axios.post('http://10.0.2.2:8085/user/login', data);

          console.log(response);

          //Verificar se o login foi efetuado com sucesso
          if(response.status === 200){
              setEmail('');
              setSenha('');

              navigation.navigate('Home');
          }
          else{
              Alert.alert('Erro', 'Email ou senha incorretos. Por favor, tente novamente');
          }
      }
      catch(error){
        console.log(error);
          if(error.response && error.response.status ===401){
              Alert.alert('Erro', "Email ou senha incorretos. Por favor, tente novamente");
          }
          else{
              Alert.alert('Erro', 'Ocorreu um erro ao fazer o login. Por favor, tente novamente');
          }
      }
  };
  return (
    <View style={styles.container}>
        <View style={styles.logo}>
            <Image source={require("../../res/img/logo.png")}></Image>
        </View>
        <Text style={styles.title}></Text>
        
        <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
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
                <Button title="Entrar" onPress={handleLogin} color="#516c76" />
            </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Senha')}>
                <Text style={styles.link}>Esqueceu sua senha? recupere aqui</Text>
            </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.link}>Ainda não tem cadastro? cadastre-se aqui</Text>
            </TouchableOpacity>

           
          
        
  
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
    marginBottom: '3%',
    backgroundColor: 'white',
   
},
buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
},
button: {
    marginBottom: 12,
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
link:{

  
}
});
export default Login;
