import Axios from "axios"
import RNFetchBlob from 'rn-fetch-blob';

import AsyncStorage from '@react-native-async-storage/async-storage';
const getFromStorage =async()=>{
  const keys = ['userData', 'StoreName'];
  const result =await AsyncStorage.multiGet(keys)

  const userData = JSON.parse(result[0][1] || '{}');
  const StoreName = result[1][1];

  const Jwt = userData?.jwt;

  return [StoreName,Jwt]
}

//for temperary
// Axios.defaults.baseURL = 'https://dev.vitalize.dev/api/v1/'
export const  getTables=async()=> {
  const [store, jwt] = await getFromStorage()
  console.log(store,jwt ,'ssssss')
  var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${jwt}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
    const response = await fetch(`https://dev.vitalize.dev/api/v1/store/tables?store=${store}`,requestOptions)
    const res=await response.json()
    return res
}

export const addTable=async(name,slug,type,capacity,openTab)=> {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": name,
  "type": type,
  "slug": slug,
  "capacity": capacity,
  "openTab": openTab
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

const response = await fetch("https://dev.vitalize.dev/api/v1/store/table/add", requestOptions)
const res =response.text()
return res
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
    
}

export const deleteTable=async(id)=> {
    const response = await fetch(`https://dev.vitalize.dev/api/v1/store/table/${id}/delete`, {
        method: 'DELETE',
    })
     const res=await response.text()
    return res
}

export const editTable=async(id,name,slug,type,capacity,openTab)=> {
    console.log(id,name,slug,type,capacity,openTab)
    const response = await fetch('https://dev.vitalize.dev/api/v1/store/table/edit', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            _id:{"$oid": id},
            name:name,
            // slug:slug,
            type:type,
            capacity:capacity,
            openTab:openTab
        }),
    })
    const res=await response.text()
    return res
}
export const getTableSelectedQrCode=async(id)=> {
    // const response = await fetch(`https://dev.vitalize.dev/api/v1/store/qr/tables/${id}`)
    // // console.log(response)
    //  const res=await response.response.blob()
    //  return res

    const { dirs } = RNFetchBlob.fs;
const fileUrl = `https://dev.vitalize.dev/api/v1/store/qr/tables/${id}`;

RNFetchBlob.config({
  fileCache: true,
  addAndroidDownloads: {
    useDownloadManager: true,
    notification: true,
    path: `${dirs.DownloadDir}/tableSelected.pdf`,
    description: 'Downloading PDF file TableSelected',
  },
})
  .fetch('GET', fileUrl, {
    // set headers as needed
  })
  .then(res => {
    console.log('File downloaded to:', res.path());
  })
  .catch(error => console.error(error));
}


export const getAllQrCode=async()=> {
    // const response = await fetch(`https://dev.vitalize.dev/api/v1/store/qr/tables`)
    // // console.log(response)
    //  const res=await response.blob()
    //  return res

//     let dirs = RNFetchBlob.fs.dirs
// RNFetchBlob
// .config({
//   // response data will be saved to this path if it has access right.
//   path : dirs.DocumentDir + '/path-to-file.anything'
// })
// .fetch('GET', 'https://dev.vitalize.dev/api/v1/store/qr/tables', {
//   //some headers ..
// })
// .then((res) => {
//   // the path should be dirs.DocumentDir + 'path-to-file.anything'
//   console.log('The file saved to ', res.path())

const { dirs } = RNFetchBlob.fs;
const fileUrl = 'https://dev.vitalize.dev/api/v1/store/qr/tables';

RNFetchBlob.config({
  fileCache: true,
  addAndroidDownloads: {
    useDownloadManager: true,
    notification: true,
    path: `${dirs.DownloadDir}/table.pdf`,
    description: 'Downloading PDF file.Tables',
  },
})
  .fetch('GET', fileUrl, {
    // set headers as needed
  })
  .then(res => {
    console.log('File downloaded to:', res.path());
  })
  .catch(error => console.error(error));
}






