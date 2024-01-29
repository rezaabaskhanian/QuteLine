import { View, Text,StyleSheet ,KeyboardAvoidingView,Image,ScrollView,ActivityIndicator,ToastAndroid} from 'react-native'
import React ,{useEffect,useState}from 'react'
import Login from '../../../assets/images/svg/login.svg'
import Title from '../../molecules/Title'
import {Colors} from '../../../styles/index'
import CheckBoxPhone from '../../organism/auth/CheckBoxPhone'
import BtnLogin from '../../organism/auth/BtnLogin'
import LineText from '../../organism/auth/LineText'
import {LoginPhone,VerifyCode} from '../../../services/authServices/AuthServices'
import CheckboxVerify from '../../organism/auth/CheckboxVerify'
import { useNavigation } from '@react-navigation/native';
import CheckBoxCode from '../../organism/auth/CheckboxCodeCountry'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ReCaptchaV3 from '@haskkor/react-native-recaptchav3'


const Main = () => {
    const navigation = useNavigation();
   const [phone, setPhone] = useState('')
   const [showCode, setShowCode] = useState(false)
   const [verifyCodes, setVerifyCode] = useState('')
   const [showActive, setShowActive] = useState(false)
   const [colorBg,setColorBg] = useState(null)
   const[codeValue,setCodeValue]=useState('')
   const[captcha,setCodeCaptcha]=useState(null)
  
   
    function Submit(){
        // setShowMessage(true);
        // setValid(checkValid ? checkValid : false);
        setShowActive(true)
        LoginPhone(phone,captcha).then((status)=>{
             console.log(status,'statusstatus')
        setShowActive(false)
        
        if(status==200) 
         {
             setShowCode(true)
         }else{
             ToastAndroid.show('Phone is Wrong',ToastAndroid.SHORT)
         }
        })
    }
  
    function Verify(){
        VerifyCode(phone,verifyCodes).then((data)=>{
            setShowActive(true)
            if (data.data) {
                setShowActive(false)
                setColorBg(Colors.GREEN_LIGHT)
                AsyncStorage.setItem('userData',JSON.stringify(data.data))
                setTimeout(() => {
                    navigation.navigate('Home')
                }, 1500);
            } else{
                setShowActive(false)
                setColorBg(Colors.RED)
                setTimeout(() => {
                    setColorBg(Colors.GRAY_DARK)
                }, 1500);
            }
        })
    }
    function Register(){
        console.log('register')
    }
    function GetPhone(e){
        
        setPhone(e)
    }
    function GetVerify(e){
        setVerifyCode(Object.values(e).join(''))
    }
  return (
    <KeyboardAvoidingView style={styles.container} >

<ReCaptchaV3
  captchaDomain={'https://dev.vitalize.dev'}
  siteKey={'6LcgWhgnAAAAALWbHfQ2nU31xjPMG9RBocIAtuE7'}
  onReceiveToken={(token) => setCodeCaptcha(token)}/>
          {
                showActive ?
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                          <ActivityIndicator size="large" color={Colors.GREEN_LIGHT} />
                </View>
                :
                <>
        <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.viwLogin}>
                <Login height="200 px" width="250 px" />  
                </View>
               <Title titleText="Login" style={styles.title} />
               {
           showCode ?
             <CheckboxVerify onChangeVerify={GetVerify}  bgColor={colorBg}/> 
                    :
                  <View style={styles.checkedPhone}>
                  {/* <CheckBoxPhone onChange={GetText} />  */}
                    <CheckBoxCode onChange={GetPhone} />
                  </View>
               }
             
          <BtnLogin label={showCode? 'Verify' :'Login'} onPress={showCode?Verify :Submit} style={[styles.btnLog,{marginBottom:30 }]}/>
        { !showCode && <LineText textSmall ='Don’t have an account ? '  textLarge ='Register' onPress={Register}style={styles.LineTxt}/>} 
         </ScrollView>
         </>
         }
    </KeyboardAvoidingView>
  )
}

export default Main

const styles = StyleSheet.create({

    container:{
    flex:1,
    //   paddingHorizontal:30,
    //    alignItems:'center',
    
    },
    scroll:{
  
        justifyContent:'space-between'
    },
    checkedPhone:{
       
       paddingHorizontal:30
    },

    title:{
        
        marginTop:25,
        fontSize:20,
        fontWeight:'bold',
        color:Colors.GRAY_DARK,
        marginHorizontal:30,
        
    },
    LineTxt:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:30,
       
       
    },
    btnLog:{
        marginRight:30,
        // marginBottom:50
    },
    viwLogin:{
        alignItems:'center'
    },
   

})