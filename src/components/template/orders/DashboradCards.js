import { StyleSheet,  View ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Title from '../../molecules/Title'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../../../styles'
import Text from '../../atoms/Text'
import moment from 'moment';
import IconHash from 'react-native-vector-icons/FontAwesome5'
import ModalDash from './modalDash'

const DashboradCards = (props) => {
  const data =props.data

  const CloseModal =()=>{
   setShowModal(false)
 
  }
  const OpenModal=(e,t)=>{
    setShowModal(true)
    setDataModal(e)
    setTitleModal(t)
  }
  const [showModdal,setShowModal]=useState(false)
  const [dataModal,setDataModal]=useState(null)
  const [titleModal,setTitleModal]=useState(null)

  
  return (
    <View style={styles.conatiner}>
      <ModalDash onClose={CloseModal} modalVisible={showModdal} data={dataModal} titleModal={titleModal}/>
        <Title titleText={props.Title} style={{fontSize:16,fontWeight:'bold',...props.styleTitle}}/>
        

        {
          props.newOrders &&
               [
              <View style={{flexDirection:'row'}}>
                  <Icon name={'play'} size={20} color={Colors.GRAY_DARK}  style={{alignItems:'center'}}/>
                <Text style={styles.headtitle}>
                  {props.headTilte}
                </Text>
            </View>,
            
          props.paid.map((res,i)=>{
           return (
             <>
          <View style={styles.viwDetail} key={res?.id}>
                <View style={styles.viwDetailMain}>
                <Text style={styles.date}>
              {res.table_name}
           </Text>
           <Text style={styles.status}>
           {res.order_type}
         
           </Text>
        <View style={{flexDirection:'row'}}>
        <IconHash name={'hashtag'} size={11} color={Colors.GRAY_MEDIUM}  style={{justifyContent:'center',marginRight:5,marginTop:5}}/>
        <Text style={styles.date}>
           {res.order_no}
           </Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Icon name={'clock-time-nine-outline'} size={13} color={Colors.GRAY_MEDIUM}  style={{justifyContent:'center',marginRight:5,marginTop:5}}/>
        <Text style={{color:Colors.GRAY_MEDIUM}}>
           {moment(res.created).format('h:mm:ss a')}
            </Text>
        </View>

         
          </View>

          <TouchableOpacity style={[styles.Btn,props.styleBtnStatus]} onPress={()=>OpenModal(res,'Process')}>
            <Text style={styles.titleBtn}>
              {'Process'}
            </Text>
          </TouchableOpacity>  
          </View>
          <View
                     style={{
                       borderBottomColor:Colors.GRAY_LIGHT,
                       borderBottomWidth:0.5,
                       marginVertical:15
                     }}
                   />
          </>
           )
          })
          ,
          <View style={{flexDirection:'row'}}>
             <Icon name={'play'} size={20} color={Colors.GRAY_DARK}  style={{alignItems:'center'}}/>
            <Text style={styles.headtitle}>
              {props.headTitleTwo}
            </Text>
            </View>,
          props.unpaid.map((res,i)=>{
            return (
              <>
                <View style={styles.viwDetail} key={Number(i)}>
                <View style={styles.viwDetailMain}>
          <Text style={styles.date}>
              {res.table_name}
           </Text>
           <Text style={styles.status}>
           {res.order_type}
           </Text>
        <View style={{flexDirection:'row'}}>
        <IconHash name={'hashtag'} size={11} color={Colors.GRAY_MEDIUM}  style={{justifyContent:'center',marginRight:5,marginTop:5}}/>
        <Text style={styles.date}>
           {res.order_no}
           </Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Icon name={'clock-time-nine-outline'} size={13} color={Colors.GRAY_MEDIUM}  style={{justifyContent:'center',marginRight:5,marginTop:5}}/>
        <Text style={{color:Colors.GRAY_MEDIUM}}>
           {moment(res.created).format('h:mm:ss a')}
            </Text>
        </View>
        <TouchableOpacity style={{...styles.Btn,backgroundColor:Colors.GRAY_MEDIUM}} >
            <Text style={styles.titleBtn}>
              {'Wating'}
            </Text>
          </TouchableOpacity> 
                </View>
                <View
                     style={{
                       borderBottomColor:Colors.GRAY_LIGHT,
                       borderBottomWidth:0.5,
                       marginVertical:15
                     }}
                   />
                </View>
              </>
            )
          })
          
        ]

           

        }
            {
             props.waiting && 
             data.map((res,i)=>{
              return (
                <>
          
                <View style={styles.viwDetail} key={Number(i)}>
                <View style={styles.viwDetailMain}>
              <Text style={styles.date}>
              {res.table_name}
           </Text>
           <Text style={styles.status}>
           {res.order_type}
         
           </Text>
        <View style={{flexDirection:'row'}}>
        <IconHash name={'hashtag'} size={11} color={Colors.GRAY_MEDIUM}  style={{justifyContent:'center',marginRight:5,marginTop:5}}/>
        <Text style={styles.date}>
           {res.order_no}
           </Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Icon name={'clock-time-nine-outline'} size={13} color={Colors.GRAY_MEDIUM}  style={{justifyContent:'center',marginRight:5,marginTop:5}}/>
        <Text style={{color:Colors.GRAY_MEDIUM}}>
           {moment(res.created).format('h:mm:ss a')}
            </Text>
        </View>
              </View>  
              <TouchableOpacity style={[styles.Btn,props.styleBtnStatus]} disabled={true}>
            <Text style={styles.titleBtn}>
              {'waiting'}
            </Text>
          </TouchableOpacity>       
            </View>
                     <View
                     style={{
                       borderBottomColor:Colors.GRAY_LIGHT,
                       borderBottomWidth:0.5,
                       marginVertical:15
                     }}
                   />
                         </>
               ) }) 
            }

{
             props.callstack && 
             data.map((res,i)=>{
              return (
                <>
          
                <View style={styles.viwDetail} key={Number(i)}>
                <View style={styles.viwDetailMain}>
              <Text style={styles.date}>
              {res.table_name}
           </Text>
           <Text style={styles.status}>
           {res.table}
         
           </Text>
        
        <View style={{flexDirection:'row'}}>
        <Text style={{color:Colors.BLUE_MEDIUM}}>
           {'Created At : '}
            </Text>
            <Text style={{color:Colors.BLUE_MEDIUM}}>
           { moment(res.created, "YYYYMMDD").fromNow()}
          
            </Text>
        </View>

        <View style={{flexDirection:'row'}}>
        <Text style={{color:Colors.BLUE_MEDIUM}}>
           {'Approved At:  '}
            </Text>
            <Text style={{color:Colors.BLUE_MEDIUM}}>
           {res.approved_at &&  moment(res.approved_at, "YYYYMMDD").fromNow()}
          
            </Text>
        </View>
              </View>  
              <TouchableOpacity style={[styles.Btn,props.styleBtnStatus]} onPress={()=>OpenModal(res,'Approved')}>
            <Text style={styles.titleBtn}>
              {'Approved'}
            </Text>
          </TouchableOpacity>       
            </View>
                     <View
                     style={{
                       borderBottomColor:Colors.GRAY_LIGHT,
                       borderBottomWidth:0.5,
                       marginVertical:15
                     }}
                   />
                         </>
               ) }) 
            }

           
          {/* { 
           props.status &&
           <>
          <Text style={styles.status}>
            {props.OrderStatus}
         </Text>
         <Text style={styles.id}>
         {props.OrderId}
         </Text>
         <Text style={styles.date}>
         {props.OrderDate}
          </Text>
          </>
          }

           {
            props.date && 
            <>
          
            <Text>
              {props.CreateDate}
            </Text>
            <Text>
            {props.ApproveDate}
          </Text>
          </>
           } */}

         
     
    </View>
  )
}

export default DashboradCards

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        borderRadius:20,
        padding:20,
        marginTop:20,backgroundColor:'white'
    },
    titleHead:{
      flexDirection:'row',
      marginTop:10,
    },
    headtitle:{
      color:Colors.GRAY_DARK,
      fontWeight:'bold',
      marginLeft:5
    },
    viwDetail:{
      marginTop:5,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    viwDetailMain:{

    },
    name:{
      color:Colors.GRAY_DARK
    },
    status:{
      color:Colors.BLUE_DARK
    },
    id:{

    },
    date:{

    },
    
    Btn :{
      width:65,
      height:25,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5,
      marginTop:20
    },
      titleBtn:{
        fontSize:14,
        color:Colors.WHITE
      }

})