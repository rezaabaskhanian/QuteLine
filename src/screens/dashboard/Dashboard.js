import { View, Text,StyleSheet ,ScrollView} from 'react-native'
import React,{useEffect,useState} from 'react'
import BackHeader from '../../components/organism/BtnBack';
import {getOrders} from '../../services/dashServices/DashboardServices'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HeaderOrder,Info,CounterOrders,DashboradCards} from '../../components/template/orders/index'
import { Colors } from '../../styles';


const Dashboard = () => {
  const [pageIndex ,setPageIndex]=useState(0);
  const [dataStore ,setDataStore]=useState({paid:[],unpaid:[],today:'',waiting:[],callResult:[]});
  
  useEffect(async() => {
    const fetchData = async () => {
      try {
        const keys = ['userData', 'StoreName'];
        const result = await AsyncStorage.multiGet(keys);
  
        const userData = JSON.parse(result[0][1] || '{}');
        const StoreName = result[1][1];
  
        const Jwt = userData?.jwt;
  
        // const getOrder = await getOrders(Jwt, storeName, pageIndex);
        // console.log(getOrder, 'data');
  
        // Uncomment the following block if you want to handle the response using promises
        // getOrders(Jwt, storeName, pageIndex)
        //   .then((data) => {
        //     console.log(data, 'dataaaa');
        //     setDataStore({
        //       ...dataStore,
        //       paid: data.paid_result,
        //       unpaid: data.unpaid_result,
        //       today: data.today_orders,
        //       waiting: data.waiting_result,
        //       callResult: data.call_result,
        //     });
        //   })
        //   .catch((error) => {
        //     console.error('Error fetching data:', error);
        //   });
  
        // Uncomment the following block if you want to handle the response directly
        const data = await getOrders(Jwt, StoreName, pageIndex);
        console.log(data, 'dataaaa');
        setDataStore({
          ...dataStore,
          paid: data.paid_result,
          unpaid: data.unpaid_result,
          today: data.today_orders,
          waiting: data.waiting_result,
          callResult: data.call_result,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
   
  }, [])

 
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.containerStyle}>
      <BackHeader/>
      <HeaderOrder/>
      <Info/>
      <CounterOrders today={dataStore?.today}
       waiting={dataStore?.waiting?.length} 
       newOrders={dataStore?.paid?.length+dataStore?.unpaid?.length}
      />
       {(dataStore?.paid?.length > 0  || dataStore?.unpaid?.length  > 0) &&
        <DashboradCards Title={'New Orders'} 
        styleTitle={styles.titleDash}
        newOrders headTilte={'Paid'} headTitleTwo={'Unpaid'}
        TilteBtn={'Process'}
        paid={dataStore?.paid}
        unpaid={dataStore?.unpaid}  
        styleBtnStatus={{backgroundColor:Colors.GREEN}}
        />
       }
{dataStore?.waiting.length > 0  &&
<DashboradCards Title={'Waiting Orders'} 
waiting
       styleTitle={{...styles.titleDash,color:Colors.GRAY_MEDIUM}}
       data={dataStore.waiting} 
       styleBtnStatus={{backgroundColor:Colors.GRAY_DARK}}
       />
}

{dataStore?.callResult.length > 0  &&
<DashboradCards Title={'Call For Service'} 
callstack
       styleTitle={{...styles.titleDash,color:Colors.ORANGE}}
       data={dataStore.callResult} 
       styleBtnStatus={{backgroundColor:Colors.BLUE_MEDIUM}}
       />
}

    </ScrollView>
  )
}

const styles=StyleSheet.create({

  container:{
    flex:1,
    marginVertical:31,
    paddingHorizontal:31,
   
  },
  containerStyle:{
    
  },
  titleDash:{color:Colors.GREEN_LIGHT,
    textDecorationLine:'underline'},
    Btn:{
      
    }

})


export default React.memo(Dashboard) 