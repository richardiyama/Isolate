import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Block} from './components';
import {AppLoading, Asset} from 'expo';
import Navigation from './navigation';
//import * as constants from './constants';

const images = [
  require('../assets/icons/clothes.png'),
  require('../assets/icons/apps.png'),
  require('../assets/icons/electronics.png'),
  require('../assets/icons/furnitures.png'),
  require('../assets/icons/plastics.png'),
  require('../assets/icons/automobile.png'),
  require('./assets/images/clothes_1.png'),
  require('./assets/images/clothes_2.png'),
  require('./assets/images/clothes_3.png'),
  require('./assets/images/clothes_4.png'),
  require('./assets/images/clothes_5.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
]
export default class App extends Component{
  state = {
    isLoadingComplete: false,
  }

  handleResourcesAsync = async () => {
    const cacheImages = images.map(img => {

      return Asset.fromModule(image).downloadAsync();
    })

    return Promise.all(cacheImages);
  }

  render() {
    if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen){
     return(
       <AppLoading 
       startAsync={this.handleResourcesAsync}
       onError = {error => console.warn(error)}
       onFinish= {() => this.setState({isLoadingComplete:true})}
       />
     )
    }
  
  return (
    <View style={styles.container}>
     <Navigation/>
    </View>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


