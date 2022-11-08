import axios from 'axios'

const login = (username,password) =>
{
    console.log(username)
    console.log(password)
    // return axios.post("https://localhost:8000/api/users/login", {username,password})
    return axios.post("localhost:8000/api/users/login", {username,password})
}

const saveToken = (token) =>
{
    sessionStorage["token"] = token
}

export default {login, saveToken}
