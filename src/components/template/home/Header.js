import React from 'react';
import {StyleSheet,BackHandler} from 'react-native'
import {Colors,Spacing,Mixins,Typography} from '../../../styles/index'
import BtnSquare from '../../molecules/BtnSquare';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from '../../atoms/Text'
import { useNavigation } from '@react-navigation/native';
import LogOut from '../../../assets/images/svg/exit.svg'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Header = () => {

  const navigation = useNavigation();
  function handleBack() {
    //navigation.goBack()
BackHandler.exitApp()
AsyncStorage.clear()

  } 
  return (
    <BtnSquare onPress={handleBack} style={styles.btn}>
        <LogOut height='20 px' width="20 px"/>
        <Text style={styles.txt}>
            {`Logout`}
        </Text>
    </BtnSquare>
   
  )
}

const styles=StyleSheet.create({
  btn:{
    backgroundColor:'#FEFEFE',
    margin:10,
    },
    txt:{
       color:Colors.GREEN_DARK,
       fontSize:9,
       marginTop:5

    }
})


export default Header