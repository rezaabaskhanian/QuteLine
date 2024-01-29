import React from 'react'
import {View,StyleSheet} from 'react-native'
import BtnBack from '../organism/BtnBack'
import BtnAdd from '../organism/BtnAdd'

 const Header = (props) => {
  return (
    <View style={[styles.container,props.style]}>
         <BtnBack />
        <BtnAdd onPress={props.addTableBtn}/>
    </View>
  )
}

const styles=StyleSheet.create({
    container : {
       
        flexDirection:'row',
        justifyContent:'space-between'

    }
})

export default Header
