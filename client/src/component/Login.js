// import { useState } from 'react';
// //import { useHistory } from 'react-router-dom';
// import authUtils from './authSrv';

// function Login() {
        
//     const [answer,setAnswer]=useState();
//     const [login, setLogin] = useState({email : '',userPassword : ''})
//     //const history = useHistory()
//     const loginFunc = () =>
//     {
        
//         console.log("login:")
//         console.log(login.email)
//         console.log(login.userPassword)
//        const a= authUtils.login(login.email, login.userPassword)
//          .then(resp =>
//             {
//                 console.log("resp");
//                 // console.log(resp.data.token);
//                 console.log(resp.data)
//                 authUtils.saveToken(resp.data.token);
//                 //history.push("/products")
//             })
//             console.log("a")
//             console.log(a.PromiseState)
//             setAnswer(a.PromiseState);
//    }
//     return (
//         <div className="App">
//             <h3>התחברות</h3>
//             אימייל:<input type="text" onChange={e => setLogin({...login, email: e.target.value}) } /><br/>
//             סיסמה:<input type="text" onChange={e => setLogin({...login, userPassword : e.target.value}) } /><br/>
//             <input type="button" value="Login" onClick={loginFunc} />
//             {answer}
//         </div>
//     );
// }
// export default Login;
import { useState } from 'react';
import { BrowserRouter ,Link,Route, Routes } from 'react-router-dom';

//import { useHistory } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import authUtils from './authSrv';
import './login.css'
//import PrivateArea from '../PrivateArea/PrivateArea';
import { useNavigate } from 'react-router-dom';
import PersonalDetails from './PrivateArea'
import utils from './service/utils';

function Login() {
    const history =useNavigate();

    const [answer,setAnswer]=useState();
    const [email,setEmail]=useState();
    const [login, setLogin] = useState({email : '',userPassword : ''})
    
    //const history = useHistory()
    const loginFunc = async() =>
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
            sessionStorage.setItem('userEmail',login.email)
            if(sessionStorage["token"]){
               
            history("/personalDetails");
            }

   }
    return (
        <div className="flex justify-content-center">
            <div>
            <div className="card">
                    <h5 className="text-center">משתמש חדש</h5>
                    <form className="p-fluid">
                          <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email1" name="email"   onChange={e => setLogin({...login, email: e.target.value})}  />
                                <label htmlFor="userEmail">מייל*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Password dir='ltr' id="userPassword" name="userPassword"   onChange={e => setLogin({...login, userPassword: e.target.value})} 
                                      />
                                <label htmlFor="userPassword">סיסמה*</label>
                            </span>
                        </div>
                      
                        </form>
            </div>
            {/* אימייל:<input type="text" onChange={e => setLogin({...login, email: e.target.value}) } /><br/>
            סיסמה:<input type="text" onChange={e => setLogin({...login, userPassword : e.target.value}) } /><br/> */}

   
            <Button   className="mt-2" value="Login" onClick={loginFunc} label="Login"></Button>
        

        <h5>  {answer}</h5>
        </div>
        </div>
    );
}
export default Login;