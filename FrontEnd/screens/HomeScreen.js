import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {NativeBaseProvider, Box, Center} from 'native-base';
/* import * as Animatable from 'react-native-animatable'; */
import Notification from '../components/Notification';
/* import {useNavigation} from '@react-navigation/native'; */
import Weet from '../components/LWeets';

class HomeScreen extends Component {
  handleProfile = () => {
    this.props.navigation.navigate('Profile');
  };
  handleCam = () => {
    this.props.navigation.navigate('Camera');
  };

  render() {
    return (
      <NativeBaseProvider>
        <Notification />
        <View style={styles.container}>
          <Center>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleProfile}>
              <Text style={styles.acess}>Perfil</Text>
            </TouchableOpacity>
          </Center>

          <Box>
            <Center>
              <Image
                source={require('../images/icon.png')}
                style={{width: 100, height: 100, marginTop: 50}}
              />
              <Text style={styles.txt}>Bem vindo ao Lotus Weet</Text>
            </Center>
          </Box>
          <Weet />
        </View>
        <View>
          {/* <TouchableOpacity
                style={styles.buttonPhoto}
                onPress={this.handleCam}>
                    <Text style={styles.txtPhoto}>
                        Foto
                    </Text>
            </TouchableOpacity> */}
        </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DABFFF',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#272932',
    width: '35%',
    borderRadius: 30,
    paddingVertical: 8,
    marginLeft: '60%',
  },
  acess: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonPhoto: {
    backgroundColor: '#7fdeff',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 50,
  },
});

export default HomeScreen;
