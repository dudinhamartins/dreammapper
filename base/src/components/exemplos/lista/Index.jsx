import React, {useEffect, useState} from "react";
import { FlatList, ImageBackground, SafeAreaView, TouchableOpacity, View } from "react-native";
import { Text } from '@rneui/themed';
import ImagemFundo from "../../../../res/img/carroFundo.jpg"

export default function ListaAlunos(){

const [aluno, setAluno] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setAluno(json))
}, [])

console.log(aluno);

const alunos = [
{id: '1', nome: 'Fausto', ra: '123456', idade:'25'},
{id: '2', nome: 'Miguel', ra: '321321', idade:'20'},
{id: '3', nome: 'Vitor', ra: '123123', idade:'21'},
{id: '4', nome: 'Gustavo', ra: '567567', idade:'30'},
{id: '5', nome: 'Ana', ra: '765756', idade:'29'},
{id: '6', nome: 'Clara', ra: '234543', idade:'51'},
];

const ExibirAlunos = ({item}) => (
    <View style={{backgroundColor: '#ffffff72', padding: 10}}>
        <TouchableOpacity>
            <Text style={{color: 'black'}}>{item.name}</Text>
        </TouchableOpacity>    
    </View>
);

console.log(alunos);
return(
    <SafeAreaView>
        <ImageBackground style={{height: '100%'}} source={ImagemFundo}>
            <FlatList 
            data={aluno}
            keyExtractor={item => item.id}
            renderItem={ExibirAlunos}
            />
        </ImageBackground>
    </SafeAreaView>
    
        
);
}