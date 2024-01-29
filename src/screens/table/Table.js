import React,{useState,useEffect} from 'react'
import { View ,StyleSheet,FlatList,ScrollView,Linking,ActivityIndicator} from 'react-native'
import Header from '../../components/template/Header'
import Title from '../../components/molecules/Title'
import Selectors from '../../components/template/table/Selectors'
import ItemFlashList from '../../components/template/table/ItemFlashList'
import {getTables,getTableSelectedQrCode,getAllQrCode} from '../../services/tableServices/TableServices'

import ModalTable from '../../components/organism/ModalTable'
import { BlurView } from "@react-native-community/blur";
import {Colors} from '../../styles/index'
import { useCallback } from 'react'


 const Table = () => {
  // const [data,setData]=useState([{"_id": {"$oid": "617ae11a852c641245468282"}, "name": "Table #1", "capacity": "4",
  //  "storeId": "6172699f171d4c167bfa416d", "openTab": false, "created": {"$date": 1635442970814}, "modified": {"$date": 1639176249842}, "deleted": false, "type": "delivery", "slug": "table-1"},
  //  {"_id": {"$oid": "617ae11a852c641245468283"}, "name": "Table #2", "capacity": 4, "storeId": "6172699f171d4c167bfa416d", "openTab": false, "created": {"$date": 1635442970831}, "modified": {"$date": 1639176375872}, "deleted": false, "type": "table"},
  //  {"_id": {"$oid": "617ae11a852c641245468287"}, "name": "Table #1", "capacity": "4",
  //  "storeId": "6172699f171d4c167bfa416d", "openTab": false, "created": {"$date": 1635442970814}, "modified": {"$date": 1639176249842}, "deleted": false, "type": "delivery", "slug": "table-1"},])



const [data,setData]=useState([])
const [toggleCheckBox, setToggleCheckBox] = useState(false)
const [modalVisible, setModalVisible] = useState(false);
const [modalStatus, setModalStatus] = useState('add');
const [viewRef, setViewRef] = useState(false);
const [tableData,setTableData]=useState(null)
const [showActive, setShowActive] = useState(false)
const [stringQr,setStringQr]=useState("")


useEffect(() => {
  setShowActive(true)
  getTables().then((data)=>{
    // console.log(data,'dataaaa')
     const newArray = data[0].checkedQr ? data : data.map(obj => ({ ...obj, checkedQr: false }))
    setData(newArray)
    setShowActive(false)
  })

}, [ modalVisible ])



// useCallback(() => {
//   getTables().then((data)=>{
//     console.log(data,'dataaaa')
//     const newArray = data[0].checkedQr ? data : data.map(obj => ({ ...obj, checkedQr: false }))
//     setData(newArray)
    
//   })
//   console.log('kkkkk')
 
// }, [])

const onSelectAll =(props)=>{
    let newValue = data.filter((item) => item.checkedQr).length === data.length;
    let temp = data.map((item) => {
      return { ...item, checkedQr: !newValue };
    });
    setData(temp);

 } 

 const handlePress = (newValue,index,id) => {
  let temp = data.map((item, i) => {
    return index === i ? { ...item, checkedQr: newValue } : item;
  })
  setData(temp)
  setStringQr(prevState =>{
    if (prevState === ''){
      return id
    }else{
      const ids = stringQr.split(',');
      const NewID = ids.indexOf(id);
      if (NewID === -1) {
        ids.push(id);
      } else {
        ids.splice(NewID, 1);
      }
      return ids.join(',')
    }
  })
};

const editModal =(item)=>{
  setModalVisible(!modalVisible)
  setViewRef(true)
  setTableData(item)
  setModalStatus('edit')
}

const getQrSelectedTable=(id)=>{
  getTableSelectedQrCode(id).then((data)=>{
    console.log(data,'getQrSelectedTable')
  })
}

 const renderItem = ({ item,index }) => (
  <ItemFlashList item={item} onPress={() => handlePress(!item.openTab,index)}  toggleCheck={item.openTab}
  onPressEdit={()=>editModal(item)} getQrSelected={()=>{getQrSelectedTable(item._id.$oid)}}/>
);
const closeModal=()=>{
  setModalVisible(!modalVisible)
  setViewRef(false)
}
const addTable=()=>{
  setModalVisible(!modalVisible)
  setViewRef(true)
  setModalStatus('add')
  setTableData(null)
}

const openLinkWeb=async(id)=>{
  await Linking.openURL(`https://dev.vitalize.dev/friends-kabob?table=${id}`);
}

function downLoadQrManage (){
  stringQr === '' ?
  getAllQrCode()
  : 
  getTableSelectedQrCode(stringQr)
 
}

  return (
    <ScrollView style={{...styles.container, opacity:viewRef ? 0.2 : 1}} >
        <Header addTableBtn={addTable} style={styles.header}/>
        <Title style={styles.title} titleText={`Tables`}/>
        <Selectors onPress={onSelectAll} downloadQr={downLoadQrManage} toggleCheck={data?.filter((item) => item.checkedQr).length === data?.length}/>
        {
                showActive ?
                <View style={{marginTop:50}}>
                          <ActivityIndicator size="large" color={Colors.GREEN_LIGHT} />
                </View>
                :
        <>
       {
        data?.map((e,i)=>{
          return(
            <ItemFlashList key={i} item={e} onPress={() => handlePress(!e.checkedQr,i,e._id.$oid)}  toggleCheck={e.checkedQr}
            onPressEdit={()=>editModal(e)} getQrSelected={()=>{getQrSelectedTable(e._id.$oid)}} openLinkTable={()=>openLinkWeb(e._id.$oid)}/>
          )
        })
       }

 
    <ModalTable modalVisible={modalVisible} onClose={closeModal} status={modalStatus} tableData={tableData} />

    {/* {viewRef &&
       <BlurView
       viewRef={viewRef}
       style={styles.absolute}
       blurType="light"
       blurAmount={1}
     />
    } */}
    </>
  }
    </ScrollView>
  )
}


const styles=StyleSheet.create({
 container:{
    flex:1,
    paddingHorizontal:17,
    // paddingTop:24,
    // paddingVertical:10,
    backgroundColor:'#DBDBDB',
   
 },
 title:{
   marginTop:19,
   fontSize:25,
   fontWeight:'900'

 },
 absolute: {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
},
header:{
  marginTop:15
},
items:{
  marginBottom:30
}

})

export default Table;