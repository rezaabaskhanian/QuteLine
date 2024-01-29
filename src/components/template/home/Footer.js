import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Footer = (props) => {
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#20C5A9' ,'#19364A']} 
  
    style={[styles.linearGradient,props.styleFooter]}>
        <View style={styles.btn}>
          <Text style={{color:'#fff',fontSize:11}}>
          Power by
          </Text>
          <Text style={{color:'#fff',fontSize:20,marginLeft:5}}>
          Vitali 
          </Text>
          <Image source={require('../../../assets/images/Lightning.png')} style={{width:20,height:20,}}/>
          <Text style={{color:'#fff',fontSize:20,}}>
         e
          </Text>
        </View>
        
        </LinearGradient>
  )
}

export default Footer

const styles=StyleSheet.create({
    btn:{
        flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      paddingLeft: 15,
      paddingRight: 15,
      
      },
     
      linearGradient: {
       justifyContent:'center',
       alignItems:'center',
        paddingLeft: 15,
        paddingRight: 15,
        height:50
       
      },
  })