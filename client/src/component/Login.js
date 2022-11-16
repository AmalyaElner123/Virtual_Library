import { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import authUtils from './authSrv';

function Login() {
        const [login, setLogin] = useState({userName : '',userPassword : ''})
    //const history = useHistory()
    const loginFunc = () =>
    {
        console.log("login:")
        console.log(login.userName)
        console.log(login.userPassword)
        authUtils.login(login.userName, login.userPassword)
         .then(resp =>
            {
                console.log("resp");
                console.log(resp.data.token);
                authUtils.saveToken(resp.data.token);
                //history.push("/products")
            })
   }
    return (
        <div className="App">
            <h3>Login Page</h3>
            User name : <input type="text" onChange={e => setLogin({...login, userName: e.target.value}) } /><br/>
            User Password : <input type="text" onChange={e => setLogin({...login, userPassword : e.target.value}) } /><br/>
            <input type="button" value="Login" onClick={loginFunc} />
        </div>
    );
}
export default Login;