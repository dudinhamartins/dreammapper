import React from 'react';
import { View, Image, TextInput, Button, StyleSheet } from 'react-native';

const RedefinirSenha = () => {
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
        placeholder="Nova senha"
        secureTextEntry
      />
      <Button
        title="Redefinir"
        onPress={() => {}}
      />
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
  button:{
   backgroundColor:'#6495ED'
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  
});

export default RedefinirSenha;
