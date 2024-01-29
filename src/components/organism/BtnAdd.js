import React from 'react';
import {StyleSheet,Image} from 'react-native'
import BtnSquare from '../molecules/BtnSquare';
import {Colors,Spacing,Mixins,Typography} from '../../styles/index'
import Icon from 'react-native-vector-icons/Ionicons';
import Text from '../atoms/Text'
import Tables from '../../assets/images/svg/Tabels.svg'
const BtnAdd = (props) => {
  
  return (
    <BtnSquare {...props} style={styles.btn}>
       {/* <Image source={require('../../assets/images/Add.png')} style={styles.img}/> */}
       <Tables   height="30 px" width="30 px" style={{color: '#436981'}}/>
        <Text style={styles.txt}>
            {`add`}
        </Text>
       
    </BtnSquare>
   
  )
}

const styles=StyleSheet.create({
  btn:{
  backgroundColor:'#FEFEFE'
  },
  txt:{
     color:Colors.BLACK,
     fontSize:9,
     marginTop:5
  },
  img:{
    height: 20,
    width: 20,
  }
})

export default BtnAdd