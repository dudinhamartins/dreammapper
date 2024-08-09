import React from 'react';
import { View,Image, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
    <Image source={require("../../res/img/modelo2.png")}></Image>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={() => {}}
        
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
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
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  button:{
   backgroundColor:'#6495ED' 
  },
  link: {
    color: '#808080',
    marginTop: 10,
  },
});

export default Login;
