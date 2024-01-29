import { View, Text ,StyleSheet,SafeAreaView} from 'react-native'
import React,{useEffect,useState} from 'react'
import Flag from '../../../assets/images/svg/Flag.svg'
import { Colors } from '../../../styles/index'
import Input from '../../atoms/TextInput'


const CheckBoxPhone = (props) => {
  const [value, setValue] = useState('')
  const onChangeText = (text) => {
    setValue(text)
    props.onChange(text)
  }
  return (
    
    <SafeAreaView style={[styles.container,props.style]}>
      <View style={styles.viwCon}>
   
      {/* <Flag width={15} height={15}/>
     <Text style={styles.text}>
       +1
     </Text> */}
     <View style={styles.lineVerticall}/>
      </View>
       <Input keyboardType='phone-pad' maxLength={13} value={value} onChangeText={onChangeText} style={styles.checkBox}/>
    </SafeAreaView>
  )
}

export default CheckBoxPhone

const styles = StyleSheet.create({

    container:{
  flex:1,
       

    },
    viwCon:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:50,
        
    },
    lineVerticall:{
        borderStyle: 'solid',
        height:30,
        borderLeftWidth:0.5,
        borderColor:Colors.GRAY_MEDIUM
       },
       checkBox:{
        flex:1,
        marginLeft:10,height:35
       }
})