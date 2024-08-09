import React, { useState } from "react";
import { View, Image, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import axios from 'axios'; //Axios é utilizado para comunicar com a API (request)

const Cadastro = ({ navigation }) => {
    const [mensagem, setMensagem] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    //validar que os campos não são vazios
    const handleCadastro = async () => {
        if (!nome || !sobrenome || !email || !senha) {
            Alert.alert('Todos os campos são obrigatórios')
            return;
        }

        const data = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha
        }
        
        console.log(data);

        //envio de informações para a API cadastrar no banco de dados
        try {
            await axios.post('http://10.0.2.2:8085/api/register', data);
            Alert.alert('Cadastro realizado com sucesso');
            navigation.navigate("Login");
        } catch (error) {
            if (error.response.status === 401) {
                setMensagem('O ID' + formData.id + 'já existe na base de dados')
            }
            else {
                console.log(error);
                setMensagem('Ocorreu um erro ao cadastrar o usuário. Tente novamente!!!')
            }
        }
    };

    return(
        <View style = {styles.container}>
            <Image source={require('../../../../res/img/senai.png')}/>
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
            onChangeText={setEmail}
            value={email}            
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
                    <Button title="Cadastro" color='red' onPress={handleCadastro}/>
                </View>
            </View>
            {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text>:null}
            <TouchableOpacity onPress={()=> navigation.push('Login')}>
                <Text style={styles.link}>Já possui Login? Entre aqui</Text>
            </TouchableOpacity>
        </View>
        
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 250,
        height: 50,
        marginBottom: 50,
    },
    input:{
        height:40,
        borderColor: 'gray',
        borderWidth:1,
        marginBottom:10,
        padding:10,
        width:'80%',
    },
    button:{
        marginBottom:10,
        marginTop: 10,
        width:'100%',
    },
    mensagem:{
        color:'red',
        marginTop:10,
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        width:'30%',
    },
    buttonPlacement:{
        marginLeft: 5,
    },
    comebackMensage:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'black',
        marginTop: 20,
        marginBottom: 10,
    },
    link: {
        marginTop: 10,
        color: 'gray',
    }


});

export default Cadastro;



