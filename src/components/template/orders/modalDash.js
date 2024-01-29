import { StyleSheet, Text, View ,Modal,SafeAreaView,TouchableOpacity} from 'react-native'
import React from 'react'
import  Icon   from 'react-native-vector-icons/Ionicons'
import Title from '../../molecules/Title'
import { Colors } from '../../../styles'
import IconMatrial from 'react-native-vector-icons/MaterialCommunityIcons'
import IconPerson from 'react-native-vector-icons/MaterialIcons'
import {confirm,ready,approve,reject} from '../../../services/dashServices/DashboardServices'
const modalDash = (props) => {
    const dataTable=props.data

    const acceptBtn=(id)=>{
        // console.log(dataTable.id,'dataTable')
        confirm(id).then((data)=>{
           
            props.onClose()
        })
    }
    const rejectBtn=(id)=>{
        reject(id).then((data)=>{
            
            props.onClose()
        })
    }
    const approveBtn=(id)=>{
        approve(id).then((data)=>{
        
            props.onClose()
        })
    }
    
    const readyBtn=(id)=>{
        ready(id).then((data)=>{
       
            props.onClose()
        })
    }
  return (
    <View>
       
     <Modal
     useNativeDriver={true}
     animationType="slide"
     transparent={true}
     visible={props.modalVisible}
     onRequestClose={props.onClose}
     >
        <View style={styles.container}>
            <View style={styles.head}>
                <Title titleText={props.titleModal} style={styles.title}/>
            <Icon name={'close-circle-outline'} size={25} color={Colors.GRAY_DARK} onPress={props.onClose} style={{alignItems:'flex-end'}}/>
            </View>
            <View  style={styles.lineVetical} />
            <View style={styles.main}>
                <Text>
                    {dataTable?.table ? `Table : ${dataTable.table}`: `${dataTable?.table_name} (# ${dataTable?.order_no} )`}
                </Text>

                <Text style={{color:Colors.BLUE_MEDIUM,marginTop:10}}>
                    {dataTable?.order_type && `${dataTable?.order_type }`}
                </Text>
                <View style={{flexDirection:'row',marginTop:10}}> 
                <IconMatrial name={'clock-time-nine-outline'} size={13} color={Colors.GRAY_MEDIUM}  style={styles.icon}/>
                <Text style={{color:Colors.GRAY_MEDIUM}}>
                    {`${dataTable?.created}`}
                </Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}> 
                <IconPerson name={'person'} size={18} color={Colors.GRAY_MEDIUM}  style={styles.icon}/>
                <Text style={{color:Colors.GRAY_MEDIUM}}>
                    { dataTable?.user ? dataTable.user.username  :`${dataTable?.customer_username}`}
                </Text>
                </View>

                <View style={{flexDirection:'row',marginTop:10}}> 
                <IconPerson name={'phone'} size={18} color={Colors.GRAY_MEDIUM}  style={styles.icon}/>
                <Text style={{color:Colors.GRAY_MEDIUM}}>
                    {dataTable?.user ? dataTable.user.mobile  :`  ${dataTable?.customer_mobile}`}
                </Text>
                </View>
            </View>




            <View style={styles.viwBottom}>
            {
                props.titleModal  =='Approved'?
                
                <TouchableOpacity style={styles.sendBtn} onPress={()=>approveBtn(dataTable.id)}>
                    <Text style={{color:Colors.WHITE}}>
                    { `approved`}
                    </Text>
                
                </TouchableOpacity>
                :

                  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <TouchableOpacity  onPress={()=>acceptBtn(dataTable.id)}
                    style={{backgroundColor:Colors.GREEN,paddingHorizontal:15,paddingVertical:10,borderRadius:10}}>
                            <Text style={{color:Colors.WHITE}}>
                            {`confirm`}
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>readyBtn(dataTable.id)}
                    style={{backgroundColor:Colors.GREEN,paddingHorizontal:15,paddingVertical:10,borderRadius:10}}>
                         <Text style={{color:Colors.WHITE}}>
                            {`ready`}
                        </Text>
                        
                     </TouchableOpacity>

                    <TouchableOpacity onPress={()=>rejectBtn(dataTable.id)}
                    style={{backgroundColor:Colors.RED,paddingHorizontal:15,paddingVertical:10,borderRadius:10}}>
                         <Text style={{color:Colors.WHITE}}>
                            {`reject`}
                        </Text>
                        
                     </TouchableOpacity>


                    </View>
            }
      
           

            </View>
        </View>
        </Modal>
      </View>
  )
}

export default modalDash

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:Colors.WHITE,
        padding:20,
        justifyContent:'space-around',
       

    },
    head:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    lineVetical :{
        borderBottomColor:Colors.GRAY_LIGHT,
                       borderBottomWidth:0.5,
                       marginVertical:15
    },
    title:{
        fontWeight:'bold'
    },
    icon:{justifyContent:'center',marginRight:5},
    main:{flex:1,justifyContent:'center'},
    viwBottom:{flex:1,justifyContent:'flex-end'},
    sendBtn:{alignSelf:'flex-end',backgroundColor:Colors.BLUE_MEDIUM,padding:10,borderRadius:5}
})