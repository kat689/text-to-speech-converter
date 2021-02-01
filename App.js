import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      seech: '',
    };
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor={'blue'}
          centerComponent={{
            text: 'SPEECH CONVERTER',
            style: { color: 'white', fontSize: 20 },
          }}
        />
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://whjr-v2-prod-bucket.s3.ap-south-1.amazonaws.com/12ef7fe7-c828-4378-a499-016fb971bc78.png',
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ seech: text });
          }}
          value={this.state.text}
        />
        <Text style={styles.text}>Type the Word</Text>
        <View style={styles.container}>
          <TouchableOpacity
            style={{
              backgroundColor: 'light green',
              width: 200,
              alignSelf: 'center',
              borderRadius: 5,
            }}
            onPress={() => {
              this.state.seech === ''
                ? (Speech.speak('write something in text box'),
                  Alert.alert('write something in text box'))
                : Speech.speak(this.state.seech);
            }}>
            <Text style={styles.text1}>Press to hear some Speech</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: 50,
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: 'green',
    fontSize: 20,
  },
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginTop: 30,
    alignSelf:'center'

  },
});
