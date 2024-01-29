import React from 'react'
import { TouchableOpacity } from 'react-native';

const TouchaOpacity = (props) => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
        {props.children}
    </TouchableOpacity>
  )
}

export default TouchaOpacity