import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  TouchableWithoutFeedback,
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
      easing: Easing.out(Easing.ease),
      duration: Math.floor((Math.random() * 3000) + 2000),
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
        <View style={styles.spinner}>
          <Animated.View style={ {transform: [{rotate: interpolatedRotateAnimation}]} }>
            <Image source={ require('../../resources/wheel.png') } />
          </Animated.View>
        </View>
        <TouchableWithoutFeedback
          onPress={ () => { this.startSpin() } }>
          <View style={ styles.button } />
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    marginTop: 199,
    marginLeft: -30,
  },
  pointer: {
    marginBottom: -10,
    zIndex: 1,
  },
  button: {
    height: 100,
    width: 100,
    marginTop: 100,
    marginLeft: -40,
    backgroundColor: 'transparent'
  }
})
