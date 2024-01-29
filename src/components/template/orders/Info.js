import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {Colors,Mixins} from '../../../styles/index'
import Icon from 'react-native-vector-icons/Ionicons'
 import TxtLinear from '../../organism/orders/TextLinear';

const HeaderOrder = () => {
  return (
    <View style={styles.viwContainer}>
     
       <View style={styles.viwDetail}>
         <View style={styles.headerBtn}>
         <View>
         <Text style={styles.nameTxt}>
               {`stripId :`}
          </Text>
          <Text style={styles.names}>
               {`22998800`}
          </Text>
         </View>
          <Icon name={"settings-outline"} size={16} />
         </View>
         <View style={styles.viwName}>
          <Text style={styles.nameTxt}>
               {`strip E-mail `}
          </Text>
          <Text style={styles.names}>
               {`strip@gmail.com `}
          </Text>
         </View>

         <View style={styles.viwName}>
          <Text style={styles.nameTxt}>
               {`Card Info : `}
          </Text>
          <Text style={styles.names}>
               {`522 **** 352 `}
          </Text>
         </View>
         <View style={styles.viwName}>
          <Text style={styles.nameTxt}>
               {`Verfication :  `}
          </Text>
          <Text style={{fontSize:17,color:Colors.GREEN_LIGHT}}>
               {`Verified `}
          </Text>
        
         </View>
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

  imgViw:{
  justifyContent:'center'
  },
  viwDetail:{
    flex:1,
    paddingLeft:20,

    
  },
  headerBtn:{
     flexDirection:'row',
     justifyContent:'space-between'


  },
  // detailViw:{
  //   backgroundColor:'blue'
  // },
  titleName:{
    fontSize:16,
    fontWeight:'bold',
  },
  names:{
    fontSize:16,
  },

  viwName:{
    marginTop:8
  },
  viwAddress:{
    marginTop:5
  },
  viwSubs:{
    marginTop:5
  },
  nameTxt:{
    fontSize:12,
    color:Colors.GRAY_MEDIUM
  }

})

export default HeaderOrder