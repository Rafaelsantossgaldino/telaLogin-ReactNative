import React, {useState, useEffect} from 'react';
import {
  View, 
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity, 
  Text,
  StyleSheet, Animated } from 'react-native';

export default function App() {
  const [offset] = useState(new Animated.ValueXY({x: 0, y:80}));
  

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
           source={require('./assets/logo.png')}
        />
      </View>

      <Animated.View
       style={[
          styles.container,
          {
            transform: [
              { translateY: offset.y }
            ]
          }
          ]}
       >
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
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>
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
  },
  btnSubmit:{
    backgroundColor: '#35aaff',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText:{
    color: '#fff',
    fontSize:18,
  },
  btnRegister: {
    marginTop: 15,
  },
  registerText:{
    color: '#fff',
  }
});
