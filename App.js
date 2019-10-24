/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 // ctrl + alt + t
 // sudo chmod 777 /dev/kvm
 // cd Android/Sdk/tools
 // emulator -avd Pixel_3a_API_27 

  // sudo react-native start
  // sudo react-native run-android

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';


export default class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      usuarios: []
    }
  }

  componentDidMount() {
    let usuarios = []
    for (let index = 0; index < 10; index++) {
      let usuario = {}
      usuario.nome = "Nome "+index
      usuario.fone = index+"0000"+index
      usuario.genero = index % 2 == 0 ? "M" : "F"
      usuarios.push(usuario)
    }
    this.setState({
      usuarios: usuarios
    })
  }
  
  render() {
    return(
      <View style={{
        flex: 1, 
        backgroundColor: '#5F36C2',
        margin: 16
      }}>
        <Text style={{
          color: '#FFF',
          fontWeight: 'bold',
          fontSize: 18,
          marginStart: 16,
          marginTop: 10
        }}>Texto de teste</Text>

        <FlatList 
          style={{flex: 1}}
          data={this.state.usuarios}
          renderItem={({item}) => 
          <View style={{
            height: 100,
            backgroundColor: '#FFF',
            margin: 6,
            borderWidth: 2,
            borderColor: '#FF5555',
            borderRadius: 15
          }}>
  
              <View style={{
                flex: 1,
                margin: 16,
                backgroundColor: '#666',
                flexDirection: 'row'
              }}>
  
                  <Text style={{
                    flex: 1, 
                    color: '#FFF'}}>{item.nome}</Text>
                
                  <Text style={{
                    flex: 1, 
                    color: '#FFF', 
                    alignSelf: 'flex-end'}}>{item.genero}</Text>
                
              </View>
  
              <View style={{
                flex: 1,
                margin: 16,
                backgroundColor: '#CCC'
              }}>
                <Text style={{color: '#FFF'}}>{item.fone}</Text>
              </View>
  
          </View>
          }
        />
        

      </View>
    )
  }
}




/*
<View style={{
          height: 100,
          backgroundColor: '#FFF',
          margin: 6,
          borderWidth: 2,
          borderColor: '#FF5555',
          borderRadius: 15
        }}>

            <View style={{
              flex: 1,
              margin: 16,
              backgroundColor: '#666',
              flexDirection: 'row'
            }}>

                <Text style={{
                  flex: 1, 
                  color: '#FFF'}}>Nome</Text>
              
                <Text style={{
                  flex: 1, 
                  color: '#FFF', 
                  alignSelf: 'flex-end'}}>M</Text>
              
            </View>

            <View style={{
              flex: 1,
              margin: 16,
              backgroundColor: '#CCC'
            }}>
              <Text style={{color: '#FFF'}}>Fone</Text>
            </View>

        </View>


*/


