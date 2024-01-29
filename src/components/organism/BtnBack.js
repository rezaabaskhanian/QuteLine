import React from 'react';
import {StyleSheet} from 'react-native'
import {Colors,Spacing,Mixins,Typography} from '../../styles/index'
import BtnSquare from '../molecules/BtnSquare';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from '../atoms/Text'
import { useNavigation } from '@react-navigation/native';
const BtnBack = () => {

  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack()
   console.log( navigation,'navigation')
  } 
  return (
    <BtnSquare onPress={handleBack} style={styles.btn}>
       <Icon name="chevron-back" size={25} color={Colors.GREEN_DARK} />
        <Text style={styles.txt}>
            {`Back`}
        </Text>
    </BtnSquare>
   
  )
}

const styles=StyleSheet.create({
  btn:{
    backgroundColor:'#FEFEFE'
    },
    txt:{
       color:Colors.GREEN_DARK,
       fontSize:9,
       marginTop:5

    }
})


export default BtnBack