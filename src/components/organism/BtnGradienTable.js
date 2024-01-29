import React from 'react';
import {StyleSheet,Image} from 'react-native'
import BtnSquare from '../molecules/BtnSquare';
import {Colors,Spacing,Mixins,Typography} from '../../styles/index'
import Icon from 'react-native-vector-icons/Ionicons';
import Text from '../atoms/Text'
import LinearGradient from 'react-native-linear-gradient';


const BtnGradient = (props) => {
  // function handleBtn() {
  //  console.log( 'handleBtn')
  // } 
  return ( 
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={[props.firtColor,props.endColor]} 
    style={[props.styleGradien,styles.linearGradient,]}>
    <BtnSquare onPress={props.onPress} style={styles.btn}>

    {props.children}
     <Text style={[styles.txt,props.style]}>
         {props.label}
     </Text>
 </BtnSquare>
        </LinearGradient>
  
  )
}

const styles=StyleSheet.create({
  btn:{
    width:50,
    height:25,
    backgroundColor:'transparent'
    },
    txt:{
       color:Colors.WHITE,
       fontSize:9,
    },
    linearGradient: {
     
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
})


export default BtnGradient