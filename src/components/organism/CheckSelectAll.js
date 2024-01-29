import React from 'react'

import Text from '../atoms/Text'
import {View,StyleSheet} from 'react-native'
import {Mixins,Colors,Typography,Spacing} from '../../styles/index'
import CheckBoxSqure from '../molecules/CheckBoxSqure'
 const  checkSelectAll=(props)=> {
  
  return (
    <View style={styles.container}>
      <CheckBoxSqure  {...props} />
      <Text style={styles.txt}>
        {`Select all`}
      </Text>

    </View>
  )
}

const styles=StyleSheet.create({
    container:{
       
        flexDirection:'row',
       height:Mixins.scaleSize(22)
    },
    txt:{
        fontSize:12,
        color:Colors.GRAY_DARK,
        alignItems:'center',
        justifyContent:'center',
        marginTop:2,
        paddingHorizontal:10,
    }

})

export default checkSelectAll


