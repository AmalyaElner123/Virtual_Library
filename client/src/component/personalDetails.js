import { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { getDialogActionsUtilityClass } from "@mui/material";
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import utils from'./service/utils'
import Card1 from "./PrivateArea/card/card";
import Cardd from './PrivateArea/card/card1'
import Table1 from "./PrivateArea/table";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Buttons from '@mui/material/Button';
import {Checkbox1,Grid,TextField} from '@mui/material';
import Itemim from "@mui/material/Grid"
 import { useSelector, useDispatch } from 'react-redux';
// import { FetchUsers } from '../Redux/FetchUsers';
import { FetchUsers } from './Redux/FetchUsers';

function PersonalDetails() {
const [email,setEmail]=useState();//email taht typed
const [itemsList,setItemsList]=useState([]);//רשימת מוצרים בבעלותי
const [itemsListBorrow,setItemsListBorrow]=useState([]);//רשימת מוצרים שהשאלתי
const [user,setUser]=useState([]);//משתמש- אובגקט
const [f,setF]=useState();//משתמש- אובגקט
const users= useSelector(state => state.users);
const loading = useSelector(state => state.loading)
    // console.log("loading:")
    // console.log(loading)
const dispatch = useDispatch();


    useEffect(() => {
        dispatch(FetchUsers());
    }, []);

const getData =async()=>{
    
    var  items = await utils.getAllItems("http://localhost:8000/api/items");
  //  var  users = await utils.getAllUsers("http://localhost:8000/api/users");
    console.log("email-sessionStorage")
    console.log(sessionStorage["userEmail"]);
    const e =sessionStorage["userEmail"] ;
    setEmail(e);
    const u= users.
    filter(function(p){if(p.email===e)
        {return p;}
    else
        {console.log(p.userName)}})
setUser(u);
const i= items.
filter(function(p){if(p.idOwner===u[0]._id){if(p)return p;}else{console.log(p.idOwner)}})
setItemsList(i);
const it= items.
filter(function(p){if(p.idBorrow===u[0]._id){return p;}else{console.log(p.idBorrow)}})
setItemsList(it);


console.log("email")
console.log(e);
console.log(email);
console.log("user")
//console.log(u);
console.log(user[0].address);
console.log("userid")

//console.log(u[0]._id);
console.log(user[0]._id);
console.log("username")

//console.log(u[0].userName);
console.log(user[0].userName);

console.log("itemsListOwn")
//console.log(i);
console.log(itemsList);
console.log("itemsListBorrow")
//console.log(it);
console.log(itemsListBorrow);

}




    return (
        <div  ><Button onClick={getData}></Button>
            <Grid container direction="row" p={0.5} rowSpacing={1} columnSpacing={{ xs: 1}}>
  <Grid item xs>
    <Itemim>
           <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">עדכון פרטים אישיים</h5>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="userName" name="userName"  value={user.userName} onChange={setEmail}  />
                                <label htmlFor="userName" >שם*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Password dir='ltr' id="userPassword" name="userPassword"  value={user.userPassword} onChange={setEmail} />
                                <label htmlFor="userPassword">סיסמה*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email"  value={user.email} onChange={setEmail}  />
                                <label htmlFor="email">Email*</label>
                            </span>
                        </div>
                       
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="address" name="address"  value={user.address} onChange={setEmail}  />
                                <label htmlFor="address">ערים</label>
                            </span>
                        </div>
                         <div className="field">
                            <span className="p-float-label">
                                <InputText id="phone" name="phone"  value={user.phone} onChange={setEmail}  />
                                <label htmlFor="phone" >טלפון*</label>
                            </span>
                        </div>

                        <Button type="submit" label="Submit" className="mt-2" />
        </div>
        </div>
        </Itemim>
        </Grid>
        <Grid>
        <Itemim item xs>
        <div>
            <Cardd list={itemsList}></Cardd>
            <Cardd list={itemsList}></Cardd>
           
            {/* <Table1 ></Table1> */}
            {/* <Table1 list={itemsListBorrow} list2={itemsListOwn}></Table1> */}
        </div>
         </Itemim>
         </Grid></Grid>
        </div>
        
    )

}
 export default PersonalDetails;
