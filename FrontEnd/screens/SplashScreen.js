import React, {Component, useEffect} from 'react';
import {  ScrollView,SafeAreaView,StatusBar,StyleSheet,Text,useColorScheme,View, Touchable, TouchableOpacity,} from 'react-native';
import { NativeBaseProvider, Box, Center } from "native-base";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

class SplashScreen extends Component
{
    componentDidMount() {
        setTimeout(() => {
          this.props.navigation.replace('Login');
        }, 3000);
      }
      
    render()
    {
        
        return(
            <NativeBaseProvider>
                <View style={styles.container}>
                <Center>
                    <Animatable.Image
                        animation="flipInX"
                        source={require('../images/icon.png')}
                        resizeMode='contain'
                    />
                </Center>
                <Center>
                    <Animatable.Text delay={800} animation="fadeInUp" style={styles.txt}>
                        Lotus Weet
                    </Animatable.Text>
                </Center>
            </View>
            </NativeBaseProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DABFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 200,
      height: 200,
    },
    txt: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 50,
      marginTop: 10,
      
    }
  });

export default SplashScreen;

