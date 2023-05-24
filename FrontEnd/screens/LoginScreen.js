import React, {Component, useEffect, useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NativeBaseProvider, Box, Center, Button} from 'native-base';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase/app';
import 'firebase/auth';

function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}>
        <Text style={styles.title}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.form}>
        <NativeBaseProvider>

                    <Text style={styles.text}>Email</Text>
          <TextInput
            placeholder="digite um e-mail"
            onChangeText={text => setEmail(text)}
            value={email}
            style={styles.input}
          />

          <Text style={styles.text}>Senha</Text>
          <TextInput
            placeholder="digite sua senha"
            nChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}> Acessar </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister}>
            <Center> Não possui uma conta? Cadastre-se </Center>
          </TouchableOpacity>

        </NativeBaseProvider>
      </Animatable.View>



        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DABFFF',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  form: {
    backgroundColor: 'white',
    flex: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'pink',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    color: '#a1a1a1',
  },
});

export default LoginScreen;
