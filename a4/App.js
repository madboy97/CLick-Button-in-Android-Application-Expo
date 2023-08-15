import  React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Form } from './Form';
import { user } from './display';
import {db} from './config';
import {doc, setDoc} from 'firebase/firestore';
import { Button, StyleSheet ,View} from 'react-native';


const Stack = createNativeStackNavigator();

function App() {

const write=async()=>{
  const docRef = doc(db, 'clients', '12345');
  setDoc(docRef,{name:'ali'})
}

  return (
    <View style={{marginTop:40}}>
    <Button title='click' onPress={write}></Button>
    </View>
  );
}
export default App;