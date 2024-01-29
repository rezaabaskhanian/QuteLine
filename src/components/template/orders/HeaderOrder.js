import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {Colors,Mixins} from '../../../styles/index'
import Icon from 'react-native-vector-icons/Ionicons'
 import TxtLinear from '../../organism/orders/TextLinear';

const HeaderOrder = () => {
  return (
    <View style={styles.viwContainer}>
       <View style={styles.imgViw}>
         <Image source={require('../../../assets/images/Mac.png')}/>
       </View>
       <View style={styles.viwDetail}>
         <View style={styles.headerBtn}>
         <Text style={styles.titleName}>
               {`Mac donalds`}
          </Text>
          <Icon name={"settings-outline"} size={16} />
         </View>
         <View style={styles.viwName}>
          <Text style={styles.nameTxt}>
               {`Name : `}
          </Text>
          <Text style={styles.names}>
               {`sam Altman `}
          </Text>
         </View>

         <View style={styles.viwName}>
          <Text style={styles.nameTxt}>
               {`Qutline Address : `}
          </Text>
          <Text style={styles.names}>
               {`Qutline Address `}
          </Text>
         </View>
         <View style={styles.viwName}>
          <Text style={styles.nameTxt}>
               {`Subscription :  `}
          </Text>
         <View style={styles.headerBtn}>
         <TxtLinear > Pro Plan</TxtLinear>
         <Text style={{color:Colors.GRAY_MEDIUM}}>(e.d:March 02,2022)</Text>
         </View>
        
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