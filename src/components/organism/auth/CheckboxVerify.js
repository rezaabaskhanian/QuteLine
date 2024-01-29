import { View, Text,StyleSheet,SafeAreaView ,TextInput} from 'react-native'
import React ,{useEffect,useState,useRef}from 'react'
import Input from '../../atoms/TextInput'
import  {Colors}  from '../../../styles/index'
const NUM_INPUTS = 4;



const CheckboxVerify = (props) => {
  const inputRefs = useRef([]);
  const [inputValues, setInputValues] = useState(new Array(NUM_INPUTS).fill(''));
  const [focusedIndex, setFocusedIndex] = useState(null);


  useEffect(() => {
   inputRefs.current[0].focus();
  }, [])


  // useEffect(() => {
   
  //   getHash()
  //     .then(hash => {
  //       console.log(hash,'sdfsdfsdf');
  //     })
  //     .catch(console.log);


  //   startOtpListener(message => {
  //     console.log(message,'sdfsdf')
  //     if (/(\d{4})/g.exec(message)) {
  //       const LOtp =
  //         /(\d{4})/g.exec(message)[1] !== null
  //           ? /(\d{4})/g.exec(message)[1]
  //           : '';
  //           console.log(message,'sdfsdf')
  //           setInputValues(LOtp)
  //       setOtp(LOtp);
  //     }
  //   });
  //   return () => removeListener();
  // }, []);
  

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    props.onChangeVerify(newInputValues);
    focusNextInput(index);
  };

  const focusNextInput = (index) => {
    const nextIndex = index + 1;
    if (nextIndex < NUM_INPUTS) {
      inputRefs.current[nextIndex].focus();
    }
  };

  const handleInputFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleInputBlur = () => {
    setFocusedIndex(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      {Array.from({ length: NUM_INPUTS }, (_, index) => {
        const isFocused = focusedIndex === index;
        return (
          <View key={index} style={[styles.inputContainer, { backgroundColor: isFocused  ? Colors.GRAY_LIGHT  :  inputValues[index] ? Colors.GRAY_LIGHT : Colors.WHITE 
          ,borderColor:props.bgColor}]}>
            <TextInput
              ref={ref => inputRefs.current[index] = ref}
              style={styles.input}
              keyboardType='phone-pad'
              maxLength={1}
              value={inputValues[index]}
              onChangeText={value => handleInputChange(index, value)}
              onFocus={() => handleInputFocus(index)}
              onBlur={handleInputBlur}
            />
          </View>
        );
      })}
    </SafeAreaView>
  );
}

export default CheckboxVerify

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',

    },
    input:{
   
        height:45,
        marginLeft:8,
        fontSize:20,
        
       },

       inputContainer:{
         marginLeft:10,
         marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:5,
        borderWidth:0.5,
        height:40,
        width:40,
       },
     
})




// export default function App() {
//   const [hashFromMethod, setHashFromMethod] = React.useState([]);
//   const [otpFromMethod, setOtpFromMethod] = React.useState('');
//   const [hint, setHint] = React.useState('');
//   const [otp, setOtp] = React.useState('');


//   // using hook - you can use the startListener and stopListener to manually trigger listeners again.
//   const { hash,  timeoutError, stopListener, startListener, } = useOtpVerify();

//   // using methods



//   return (
//     <View style={styles.container}>
//       <View style={styles.resultView}>
//         <Text style={styles.resultHeader}>Using Methods</Text>
//         <Text>Your Hash is: {hashFromMethod}</Text>
//         <Text>Your message is: {otpFromMethod}</Text>
//         <Text>Selected Mobile Number is: {hint}</Text>
//       </View>
//       <View style={styles.resultView}>
//         <Text style={styles.resultHeader}>Using Hook</Text>
//         <Text>Your Hash is: {hash}</Text>
//         <Text>Your otp is: {otp}</Text>
//         <Text>Timeout Error: {String(timeoutError)}</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   resultView: {
//     margin: 10,
//   },
//   resultHeader: {
//     fontSize: 18,
//     marginBottom: 5,
//   },
//   box: {
//     width: 60,
//     height: 60,
//     marginVertical: 20,
//   },
// });