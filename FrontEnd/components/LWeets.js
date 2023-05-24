import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { NativeBaseProvider, Box, Center } from "native-base";

export default function Weet() {
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState([]);

  const handleTweet = () => {
    if (tweet.trim() !== '') {
      setTweets([...tweets, tweet]);
      setTweet('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Alguma novidade ?"
          value={tweet}
          onChangeText={(text) => setTweet(text)}
          maxLength={280}
          multiline
        />
        
      </View>
      <Center>
        <TouchableOpacity style={styles.button} onPress={handleTweet}>
            <Text style={styles.buttonText}>Weet</Text>
        </TouchableOpacity>
      </Center>
      <View style={styles.form}>
        <FlatList
          data={tweets}
          renderItem={({ item }) => (
            <View style={styles.tweetContainer}>
              <Text style={styles.tweetText}>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#DABFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  form:
    {
        flex:1,
        backgroundColor:'#c77dff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingEnd: '5%',
        paddingStart: '5%',
    },
  input: {
    flex: 1,
    fontSize: 16,
    maxHeight: 200,
    textAlignVertical: 'top',
  },
  button: {
        marginTop: 10,
        marginBottom:15,
        backgroundColor: '#272932',
        width: '35%',
        borderRadius: 30,
        paddingVertical: 8,
        
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  tweetContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tweetText: {
    fontSize: 16,
  },
});
