import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '../../../styles/index'

const LineText = (props) => {
  return (
    <View style={[styles.container,props.style]} >
      <Text style={styles.txtSmall}>
        {props.textSmall}
      </Text>
     <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.text}>
          {props.textLarge}
        </Text>
     </TouchableOpacity>
    </View>
  )
}

export default LineText

const styles = StyleSheet.create({
    container :{
      
      flexDirection:'row'
    },
    txtSmall:{
        fontSize: 12,
        color: Colors.GREEN_DARK,
    },
   
    textLarge:{
        fontSize: 18,
        color: Colors.GRAY_LIGHT,
    }

})