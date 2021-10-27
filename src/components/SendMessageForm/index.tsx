import React, { useState } from "react";
import {View, TextInput, Alert, Keyboard} from 'react-native'
import {styles} from './styles'
import { Button } from "../Button";
import { COLORS } from "../../theme";
import { api } from "../../services/api";
export function SendMessageForm(){

  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit(){
    const messageFormatted = message.trim();
    

    if(messageFormatted.length > 0){
      setSendingMessage(true);
      await api.post('/messages', {message: messageFormatted})
      setMessage('');
      Keyboard.dismiss();
      setSendingMessage(false);
      Alert.alert('Mensagem enviada com sucesso')
    }else{
      Alert.alert('Escreva a mensagem')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
        style={styles.input}/>
      <Button
        title="Enviar Mensagem"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}/>
    </View>
  )
}