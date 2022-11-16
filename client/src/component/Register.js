import { useState } from "react";
import utils from './utils';

function Register() {

  const  [user,setUser]=useState({userName:'',userPassword:'',email:'',address:'',phone:''})

  const  onSubmit1= async(data,form) =>
    {
        console.log("new_user_bef:")
        console.log(user)
        var res = await utils.createUser("http://localhost:8000/api/users/register",user)
        console.log("new_user_aft:")
        console.log(user)
        console.log("res:")
        console.log(res);
        if (!res)
        {
            console.log("Email address already exist")
        }
        
            
         
    }
    const onclickAll= async(data,form) =>
    {
        var res = await utils.getAllUsers("http://localhost:8000/api/users")
        console.log("getAllusers");
        console.log(res);
    }

    return (
        <div className="App">
            <h3>Register - Wellcome</h3>
            שם :     <input type="text" onChange={e=>setUser({...user,userName:e.target.value})}></input><br/>
            סיסמה : <input type="text" onChange={e=>setUser({...user,userPassword:e.target.value})}></input><br/>
            אימייל : <input type="text" onChange={e=>setUser({...user,email:e.target.value})}></input><br/>
            כתובת : <input type="text" onChange={e=>setUser({...user,address:e.target.value})}></input><br/>
            טלפון : <input type="text" onChange={e=>setUser({...user,phone:e.target.value})}></input><br/>
            {/* דירוג : <input type="text" onChange={e=>setUser({...user,rating:e.target.value})}></input><br/> */}
            {/* <input type="button" value="Login" onClick={loginFunc} /> */}
            <button type="submit" label="submit" value="Login2" onClick={onSubmit1} >SUBMIT</button>
            <button onClick={onclickAll}>GETALLUSERS</button>
        </div>

    );
}
export default Register;