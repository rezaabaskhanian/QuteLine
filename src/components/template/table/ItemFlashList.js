import React,{useEffect,useState} from 'react'
import BtnGradient from '../../organism/BtnGradienTable'
import { View,StyleSheet ,Image} from 'react-native';
import CheckBoxSqure from '../../molecules/CheckBoxSqure';
import Title from '../../molecules/Title';
import  Icon  from 'react-native-vector-icons/Entypo';
import  IconScan  from 'react-native-vector-icons/Ionicons';
import  IconPerson  from 'react-native-vector-icons/Feather';
import BtnSquare from '../../molecules/BtnSquare';
import { Colors,Mixins } from '../../../styles/index';
import Text from '../../atoms/Text'
import Scan  from '../../../assets/images/svg/scan.svg'
import Link from '../../../assets/images/svg/link.svg'
import Edit from '../../../assets/images/svg/Edit.svg'

 const ItemFlashList=({item,onPress,toggleCheck,onPressEdit,getQrSelected,openLinkTable}) =>{
   
  return (
    <View style={styles.container}>
       
     <View style={styles.btnHeader}>
      <BtnGradient label={item.type} firtColor={'#777777'} endColor={'#383838'} style={styles.txtGradient}/>
       <BtnGradient label={item.openTab?'OpenTab' : null} firtColor={'#466A85'} endColor={'#03CBA2'} styleGradien={styles.btnGradient} style={styles.txtGradient}/> 
     </View>

     <View style={styles.mid}>
    <View style={styles.viwFirst}>
        {/*checked={checked} */}
    <CheckBoxSqure style={styles.checkedBox}  onPress={onPress} checked={toggleCheck}/>
   
     <Title titleText={item.name} style={styles.title}/>
    </View>

    <View style={styles.btns}>
    <BtnSquare style={styles.btnSquare} onPress={openLinkTable}>
        {/* <Icon name={'attachment'} color={Colors.BLUE_DARK} size={15}/> */}
        <Link width="20 px" height="20"/>
        </BtnSquare>
    <BtnSquare style={styles.btnSquare} onPress={getQrSelected}>
    <Scan width="20 px" height="20"/>
    {/* <IconScan name={'scan-circle-outline'} color={Colors.BLUE_DARK} size={15}/> */}
        </BtnSquare>
    <BtnSquare style={styles.btnSquare} onPress={onPressEdit}>
    {/* <IconPerson name={'edit-3'} color={Colors.BLUE_DARK} size={15}/> */}
   <Edit width="20 px" height="20"/>
   </BtnSquare>
    </View>
     </View>
 
     <View style={styles.footer}>
        <IconPerson name={'users'} color={Colors.GRAY_MEDIUM} size={15}/>
        <Text style={styles.txtFooter}>
            {`${item.capacity}`}
        </Text>

     </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.WHITE,
        borderRadius:8,
        marginVertical:10,
        padding:14
    },
    btnHeader :{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    mid:{
       
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:14
    },
    txtGradient:{
    //    textAlign:'center',
       flexDirection:'row',
        fontSize:11,
       
    },
    btnGradient:{
        marginLeft:10,
        elevation:10,
        
    },
    title:{
        color:Colors.BLACK,
        marginLeft:20,
        fontSize:15,
       
    },
    viwFirst:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
      
    },
    btns:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    btnSquare:{
        width:30,
        height:30,
        borderRadius:30/2,
        // shadowColor: Colors.WHITE,
        elevation:10
        
    },
    checkedBox:{
        
    },
    footer:{
        flexDirection:'row',
        paddingLeft:50,
        marginTop:10
    },
    txtFooter:{
        marginLeft:5,
        color:Colors.GRAY_MEDIUM
    }
})

export default ItemFlashList