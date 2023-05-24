import React, {Component, useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {NativeBaseProvider, Box, FlatList, Skeleton} from 'native-base';
import {BlurView} from '@react-native-community/blur';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dataSource: [],
    };
  }
  handleEdit = () => {
    this.props.navigation.navigate('Edit');
  };
  handleHome = () => {
    this.props.navigation.navigate('Home');
  };
  handleTimeout = () => {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 5000);
  };
  recuperarDados = () => {
    this.setState({loading: true});

    

    fetch('http://192.168.53.2:5032/lotus/api/Manager/ListUser')
      .then(response => response.json())
      .then(dadosJson => {
        this.setState({
          loading: false,
          dataSource: dadosJson,
        });
        console.log('Dados Recuperados');
        for (let i in dadosJson) {
          console.log(dadosJson[i].nome);
        }
        this.setState(
          {
            loading: false,
            dataSource: dadosJson,
          },
          () => {
            this.handleTimeout();
          }
        );
      })
      .catch(error => console.log('Falha ao acessar dados: ' + error));
  };
  componentDidMount() {
    this.recuperarDados();
  }
  
  ListUsers = data => {
    const { loading } = this.state;
    

    return (
      <NativeBaseProvider>
        <View>
          <Text style={styles.user}>Nome e Sobrenome</Text>
          {loading ? (
            <Skeleton />
          ) : (
            <Text style={styles.input}>{data.item.nome}</Text>
          )}
          <Text style={styles.user}>Usuário</Text>
          {loading ? (
            <Skeleton />
          ) : (
            <Text style={styles.input}>{data.item.username}</Text>
          )}
          <Text style={styles.user}>E-mail</Text>
          {loading ? (
            <Skeleton />
          ) : (
            <Text style={styles.input}>{data.item.email}</Text>
          )}
          <Text style={styles.user}>Telefone</Text>
          {loading ? (
            <Skeleton />
          ) : (
            <Text style={styles.input}>{data.item.telefone}</Text>
          )}
        </View>

        <View>
          <TouchableOpacity style={styles.buttonEdit} onPress={this.handleEdit}>
            <Text style={styles.txtlogin}>Editar Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDelete}>
            <Text style={styles.txtlogin}>Deletar Conta</Text>
          </TouchableOpacity>
          {/* <Button title="Realizar Pedido" color="#1abc9c" onPress={this.RegisterAccount}/> */}
        </View>
      </NativeBaseProvider>
    );
  };

  render() {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <Image source={require('../images/icon.png')} style={styles.image} />
          <ScrollView
            contentContainerStyle={styles.scroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Box>
              <BlurView style={styles.absolute}>
                <Animatable.View animation="fadeInLeft" style={styles.login}>
                  <Text style={styles.title}>Informações da conta</Text>
                  <View>
                    <FlatList
                      data={this.state.dataSource}
                      renderItem={item => this.ListUsers(item)}
                      keyExtractor={item => item.id.toString()}
                    />
                  </View>
                  <View>
                    <FlatList
                      data={this.state.dataSource}
                      renderItem={item => this.ListUsers(item)}
                      keyExtractor={item => item.id.toString()}
                    />
                  </View>
                  <View>
                    <FlatList
                      data={this.state.dataSource}
                      renderItem={item => this.ListUsers(item)}
                      keyExtractor={item => item.id.toString()}
                    />
                  </View>
                  <View>
                    <FlatList
                      data={this.state.dataSource}
                      renderItem={item => this.ListUsers(item)}
                      keyExtractor={item => item.id.toString()}
                    />
                  </View>
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
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
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
  buttonEdit: {
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#17B890',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderColor: '#FFF',
    borderWidth: 2,
  },
  buttonDelete: {
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#D90429',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderColor: '#FFF',
    borderWidth: 2,
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
});
export default ProfileScreen;
