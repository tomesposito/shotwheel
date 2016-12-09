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
        <Spinner />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

Exponent.registerRootComponent(App)
