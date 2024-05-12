import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ChildComponent({ numero, mensagem, mudarNumero, mudarTexto, openWhatsApp }) {
  return (
    <View style={styles.box}>
      <Text style={styles.paragraph}>WhatsApp Sem Contato</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um número válido"
        keyboardType="numeric"
        value={numero}
        onChangeText={mudarNumero}
      />
      <Text style={styles.texts}>ex: 558897409602</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite uma mensagem"
        value={mensagem}
        onChangeText={mudarTexto}
      />
      <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
        <Text style={styles.buttonText}>Enviar mensagem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#6C757D',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#343A40',
    color: 'white', 
  },
  paragraph: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  box: {
    width: '340px', 
    backgroundColor: '#212529',
    padding: 16,  
    borderRadius: 10, 
    elevation: 3, 
  },
  button: {
    backgroundColor: '#25D366',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  texts: {
    fontWeight: 'bold',
    fontSize: 16,
    color:'white'
  },

});
