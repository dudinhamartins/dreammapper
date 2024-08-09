import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Atualizar = ({ navigation, route }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');

  const id = route.params.id; // Obtém o ID passado da navegação

  const handleAtualizar = () => {
    if (!nome || !sobrenome || !idade) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const data = {
      nome: nome,
      sobrenome: sobrenome,
      idade: idade
    };

    axios.put(`http://10.0.2.2:8085/api/update/${id}`, data)
      .then(response => {
        Alert.alert('Sucesso', 'Usuário atualizado com sucesso!');
        setNome('');
        setSobrenome('');
        setIdade('');

        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          Alert.alert('Erro', 'ID de usuário não encontrado na base de dados.');
        } else {
          Alert.alert('Erro', 'Ocorreu um erro ao atualizar o usuário. Por favor, tente novamente.');
        }
      });      
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualizar Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Atualizar" color="red" onPress={handleAtualizar} />
        <View style={styles.buttonSpacer} />
        <Button title="Voltar" color="red" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonSpacer: {
    width: 10, // Espaçamento entre os botões
  },
});

export default Atualizar;


