import React, { useState, useRef,useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as RNLocalize from "react-native-localize";
const App = (props) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const phoneInput = useRef(null);
  // console.log(RNLocalize.getLocales(),'country');

  
  const checkNumber =(e)=>{
console.log(e,'eee')
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* <SafeAreaView style={styles.wrapper}>
          {showMessage && (
            <View style={styles.message}>
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? "true" : "false"}</Text>
            </View>
          )} */}
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            containerStyle = {styles.containerStyle}
            textContainerStyle={styles.txtContainer}
            codeTextStyle={styles.codeTextStyle}
            defaultCode={RNLocalize.getCountry()}
            layout="first"
            onChangeText={(text) => {
              setValue(text);
              
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text)
               props.onChange(text)
               
               
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
            }}
          >
            <Text>Check</Text>
          </TouchableOpacity> */}
        {/* </SafeAreaView> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
     flex: 1,
      backgroundColor: Colors.lighter,
     
    },
    containerStyle:{
      marginTop:30,
       paddingHorizontal:5,
      //  height:65,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:10,
      //  backgroundColor:'blue',
    },
    txtContainer:{
      fontSize:14,
      // height:65,
      backgroundColor:'transparent',
      justifyContent:'center',
      textAlign:'center',
    },
    codeTextStyle:{
   
      fontSize:16,
      justifyContent:'center',
      textAlign:'center',
    },

    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginTop: 20,
      height: 50,
      width: 300,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7CDB8A',
      shadowColor: 'rgba(0,0,0,0.4)',
      shadowOffset: {
        width: 1,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
    buttonText:{
      color: 'white',
      fontSize: 14,
    },
    redColor: {
      backgroundColor: '#F57777'
    },
    message: {
      borderWidth: 1,
      borderRadius: 5,
      padding: 20,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  });
export default App;