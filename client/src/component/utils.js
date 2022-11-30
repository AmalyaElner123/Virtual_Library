import axios, { AxiosHeaders } from 'axios'
import authUtils from './authSrv'

axios.interceptors.request.use(req =>
{
    // req.headers =  {
    //     'Access-Control-Allow-Origin': '*',
    //     };
   
    req.headers = {'token' : authUtils.getToken()};
    
    return req;
})

 const createUser = (url,obj)=>
{
       
    return axios.post(url,obj).then(res=>res.data);
}

const createItem = (url,obj) =>
{
    return axios.post(url,obj).then(res=>res.data);
}

const getAllItems = (url) =>
{
    //  const token = sessionStorage.getItem('token')
    //  return axios.get("http://localhost:8000/api/items",token).then(res=>res.data);
        return axios.get(url).then(res=>res.data);
       
    // return axios.get("localhost:8000/api/items");
}

const getAllUsers = (url) =>
{
       
    //const token = sessionStorage.getItem('token')
    
    // const myHeaders = new Headers({
    //     'Content-Type': 'application/json',
    //     'Authorization': token
    // });

        
    // return axios.get(url,token).then(res=>res.data);
    // const token = headers.authorization = {'x-access-token' : authUtils.getToken()};
    // return axios.get(url,token).then(res=>res.data);
        
    return axios.get(url).then(res=>res.data);
    
}
    
    


export default {getAllItems,createUser,getAllUsers,createItem};