import { StyleSheet,  View,Image,Text,TouchableOpacity} from 'react-native'
import React,{useEffect,useState} from 'react'
import Title  from '../../molecules/Title'
import Logo from '../../../assets/images/svg/LogoHome.svg'

import {Colors,Spacing,Mixins,Typography} from '../../../styles/index'
import BtnGradient from '../../organism/BtnGradienTable'

import Dashborad from '../../../assets/images/svg/Dashboard.svg'
import Orders from '../../../assets/images/svg/Orders.svg'
import Tables from '../../../assets/images/svg/Tabels.svg'
import Menu from '../../../assets/images/svg/menu.svg'

import BtnRegister from '../../molecules/BtnSquare'

import { useNavigation ,useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {GetStore} from '../../../services/authServices/AuthServices'
import Icon from 'react-native-vector-icons/Feather'
  

const Main = (props) => {
  const navigation = useNavigation();
  const isFocused=useIsFocused()
  const [lightBtn,setLightBtn] = useState(false)
  const [stores,setStore] = useState([])
  const [storeName,setStoreName] = useState('Store Name')
  const [showBox,setShowBox]=useState(false)
  useEffect(() => {
    AsyncStorage.getItem('userData').then((res) => {
      const userData = JSON.parse(res)
      if (userData != null) {
        setLightBtn(true)
        console.log(userData,'MainLog')

        GetStore(userData.jwt).then((data)=>{
          if (data && data.stores) {
          setStore(data.stores)
          console.log(data.stores)
          
          // console.log(data.stores,'majid Main')
          }
        })
      }
    })

  }, [isFocused])

  
const openBox =()=>{
  setShowBox(true)
  
}
const selectName=(e,s)=>{
  setShowBox(false)
  setStoreName(e)
  AsyncStorage.setItem('StoreName',s)
}
  
  return (
    <View style={styles.container}>
      
     <Logo height="150 px" width="100 px"/>
     <Title titleText={storeName} style={styles.title}/>

     <TouchableOpacity style={styles.viwStores} onPress={openBox}>
      <Text >
            {`${storeName}`}
      </Text>

      <Icon name={'chevron-down'} size={18} color={Colors.GRAY_DARK}/>
    
     </TouchableOpacity>
     {
      showBox &&
     <View style={{padding:10, width:200,backgroundColor:'white',borderRadius:5}}>
    {
      
        stores.map((data,index)=>{
          return(
            
           <TouchableOpacity key={index} onPress={()=>{selectName(data.name,data.slug)}} style={{ marginTop:index==0 ? 0 :15}}>
             <Text key={data.slug}>
              {`${data.name}`}
            </Text>
           </TouchableOpacity>
          )
        })
      }
     </View>
        }  

     <View style={styles.viwBtnHead}>
     {/* <BtnGradient  onPress={lightBtn ? ()=>navigation.navigate('Dashboards') :null} label={'Dashboard'} */}
     <BtnGradient  onPress={ ()=>navigation.navigate('Dashboards') } label={'Dashboard'}
      firtColor={lightBtn ? '#20c5a9':Colors.GRAY_MEDIUM} endColor={lightBtn? '#19364A': Colors.GRAY_MEDIUM}
      style={styles.txtGradient} styleGradien={styles.btnGradient}>
        <Dashborad height="30 px" width="30 px" style={{color:lightBtn ?'white' :Colors.GRAY_LIGHT}}/>
        </BtnGradient>
      <BtnGradient  onPress={props.onClose} label={'Orders'}
      firtColor={lightBtn ? '#20c5a9':Colors.GRAY_MEDIUM} endColor={lightBtn? '#19364A': Colors.GRAY_MEDIUM}
      style={styles.txtGradient} styleGradien={styles.btnGradient}>
          <Orders height="30 px" width="30 px" style={{color:lightBtn ?'white' :Colors.GRAY_LIGHT}}/>
</BtnGradient>
     </View>

     <View style={styles.viwBtnHead}>
     <BtnGradient  onPress={props.onClose} label={'Menu'}
      firtColor={lightBtn ? '#20c5a9':Colors.GRAY_MEDIUM} endColor={lightBtn? '#19364A': Colors.GRAY_MEDIUM}
      style={styles.txtGradient} styleGradien={styles.btnGradient}>
             <Menu height="30 px" width="30 px" style={{color:lightBtn ?'white' :Colors.GRAY_LIGHT}}/>
        </BtnGradient>
      <BtnGradient  onPress={ lightBtn ? ()=>navigation.navigate('Table'):null  } label={'Tables'}
      firtColor={lightBtn ? '#20c5a9':Colors.GRAY_MEDIUM} endColor={lightBtn? '#19364A': Colors.GRAY_MEDIUM}
      style={styles.txtGradient} styleGradien={styles.btnGradient}>
          <Tables  height="30 px" width="30 px" style={{color:lightBtn ?'white' :Colors.GRAY_LIGHT}}/>
        </BtnGradient>
     </View>

   {
    !lightBtn && <BtnRegister style={styles.register} onPress={()=>navigation.navigate('Auth')}>
      <Title titleText={`Compelete Your Registration`} style={styles.txtRegister}/>
    </BtnRegister>
   }
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container:{ 
      marginBottom:50,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:30,
        fontWeight:'900'
    },
    BtnHomeStyle:{
       backgroundColor:'#939393'
    },
    txtGradient:{
      textAlign:'center',
      marginTop:5,
       fontSize:9
   },
   viwStores:{
    marginVertical:10,
    padding:5,
    flexDirection:'row',
    justifyContent:'space-between',
    width:200,
    borderColor:Colors.BLACK,
    borderRadius:5,
    borderWidth:0.5
   
   },
   btnGradient:{
       width:70,
       height:70,
       borderRadius:20,
       justifyContent:'center',
       alignItems:'center',
   },
   viwBtnHead:{
          width:150,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       marginTop:10,
      
   },
   register:{
    marginTop:20,
    width:180,
    backgroundColor:Colors.GREEN_LIGHT
   },
   txtRegister:{
    fontSize:12,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    color:Colors.WHITE
   }
})