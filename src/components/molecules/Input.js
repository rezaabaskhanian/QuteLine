import React from 'react'
import { View,StyleSheet } from 'react-native'
import Text from '../atoms/Text'
import TextInput from '../atoms/TextInput'
import { Colors } from '../../styles/index'
import Icon from 'react-native-vector-icons/FontAwesome5'


const Input = (props) => {
  return (
       <View style={styles.container}>
          <View style={styles.viwBox}>
            <Icon name={props.nameIcon} size={22}/>
            <View style={styles.viwTxt}>
              <Text style={styles.txt}>
              {props.nameInput}
              </Text>
              <TextInput keyboardType={props.type}  value={props.value} onChangeText={props.onChangeText} />
            </View>
          </View>
         </View>
  )
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal:10,
      paddingVertical:5,
      borderWidth:2,
      borderStyle: 'dotted',
      borderColor:Colors.GRAY_LIGHT,
      borderRadius:5,
      marginBottom:10,
     
    },
    viwBox:{
      flexDirection:'row',
      alignItems:'center'
    },

    viwTxt:{
      flex:1,
      marginLeft:5,
      
    },
    txt:{
      color:Colors.GRAY_MEDIUM,
      fontSize:10,
    
    },
   
    
})

export default Input