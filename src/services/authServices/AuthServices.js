import Axios from "axios";
const BaseUrl = 'https://dev.vitalize.dev/api/v1/'



//for example


export const LoginPhone=async(mobileNumber,captcha)=> {
    console.log(captcha,'captch')
    // Axios.defaults.baseURL = BaseUrl
    // const response=await  Axios.post('https://dev.vitalize.dev/api/v1/auth/auth_req',
         
    //  {
    //     mobile:mobileNumber,
    //     recaptcha_token:captcha
    // })


    const response = await fetch('https://dev.vitalize.dev/api/v1/auth/auth_req', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mobile:mobileNumber,
            recaptcha_token:captcha
        }),
    });
   
    //  const res=await response.text();
      console.log(mobileNumber)
    return response.status;
};


export const VerifyCode=async(mobile,otp)=> {

    const response=await  Axios.post('https://dev.vitalize.dev/api/v1/auth/verify', {
            mobile:mobile,
            otp:otp,
            role:'store_admin',

    })
    // const response = await fetch('https://dev.vitalize.dev/api/v1/auth/verify', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         mobile:mobile,
    //         otp:otp,
    //         role:'store_admin'

    //     }),
    // });
    // const res=await response.text();
    console.log(response.status,'ress')
    // Axios.defaults.headers = {
    //     Authorization: 'Bearer ' + res.jwt
    // }
    return response;
};

export const GetStore=async(jwt)=> {

    const response=await  fetch('https://dev.vitalize.dev/api/v1/store/general/info',{
        headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${jwt}`
                },
    })
    const res =await response.json()
    return res
}

