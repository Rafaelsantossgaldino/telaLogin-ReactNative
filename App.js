import React from 'react';
import {
  View, 
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity, 
  Text,
  StyleSheet, } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView>
      <View>
        <Image
           source={require('./assets/logo.png')}
        />
      </View>
      <View>
        <TextInput 
        placeholder="Email"
        autoCorrect={false}
        onChange={()=>{}}
        />
        <TextInput 
        placeholder="Senha"
        autoCorrect={false}
        onChange={()=>{}}
        />
        <TouchableOpacity>
          <Text>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
