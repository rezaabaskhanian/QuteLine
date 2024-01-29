import React from 'react'
import QrIcon from 'react-native-vector-icons/FontAwesome'
import  Text from '../atoms/Text'
import TouchaOpacity from '../atoms/TouchableOpacity'
import { Colors } from '../../styles/index'
import { View ,StyleSheet} from 'react-native'
import Qr from '../../assets/images/svg/qr.svg'


const  QrTtitle=(props)=> {
  return (
    <TouchaOpacity style={styles.container} onPress={props.onPress}>
     
      <Qr height="20 px" width="20 px"/>
      <Text style={styles.txt}>Select items to download QR</Text>
    </TouchaOpacity>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',

    },
    txt:{
        fontSize:12,
        marginTop:3,
        marginLeft:8
    }
})

export default QrTtitle