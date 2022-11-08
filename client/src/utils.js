import axios from 'axios'
import authUtils from './authSrv'

axios.interceptors.request.use(req =>
{
    req.headers = {'x-access-token' : authUtils.getToken()};
    return req;
})


// const getProducts = () =>
// {
//     return axios.get("http://localhost:8000/api/products")
// }

// export default {getProducts}