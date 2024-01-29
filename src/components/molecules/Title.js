import React from 'react'
import Text from '../atoms/Text'



 const Title = (props) => {
  return (
    <Text style={props.style}>
        {props.titleText}
    </Text>
  )
}

export default Title