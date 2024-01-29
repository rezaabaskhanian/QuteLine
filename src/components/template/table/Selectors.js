
import React,{useState} from 'react'
import { View,StyleSheet } from 'react-native';
import CheckSelectAll from '../../organism/CheckSelectAll'
import QrTtitle from '../../organism/QrTtitle'
const Selectors =({onPress,toggleCheck,downloadQr})=>{

const [toggleCheckBox, setToggleCheckBox] = useState(false)
// const onSelectAll =(props)=>{
//    setToggleCheckBox(!toggleCheckBox)
//    console.log('onSelectAll',toggleCheckBox)
//  }
return(
        <View style={styles.selcetors}>
         <CheckSelectAll   checked={toggleCheck} onPress={onPress}/>
         <QrTtitle  onPress={downloadQr}/>
        </View>
        )
    }

    const styles=StyleSheet.create({
        selcetors:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:7
           }
    })

    export default Selectors