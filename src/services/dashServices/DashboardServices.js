import Axios from "axios"
//for temperary
// Axios.defaults.baseURL = 'https://dev.vitalize.dev/api/v1/'

import AsyncStorage from '@react-native-async-storage/async-storage';


const getFromStorage =async()=>{
    const keys = ['userData', 'StoreName'];
    const result =await AsyncStorage.multiGet(keys)

    const userData = JSON.parse(result[0][1] || '{}');
    const StoreName = result[1][1];

    const Jwt = userData?.jwt;

    return [StoreName,Jwt]
}


export const getOrders = async (jwt,storeName) => {
    const url = `https://dev.vitalize.dev/api/v1/store/get_orders?store=${storeName}&new=10&unpaid=10&waiting=10&call=10`;
    console.log(jwt,storeName,'storeNamestoreName')
    
    const headers = {
        'authority': 'dev.vitalize.dev', 
    'accept': 'application/json, text/plain, */*', 
    'accept-language': 'en', 
    'authorization': `Bearer ${jwt}`, 
    'cache-control': 'no-cache', 
    // 'cookie': 'auth.strategy=qutlineAuth; auth._token.qutlineAuth=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDc4NGM5MGY1YmMzNzI4YzI0MWE4NCIsImV4cCI6MTcxMjM2OTA2OX0.G4m2LheuWbn1ECA4l1colx9fsGl1lxo785nZLim91uY; auth._token_expiration.qutlineAuth=1712369069000', 
    'pragma': 'no-cache', 
    'referer': 'https://dev.vitalize.dev/store/f4ran-burger/dashboard', 
    'sec-fetch-dest': 'empty', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-site': 'same-origin', 
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
  }


    try {
        const response = await fetch(url, {headers});
 

        if (response.ok) {
            const res = await response.json();
            
            return res;
        } else {
            // Handle errors here
            console.error('Failed to fetch data');
            return null;
        }
    } catch (error) {
        // Handle network errors here
        console.error('Network error:', error);
        return null;
    }
};


export const confirm =async(orderId)=>{
    const [store, jwt] = await getFromStorage()
    console.log(orderId,store,jwt)
    var myHeaders = new Headers();
myHeaders.append("authority", "dev.vitalize.dev");
myHeaders.append("accept", "application/json, text/plain, */*");
myHeaders.append("accept-language", "en");
myHeaders.append("authorization", `Bearer ${jwt}`);
myHeaders.append("cache-control", "no-cache");
myHeaders.append("content-type", "application/json");
myHeaders.append("cookie", `auth.strategy=qutlineAuth; auth._token.qutlineAuth=Bearer%20${jwt}`);
myHeaders.append("origin", "https://dev.vitalize.dev");
myHeaders.append("pragma", "no-cache");
myHeaders.append("referer", `https://dev.vitalize.dev/store/${store}/orders`);
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-site", "same-origin");
myHeaders.append("user-agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1");
     // myHeaders.append("user-agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1");
    
    var raw = JSON.stringify({
        "admin_note": "test"
      });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      redirect: 'follow',
      body: raw,
    };
    const response = await fetch(`https://dev.vitalize.dev/api/v1/store/orders/confirm/${orderId}?store=${store}`, requestOptions)
    const res = await response.text()
        return res

}


export const ready =async(orderId)=>{
    const [store, jwt] = await getFromStorage()
   

    var myHeaders = new Headers();
    myHeaders.append("authority", "dev.vitalize.dev");
    myHeaders.append("accept", "application/json, text/plain, */*");
    myHeaders.append("accept-language", "en");
    myHeaders.append("authorization", `Bearer ${jwt}`);
    myHeaders.append("cache-control", "no-cache");
    myHeaders.append("content-length", "0");
    myHeaders.append("cookie", `auth.strategy=qutlineAuth; auth._token.qutlineAuth=Bearer%20${jwt}`);
    myHeaders.append("origin", "https://dev.vitalize.dev");
    myHeaders.append("pragma", "no-cache");
    myHeaders.append("referer", `https://dev.vitalize.dev/store/${store}/orders`);
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("user-agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1");
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      redirect: 'follow'
    };
    const response = await fetch(`https://dev.vitalize.dev/api/v1/store/orders/ready/${orderId}?store=${store}`, requestOptions)
    const res = await response.text()
        return res

}

export const reject =async(orderId)=>{
    const [store, jwt] = await getFromStorage()
    var myHeaders = new Headers();
myHeaders.append("authority", "dev.vitalize.dev");
myHeaders.append("accept", "application/json, text/plain, */*");
myHeaders.append("accept-language", "en");
myHeaders.append("authorization", `Bearer ${jwt}`);
myHeaders.append("cache-control", "no-cache");
myHeaders.append("content-length", "0");
myHeaders.append("cookie", `auth.strategy=qutlineAuth; auth._token.qutlineAuth=Bearer%20${jwt}`);
myHeaders.append("origin", "https://dev.vitalize.dev");
myHeaders.append("pragma", "no-cache");
myHeaders.append("referer", `https://dev.vitalize.dev/store/${store}/orders`);
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-site", "same-origin");
myHeaders.append("user-agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1");

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  redirect: 'follow'
};


const response = await fetch(`https://dev.vitalize.dev/api/v1/store/orders/reject/${orderId}?store=${store}`, requestOptions)
const res =await response.text()
    return res
}

export const approve =async(orderId)=>{
    const [store, jwt] = await getFromStorage()
    var myHeaders = new Headers();
    myHeaders.append("authority", "dev.vitalize.dev");
    myHeaders.append("accept", "application/json, text/plain, */*");
    myHeaders.append("accept-language", "en");
    myHeaders.append("authorization", `Bearer ‍${jwt}`);
    myHeaders.append("cache-control", "no-cache");
    myHeaders.append("content-length", "0");
    myHeaders.append("cookie", "auth.strategy=qutlineAuth; auth._token.qutlineAuth=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDc4NGM5MGY1YmMzNzI4YzI0MWE4NCIsImV4cCI6MTcxMjUyNTY0Mn0.AC0lkipZt6s9po4jDivPl9kJ08QoZgbkEqLFz-8FyIc; auth._token_expiration.qutlineAuth=1712525642000");
    myHeaders.append("origin", "https://dev.vitalize.dev");
    myHeaders.append("pragma", "no-cache");
    myHeaders.append("referer", `https://dev.vitalize.dev/store/${store}/orders`);
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("user-agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1");
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      redirect: 'follow'
    };
    const response = await fetch(`https://dev.vitalize.dev/api/v1/store/orders/approve_call/${orderId}?store=${store}`, requestOptions)
      
    const res =response.text()
    return res
      
}















