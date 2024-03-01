import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import Login from './pages/login';
import Logout from './pages/logout';

const Stack = createNativeStackNavigator();
export default function App() {
  const [signedIn,setSignedIn]=useState(false)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {signedIn?
        <Stack.Screen name="Login" component={Login} 
        options={{
          title: 'Sign in',
        }}
        initialParams={{ setSignedIn }} />
        :
        <Stack.Screen name="Logout" component={Logout} />
      }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
