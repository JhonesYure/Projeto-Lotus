import React, { useEffect } from 'react';
import { View, Button, Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';


export default function Notification() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      PushNotification.createChannel(
        {
          channelId: 'default-channel-id',
          channelName: 'Default Channel',
          channelDescription: 'A default channel for my app',
          vibrate: true,
          date: new Date(Date.now() + (60 * 1000))
        },
        created => console.log(`createChannel returned '${created}'`)
      );
    }

    PushNotification.localNotification({
      channelId: 'default-channel-id',
      title: 'É bom ver você conosco',
      message: 'Então, qual o assunto do momento ?',
      largeIcon: 'icon',
     
    });
  }, []);

 /*  function handleButtonPress() {
    PushNotification.localNotification({
      channelId: 'default-channel-id',
      title: 'Notificação de Botão',
      message: 'Você clicou no botão!',
       
    });
  } */

 /*  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Clique aqui para receber uma notificação" onPress={handleButtonPress} />
    </View>
  ); */
}
