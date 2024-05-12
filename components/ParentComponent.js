
import React, { useState } from 'react';

//import dos elementos ("HTML") do arquivo
import { Linking, View, StyleSheet, Text } from 'react-native';

//Import das props
import ChildComponent from './ChildComponents';

//função responsavel por exportar o file
export default function ParentComponent() {
  
  //o useState é um hook que define estado de algo, no caso define que o phoneNumber inicialmente é uma string vazia 
  const [phoneNumber, setPhoneNumber] = useState('');

  const [message, setMessage] = useState('');

  //Essa const diz que, o mudarNumero recebe um parametro text e usa a função set para atualizar o valor do estado inicial, no caso vazio, quando o numero for att no text o hook sera atualizado.
  const mudarNumero = (text) => {
    setPhoneNumber(text);
  };

  const mudarTexto = (text) => {
    setMessage(text);
  };

  //função para que, caso o numero atualizado comece com 55 e tenha o tamanho igual ou maior que 11 digitos, ele abra o link do whats, caso não, ele alertara um erro.
  const openWhatsApp = () => {
    
    if (phoneNumber.startsWith('55') && phoneNumber.length >= 11) {
     
      //Aqui o link do zap junto com a api que permite abrir a url, o link consta com 2 funções, que chamam os valores atualizados que são escritos na entrada, logo eles são redirecionados ao link, e la ira aparecer o numero que você quer enviar a mensagem e a propria mensagem.
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      
      Linking.openURL(url);
    } else {
       
      //lembrar de por uma função que limpe o input quando der erro!!!!!!!
      alert('Número de telefone inválido');
    }
  };


  //retorno que sera "exibido ou acionado", as props do child que são igualadas as funções neste file para funcionamento da logica
  return (

    <View style={styles.container}>
      
      
      <ChildComponent
        numero={phoneNumber}
        mensagem={message}
        mudarNumero={mudarNumero}
        mudarTexto={mudarTexto}
        openWhatsApp={openWhatsApp}
      />

      <Text style={styles.texts}>
      Developed by Caio Vinicius
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  texts: {
    fontWeight: 'bold',
    fontSize: 16,
    color:'white',
    marginTop:50,
  },
});
