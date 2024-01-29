import React from 'react';
import {StyleSheet,BackHandler} from 'react-native'
import {Colors,Spacing,Mixins,Typography} from '../../../styles/index'
import BtnSquare from '../../molecules/BtnSquare';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from '../../atoms/Text'

import Logo from '../../../assets/images/svg/LogoHome.svg'
const Header = () => {

  

  return (
    <BtnSquare  style={styles.btn}>
        <Logo height='30 px' width="30 px"/>
    </BtnSquare>
   
  )
}

const styles=StyleSheet.create({
  btn:{
    backgroundColor:'transparent',
    margin:10,
    elevation:0
    },
   
})


export default Header