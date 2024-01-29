import { View, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {Colors,Mixins} from '../../../styles/index'
import Icon from 'react-native-vector-icons/Ionicons'
import Text from '../../atoms/Text'


const CounterOrders = (props) => {
  return (
    <View style={styles.viwContainer}>
        
        <View >
         <Text style={styles.title}>
           {`Today Orders`}
         </Text>
         <Text style={styles.number}>
          {props.today}
        </Text>
        </View>
        <View >
        <Text style={styles.title}>
          {`Wating Orders`}
         </Text>
         <Text style={styles.number}>
         {props.waiting}
         </Text>
        </View>
        <View >
        <Text style={styles.title}>
           {`New Orders`}
         </Text>
         <Text style={styles.numberNew}>
         {props.newOrders}
            </Text>
        </View>
       
      
    </View>
  )
}

const styles=StyleSheet.create({
  viwContainer:{
    borderRadius:20,flexDirection:'row',
    padding:20,justifyContent:'space-between',
    marginTop:20,backgroundColor:'white'
  },
  title:{
    fontSize:14,
    fontWeight:'bold',
    color:Colors.GRAY_MEDIUM
  },
  number:{
   alignSelf:'center',
   marginTop:5,
    color:Colors.BLUE_DARK,
    fontWeight:'bold',
    fontSize:16,
  },
  numberNew:{
    alignSelf:'center',
    marginTop:5,
     color:Colors.ORANGE,
     fontWeight:'bold',
     fontSize:16,
  }

})

export default CounterOrders