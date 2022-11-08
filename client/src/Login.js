import { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import authUtils from './authSrv';

function LoginComp() {
    
    const [login, setLogin] = useState({username : '',password : ''})
    //const history = useHistory()

    const loginFunc = () =>
    {
        authUtils.login(login.username, login.password)
         .then(resp =>
            {
                authUtils.saveToken(resp.data.token);
                //history.push("/products")
            })
               
    }

    return (
        <div className="App">
            <h3>Login Page</h3>
            User name : <input type="text" onChange={e => setLogin({...login, username : e.target.value}) } /><br/>
            UPassword : <input type="text" onChange={e => setLogin({...login, password : e.target.value}) } /><br/>

            <input type="button" value="Login" onClick={loginFunc} />
        </div>

    );
}
export default LoginComp;