import {SafeAreaView, View,Modal,StyleSheet,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import BtnSquare from '../molecules/BtnSquare'
import  Text from '../atoms/Text'
import Input from '../molecules/Input'
import { Colors } from '../../styles/index'
import  Icon  from 'react-native-vector-icons/Ionicons'
import Title from '../molecules/Title'
import CheckBoxSqure from '../molecules/CheckBoxSqure'
import BtnGradient from '../organism/BtnGradienTable'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TextInput from '../atoms/TextInput'
import {addTable,editTable ,deleteTable } from '../../services/tableServices/TableServices'
import TouchaOpacity from '../atoms/TouchableOpacity'


const ModalTable = (props) => {
  const TableName =[{id:1,name:'Table'},{id:2,name:'Takeaway'},{id:3,name:'Delivery'},{id:1,name:'Pick-Up'}]
  const [tableNamesValue,setTableValue] = useState('')
  const [checkName,setCheckName] = useState(false);

  const [values, setValues] = useState({id:'', tableName: '', typeName: '' ,seatsNumber:''});
  const [checked, setChecked] = useState(false);
  const storeId='123'
  const slug=storeId

  
useEffect(() => {
  const tableData =props.tableData
 
  tableData ? [setValues({id:tableData._id.$oid, tableName:tableData.name , typeName:tableData.type,seatsNumber:tableData.capacity.toString()}),
    setChecked(tableData.openTab)]  : null
  return () => {
    setValues({id:'', tableName: '', typeName: '' ,seatsNumber:''})
  }
}, [props.tableData])
  const onChange=(name, value)=>{
    setValues({
      ...values,
      [name]: value,
    });
  }
  const onPress =()=>{
    setChecked(!checked)
  }
  const addPress =()=>{

    // AsyncStorage.getItem('userData').then((res) => {
    //   const userData = JSON.parse(res)
    //   if (userData != null) {
        props.status=='add'? addTable(values.tableName,slug,values.typeName,values.seatsNumber,checked?true:false).then((res)=>{
          console.log(res,'ressss')
          props.onClose()
        })
         :
         editTable(values.id,values.tableName,slug,values.typeName,values.seatsNumber,checked?true:false).then((res)=>{
          props.onClose()
          
         })
       
     
    //   }
    // })
  }
 
  const deletePress =()=>{
    deleteTable(values.id).then((res)=>{
      console.log(res,'sssresss')
      props.onClose()
    })
  }
  return (
    <SafeAreaView>

    <Modal
    useNativeDriver={true}
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={props.onClose}>
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <BtnSquare style={styles.btnSquare} onPress={props.status=='add'?props.onClose :deletePress}>
                    <Icon name={props.status=='add'?'close' :'trash-outline'} size={16} color={props.status=='add' ?'black' :'red'}/>
                    </BtnSquare>
            </View>
            <View style={styles.title}>
                <Title titleText={props.status=='add'? 'Add New Table' : `Update ${values.tableName}`} style={styles.txtTitle}/>
                <View style={styles.line}/>
            </View>
            <View style={styles.viwInput}>
            <Input nameIcon={'hashtag'} nameInput={`Table Name`} value={values.tableName} onChangeText={(text)=>onChange('tableName',text)} />
            <View style={styles.ViewDrop}>
                  
                    <View style={{flexDirection:'row'}}>
                    <Icon name={'bookmark'} size={22} style={{marginTop:10}}/>
                    <View>
                    <Text style={{color:Colors.GRAY_MEDIUM,fontSize:10,marginLeft:2}}>{'Table Type'}</Text>
                    <Text style={{color:Colors.BLACK,fontSize:14,marginLeft:2,marginVertical:5}}>{values.typeName}</Text>
                    {
                      checkName &&
                      TableName.map((item,i)=>{
                        return  <View key={i} style={{flex:1,flexDirection:'column',alignSelf:'center',justifyContent:'center',alignItems:'center',marginBottom:5}}>
                            <TouchaOpacity onPress={()=>(onChange('typeName',item.name),setCheckName(false))}>
                            <Text  style={{color:Colors.GRAY_DARK,fontSize:12,marginLeft:2,marginTop:5}}>{item.name}</Text>
                            </TouchaOpacity>
                        </View>
                      })
                      }
                    </View>
                    
                    </View>
              <Icon name={'chevron-down'} size={16} color={'gray'} onPress={()=>setCheckName(!checkName)} style={{alignItems:'center'}}/>
            </View>

           

            {/* <Input nameIcon={'bookmark'} nameInput={`Table Type`} value={values.typeName} onChangeText={(text)=>onChange('typeName',text)}/> */}
            <Input type={'numeric'} nameIcon={'users'} nameInput={`Table Seats`} value={values.seatsNumber} onChangeText={(text)=>onChange('seatsNumber',text)}/>
            </View>

            <View style={styles.viwFooter}>
              <View style={styles.viwCheck}>
              <CheckBoxSqure style={styles.checkedBox}  checked={checked} onPress={onPress}/>
              <Text style={styles.txtTable}>
                {'Open Table'}
              </Text>
              </View>

              <View style={styles.viwFooterBtn}>
             
                  <BtnGradient onPress={props.onClose} label={'Cancel'} firtColor={Colors.BLACK} endColor={Colors.BLACK} style={styles.txtGradient}/>
                  <BtnGradient onPress={addPress} label={props.status=='add' ? 'Add' :'Update'} firtColor={'#466A85'} endColor={'#03CBA2'} styleGradien={styles.btnGradient} style={styles.txtGradient}/> 
               </View>
          
            </View>

            </ScrollView>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:0.5,
        bottom: 0, 
    position: 'absolute',
        backgroundColor:  'white',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        height: '90%',
        width: '100%',
        paddingHorizontal: 20,
        // marginTop: 180,
        
    },
    header:{
        alignItems:'flex-end',
        paddingTop:10
    },
    btnSquare:{
       height:36,
       width:50 ,
       backgroundColor:Colors.GRAY_LIGHT,
       elevation: 0, 
    },
    title:{
        paddingTop:10
    },
    txtTitle:{
      fontWeight:'700',
      fontSize:18
    },
    line:{
      borderBottomColor: Colors.GRAY_LIGHT,
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginTop:10
    },
    viwInput:{
      marginTop:20,
    },

    viwFooter:{
      marginTop:10,
      marginBottom:20

    },
    viwCheck:{
      flexDirection:'row'
    },
    txtTable:{
      marginLeft:5,
      fontSize:14,
      fontWeight:'700'
    },
    viwFooterBtn :{
      flexDirection:'row',
      justifyContent:'flex-end',
      marginTop:30
  },
  txtGradient:{
    textAlign:'center',
    flexDirection:'row',
     fontSize:12
 },
 ViewDrop:{paddingHorizontal:10,
  paddingVertical:5,
  borderWidth:2,
  borderStyle: 'dotted',
  borderColor:Colors.GRAY_LIGHT,
  justifyContent:'space-between',
  alignItems:'center',
  flexDirection:'row',
  borderRadius:5,
  marginBottom:10},
 btnGradient:{
     marginLeft:20
 },
  });

export default ModalTable