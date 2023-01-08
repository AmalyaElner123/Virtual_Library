import { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import authUtils from './authSrv';

function Login() {
        
    const [answer,setAnswer]=useState();
    const [login, setLogin] = useState({email : '',userPassword : ''})
    //const history = useHistory()
    const loginFunc = () =>
    {
        
        console.log("login:")
        console.log(login.email)
        console.log(login.userPassword)
       const a= authUtils.login(login.email, login.userPassword)
         .then(resp =>
            {
                console.log("resp");
                // console.log(resp.data.token);
                console.log(resp.data)
                authUtils.saveToken(resp.data.token);
                //history.push("/products")
            })
            console.log("a")
            console.log(a.PromiseState)
            setAnswer(a.PromiseState);
   }
    return (
        <div className="App">
            <h3>התחברות</h3>
            אימייל:<input type="text" onChange={e => setLogin({...login, email: e.target.value}) } /><br/>
            סיסמה:<input type="text" onChange={e => setLogin({...login, userPassword : e.target.value}) } /><br/>
            <input type="button" value="Login" onClick={loginFunc} />
            {answer}
        </div>
    );
}
export default Login;