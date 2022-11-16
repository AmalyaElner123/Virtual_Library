import axios from 'axios'

const login = (userName,userPassword) =>
{
    console.log("userName");
    console.log(userName);
    console.log("userPassword:")
    console.log(userPassword)
   
    return axios.post("http://localhost:8000/api/users/login", {userName, userPassword})
    // return axios.post("//localhost:8000/api/users/login", {username,password})
}

const saveToken = (token) =>
{
    // sessionStorage["token"] = token
    sessionStorage.setItem('token',token)
}
const getToken = () =>
{
    return sessionStorage["token"];
}



export default {login, saveToken, getToken}
