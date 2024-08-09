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
      <Stack.Navigator initialRouteName="Cadastrar">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastrar" component={Cadastro} />
        <Stack.Screen name="Senha" component={RedefinirSenha} />
        
      </Stack.Navigator>
    </NavigationContainer>




   );
 };

