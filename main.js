import Exponent from 'exponent'
import React from 'react'
import Spinner from './src/components/Spinner'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
} from 'react-native'

class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./resources/background.png')} style={styles.backgroundImage}>
          <Spinner />
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
    marginLeft: 25,
  }
})

Exponent.registerRootComponent(App)
