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
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
           source={require('./assets/logo.png')}
        />
      </View>

      <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChange={()=>{}}
        />
        <TextInput style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChange={()=>{}}
        />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text >Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize:17,
    borderRadius: 7,
    padding: 10
  }
});
