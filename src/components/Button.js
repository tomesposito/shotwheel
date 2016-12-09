import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
export const LIGHT_GRAY_TXT = '#B5BCC0'
export const HIGHLIGHT_BLUE = '#18A4E8'

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 33,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#E5E5E5'
  },
  basePress: {
    backgroundColor: LIGHT_GRAY_TXT,
    borderColor: LIGHT_GRAY_TXT
  },
  iconWrapper: {
    flex: 0,
    paddingRight: 5
  },
  label: {
    flex: 0,
    fontSize: 16,
    color: LIGHT_GRAY_TXT
  },
  labelPress: {
    color: '#fff'
  },
  primary: {
    borderColor: HIGHLIGHT_BLUE,
    backgroundColor: HIGHLIGHT_BLUE
  },
  primaryLabel: {
    color: '#fff'
  },
  primaryPress: {
    backgroundColor: '#fff'
  },
  primaryLabelPress: {
    color: HIGHLIGHT_BLUE
  },
  greyLight: {
    borderWidth: 0,
    backgroundColor: '#919BA1'
  },
  greyLightLabel: {
    color: '#fff'
  },
  greyLightPress: {
    backgroundColor: '#fff'
  },
  greyLightLabelPress: {
    color: '#919BA1'
  },
  borderless: {
    borderWidth: 0
  },
  borderlessPress: {
    backgroundColor: 'transparent'
  },
  borderlessLabelPress: {
    color: HIGHLIGHT_BLUE
  },
  disabled: {
    borderColor: '#89CFE9',
    backgroundColor: '#89CFE9'
  },
  disabledLabel: {
    color: '#DEF6FF'
  }
})

export default class Button extends Component {
  constructor (props) {
    super(props)
    this.state = { pressed: false }
  }

  _handlePress () {
    this.setState({ pressed: true })
  }

  _handleRelease () {
    this.setState({ pressed: false })
  }

  render () {
    const {
      type,
      label,
      icon,
      pressIcon,
      style,
      pressStyle,
      labelStyle,
      pressLabelStyle,
      onPress,
      iconRight
    } = this.props
    const { pressed } = this.state

    const styleStack = [styles.base, style]
    const labelStyleStack = [styles.label, labelStyle]
    const iconElement = pressed ? pressIcon : icon

    if (pressed) {
      styleStack.push(styles.basePress, pressStyle)
      labelStyleStack.push(styles.labelPress, pressLabelStyle)
    }

    if (type === 'borderless') {
      styleStack.push(styles.borderless)

      if (pressed) {
        styleStack.push(styles.borderlessPress)
        labelStyleStack.push(styles.borderlessLabelPress)
      }
    }

    if (type === 'greyLight') {
      styleStack.push(styles.greyLight)
      labelStyleStack.push(styles.greyLightLabel)

      if (pressed) {
        styleStack.push(styles.greyLightPress)
        labelStyleStack.push(styles.greyLightLabelPress)
      }
    }

    if (type === 'primary') {
      styleStack.push(styles.primary)
      labelStyleStack.push(styles.primaryLabel)

      if (pressed) {
        styleStack.push(styles.primaryPress)
        labelStyleStack.push(styles.primaryLabelPress)
      }
    }

    if (type === 'disabled') {
      styleStack.push(styles.disabled)
      labelStyleStack.push(styles.disabledLabel)
    }

    if (!icon) labelStyleStack.push({ textAlign: 'center' })

    return (
      <TouchableWithoutFeedback
        onPress={ onPress }
        onPressIn={ this._handlePress.bind(this) }
        onPressOut={ this._handleRelease.bind(this) }>
        <View style={ styleStack }>
          { icon && !iconRight ? <View style={ styles.iconWrapper }>{ iconElement }</View> : null }
          <Text style={ labelStyleStack }>{ label }</Text>
          { icon && iconRight ? <View style={ [styles.iconWrapper, {paddingRight: 0, paddingLeft: 10}] }>{ iconElement }</View> : null }
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

Button.defaultProps = {
  onPress: Function.prototype
}

Button.propTypes = {
  type: React.PropTypes.string,
  label: React.PropTypes.string,
  icon: React.PropTypes.element,
  iconRight: React.PropTypes.bool,
  pressIcon: React.PropTypes.element,
  onPress: React.PropTypes.func,
  pressStyle: React.PropTypes.number,
  labelStyle: React.PropTypes.number,
  pressLabelStyle: React.PropTypes.number
}
