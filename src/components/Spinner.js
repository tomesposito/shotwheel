import React from 'react'
import Button from './Button'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
} from 'react-native'

export default class Spinner extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      animatedValue: new Animated.Value(0)
    }
  }


  startSpin() {
    let newValue = (Number(JSON.stringify(this.state.animatedValue)) + 200)
    
    Animated.timing(this.state.animatedValue, {
      toValue: Math.floor((Math.random() * 600) + newValue),
      duration: 2000
    }).start()
  }


  render() {
    let { animatedValue } = this.state

    let interpolatedRotateAnimation = animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={styles.container}>
        <Image style={ styles.pointer } source={ require('../../resources/pointer.png') } />
        <Animated.View style={ {transform: [{rotate: interpolatedRotateAnimation}]} }>
          <Image source={ require('../../resources/wheel.png') } />
        </Animated.View>
        <Button
          label='Spin'
          style={ {marginTop: 50, padding: 30} }
          type='primary'
          onPress={ () => { this.startSpin() } } />
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
  pointer: {
    marginBottom: -10,
    zIndex: 1,
  },
})
