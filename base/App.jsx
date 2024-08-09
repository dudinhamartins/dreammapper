 import {NavigationContainer} from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './src/telas/Cadastrar';
import Home from './src/telas/Home';

//Projeto
import Inicio from './src/telas/Inicio';
import Login from './src/telas/Login';
import RedefinirSenha from './src/telas/Senha';


const Stack = createStackNavigator();

export default function App () {
    
return(


// PROJETO
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ headerStyle: { backgroundColor: '#B0C4DE' }, headerTintColor: '#B0C4DE', }} name="Home" component={Home} />
        <Stack.Screen  options={{ headerStyle: { backgroundColor: '#B0C4DE' }, headerTintColor: '#B0C4DE', }} name="Inicio" component={Inicio} />
        <Stack.Screen options={{ headerStyle: { backgroundColor: '#B0C4DE' }, headerTintColor: '#B0C4DE', }} name="Login" component={Login} />
        <Stack.Screen options={{ headerStyle: { backgroundColor: '#B0C4DE' }, headerTintColor: '#B0C4DE', }} name="Cadastrar" component={Cadastro} />
        <Stack.Screen options={{ headerStyle: { backgroundColor: '#B0C4DE' }, headerTintColor: '#B0C4DE', }} name="Senha" component={RedefinirSenha} />
        
      </Stack.Navigator>
    </NavigationContainer>




   );
 };

