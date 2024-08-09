import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../telas/Inicio/Inicio';
import Cadastro from '../../telas/cadastro/Cadastro';
import Contato from '../../telas/contato/Contato';
import Start from '../../telas/rotas/Index'

const Stack = createNativeStackNavigator();

export default function Inicio() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Contato" component={Contato} />
        <Stack.Screen name="Start" component={Start} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}