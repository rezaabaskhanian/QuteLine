import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import BtnLogins from '../../molecules/BtnSquare'
import Title from '../../molecules/Title'
import { Colors } from '../../../styles/index'

const BtnLogin = (props) => {
  return (
    <View style={[styles.container,props.style]}>
        <BtnLogins style={styles.register} onPress={props.onPress}>
        <Title titleText={props.label} style={styles.txtVerify}/>
        </BtnLogins>
    </View>
  )
}

export default BtnLogin

const styles = StyleSheet.create({  
    container :{
        flex:1,
    marginTop:30,
    alignItems:'flex-end',
    },
    register:{
        backgroundColor:Colors.GREEN_LIGHT,
        width:100,
       
    },
    txtVerify:{
        color:Colors.WHITE,
        
    }

})

