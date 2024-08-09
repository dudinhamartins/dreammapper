import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import axios from 'axios'; //Axios é utilizado para comunicar com a API (request)

const Cadastrar = ({ navigation }) => {
    const [mensagem, setMensagem] = useState('');
    const [formData, setFormData] = useState({
        id: '',
        nome: '',
        sobrenome: '',
        idade: '',
    });

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    //validar que os campos não são vazios
    const handleCadastrar = async () => {
        if (!formData.id || !formData.nome || !formData.sobrenome || !formData.idade) {
            setMensagem('Todos os campos são obrigatórios')
            return;
        }

        //envio de informações para a API cadastrar no banco de dados
        try {
            await axios.post('http://10.0.2.2:8085/api/registerSenai', formData);
            Alert.alert('Cadastro realizado com sucesso');
            navigation.navigate('Login');
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
            <Text style={styles.title}>Cadastrar</Text>
            <TextInput
            style={styles.input}
            placeholder="ID"
            onChangeText={(text)=>handleInputChange('id', text)}
            value={formData.id}            
            />
            <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={(text)=>handleInputChange('nome', text)}
            value={formData.nome}            
            />
            <TextInput
            style={styles.input}
            placeholder="Sobrenome"
            onChangeText={(text)=>handleInputChange('sobrenome', text)}
            value={formData.sobrenome}            
            />
            <TextInput
            style={styles.input}
            placeholder="Idade"
            onChangeText={(text)=>handleInputChange('idade', text)}
            value={formData.idade}  
            keyboardType="numeric"          
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Cadastrar" color='red' onPress={handleCadastrar}/>
                </View>
            </View>
            {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text>:null}

            <Text style={styles.comebackMensage}>Deseja voltar à página de:</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonPlacement}>
                    <Button
                    color='gray'
                    title="Listar"
                    onPress={()=> navigation.navigate('Listar')}
                    />
                </View>
                
                <View style={styles.buttonPlacement}>
                    <Button
                    color='gray'
                    title="Home"
                    onPress={()=> navigation.navigate('Home')}
                    />
                </View>
                
                <View style={styles.buttonPlacement}>
                    <Button
                    color='gray'
                    title="Deletar"
                    onPress={()=> navigation.navigate('Deletar')}
                    />
                </View>
            </View>
            
        </View>
        
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        color:'black',
        marginBottom:20,
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
    }


});

export default Cadastrar;


