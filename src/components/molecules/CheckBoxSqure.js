import React from 'react'
import {StyleSheet,View} from 'react-native'
import TouchaOpacity from '../atoms/TouchableOpacity'
import {Colors,Mixins} from '../../styles/index'
import Icon from 'react-native-vector-icons/Ionicons'

const CheckBoxSqure = (props) => {
  return (
   
    <View>
      <TouchaOpacity  {...props} style={[styles.container,props.style]} >
       
          {props.checked === true ? (
            <View style={styles.checkboxChecked}>
              <Icon name={"checkmark"} size={14} color="#FFFFFF" />
              </View>
              ) : (
                <View style={styles.checkboxUnchecked}>
             </View>
            )}
      </TouchaOpacity>
      </View>
    
  )
}

const styles=StyleSheet.create({
    container:{
       
        flexDirection:'row',
        height:20,
        width: 20,
        borderColor:Colors.GREEN_LIGHT,
        // backgroundColor:'red',
        borderWidth:Mixins.scaleSize(2),
        borderRadius:Mixins.scaleSize(8)
    
    },
    checkboxChecked:{
        flex:1,
        backgroundColor:Colors.GREEN_LIGHT,
        justifyContent:'center',
        alignItems:'center',
      
        
       
    },
    checkboxUnchecked:{
        backgroundColor:Colors.WHITE,
    },
    icon:{

    }
})

export default CheckBoxSqure
