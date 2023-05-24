import React, { Component } from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import { BlurView } from '@react-native-community/blur';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      senha: '',
    };
  }

  handleLogin = () => {
    const { username, senha } = this.state;
  
    fetch('http://192.168.53.2:5032/lotus/api/Manager/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Username: username,
        Senha: senha,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Resposta do servidor:', data);
        if (data.message === 'Login successful') {
          // Redirecionar para a página Home
          this.props.navigation.navigate('Home');
        } else {
          // Exibir mensagem de aviso
          Alert.alert('Login Inválido', 'Usuário ou senha incorretos');
        }
      })
      .catch((error) => {
        console.error('Falha ao efetuar login:', error);
        Alert.alert('Erro de Login', 'Falha ao efetuar login');
      });
  };
  

  handleRegister = () => {
    this.props.navigation.navigate('Create');
  };

  render() {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <Image source={require('../images/icon.png')} style={styles.image} />
          <ScrollView
            contentContainerStyle={styles.scroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Box>
              <BlurView style={styles.absolute} blurType="light" blurAmount={10} reducedTransparencyFallbackColor="white">
                <Animatable.View animation="fadeInUp" style={styles.login}>
                  <Image source={require('../images/profile.png')} style={styles.photo} />
                  <View>
                    <Text style={styles.user}>Usuário</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Nome de Usuário"
                      onChangeText={(text) => this.setState({ username: text })}
                      required
                    />
                  </View>
                  <View>
                    <Text style={styles.user}>Senha</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Sua senha"
                      secureTextEntry={true}
                      onChangeText={(text) => this.setState({ senha: text })}
                    />
                  </View>
                  <View>
                    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                      <Text style={styles.txtlogin}>Login</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={this.handleRegister}>
                    <Text style={styles.txtcreate}>Não possui uma conta? Cadastre-se</Text>
                  </TouchableOpacity>
                </Animatable.View>
              </BlurView>
            </Box>
          </ScrollView>
        </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbafff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '50%',
  },
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  login: {
    width: 350,
    height: 500,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#fff',
    padding: 2,
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
    marginVertical: 30,
  },
  absolute: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  user: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 0,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 4,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
  },
  txtlogin: {
    fontSize: 17,
    fontWeight: '400',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#00cfeb90',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderColor: '#FFF',
    borderWidth: 2,
  },
});

export default Login;
