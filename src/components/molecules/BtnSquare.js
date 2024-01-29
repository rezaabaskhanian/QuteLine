import React from 'react';
import {StyleSheet,View} from 'react-native'
import TouchableOpacity from '../atoms/TouchableOpacity';
import {Colors,Mixins} from '../../styles/index'


const BtnSquare = (props) => {
  return ( 
        <TouchableOpacity style={[styles.card, styles.elevation,props.style]} onPress={props.onPress}>
       {props.children}
    </TouchableOpacity>
  
  )
}

const styles=StyleSheet.create({
   
  card: {  
    backgroundColor: 'white',  
    borderRadius: 8,  
    justifyContent:'center',
    alignItems:'center',
    width: 51,  
    height:51,
   
  },  
  elevation: {  
    shadowColor: Colors.BLACK,  
    elevation: 25,  
  },  
})


export default BtnSquare