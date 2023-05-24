import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button} from 'react-native';
import { NativeBaseProvider, Box, Center } from "native-base";
import { BlurView } from '@react-native-community/blur';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';

class CreateAccount extends Component {
    constructor(props){
        super(props);
        this.state = {
            Nome: "",
            Username: "",
            Email: "",
            Senha: "",
            Telefone:""
        }
    }
    
    RegisterAccount = () => {
        let parametros = {
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Nome: this.state.Nome,
                Username: this.state.Username,
                Email: this.state.Email,
                Senha: this.state.Senha,
                Telefone: this.state.Telefone
            })
        }
        
        fetch("http://192.168.53.2:5032/lotus/api/Manager/Insert", parametros)
            .then(response => response.json())
            .then(() => {
                ToastAndroid.show("Sua conta foi" + " registrada!", ToastAndroid.SHORT);
                this.props.navigation.navigate('Login');
            })
            .catch(error => console.log("Falha ao cadastrar: " + error));
    }

    
    render(){
        
        return(
            <NativeBaseProvider>
                <View style={styles.container}>
                    <Image source={require('../images/icon.png')} style={styles.image} />
                    <ScrollView contentContainerStyle={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Box>
                            <BlurView style={styles.absolute} blurType='light' blurAmount={10} reducedTransparencyFallbackColor='white'>
                                <Animatable.View animation='fadeInLeft' style={styles.login}>
                                    <Text style={styles.title}>Cadastro de usuário</Text> 
                                    <View>
                                        <Text style={styles.user}>Nome</Text>  
                                        <TextInput style={styles.input} placeholder='Nome e Sobrenome' onChangeText={text=>this.setState({Nome:text})} require/>
                                    </View>
                                    <View>
                                        <Text style={styles.user}>Usuário</Text>  
                                        <TextInput style={styles.input} placeholder='Nome de Usuário' onChangeText={text=>this.setState({Username:text})} require/>
                                    </View>
                                    <View>
                                        <Text style={styles.user}>E-mail</Text>  
                                        <TextInput style={styles.input} placeholder='Seu melhor E-mail' onChangeText={text=>this.setState({Email:text})} require/>
                                    </View>
                                    <View>
                                        <Text style={styles.user}>Telefone</Text>  
                                        <TextInput style={styles.input} placeholder='seu Telefone' keyboardType='numeric' onChangeText={text=>this.setState({Telefone:text})} require/>
                                    </View>
                                    <View>
                                        <Text style={styles.user}>Senha</Text>  
                                        <TextInput style={styles.input} placeholder='Sua senha' secureTextEntry={true} onChangeText={text=>this.setState({Senha:text})} require/>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.button} onPress={this.RegisterAccount}>
                                            <Text style={styles.txtlogin}>Criar Conta</Text>
                                        </TouchableOpacity>
                                        {/* <Button title="Realizar Pedido" color="#1abc9c" onPress={this.RegisterAccount}/> */}
                                    </View>
                                </Animatable.View>    
                            </BlurView>   
                        </Box>
                    </ScrollView>
                </View>
            </NativeBaseProvider>
        )
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
        fontSize: 30,
        marginVertical: 30,
        fontWeight: 'bold',
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
        height: 650,
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
        right: 0
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
    }
});

export default CreateAccount;
