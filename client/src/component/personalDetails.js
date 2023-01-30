import { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Accordion, AccordionTab } from 'primereact/accordion';

import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { getDialogActionsUtilityClass } from "@mui/material";
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import utils from'./service/utils'
import Card1 from "./PrivateArea/card/card";
import Cardd from './PrivateArea/card/card1'
import CardTable from './PrivateArea/card/card'
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
import { FetchItems } from './Redux/FetchItems';
import { useLocation } from "react-router";
import './login.css'

function PersonalDetails() {
const [email,setEmail]=useState();//email taht typed
const [itemsListOwn,setItemsListOwn]=useState([]);//רשימת מוצרים בבעלותי
const [itemsListBorrow,setItemsListBorrow]=useState([]);//רשימת מוצרים שהשאלתי
//const [user,setUser]=useState([{userName:"aaa",email:"12",userPassword:"1234",address:"sdf",phone:"123456789"}]);//משתמש- אובגקט
const [user,setUser]=useState([]);//משתמש- אובגקט
const [f,setF]=useState();//משתמש- אובגקט
const users= useSelector(state => state.users);
const items= useSelector(state => state.items);
const loading = useSelector(state => state.loading);

    // console.log("loading:")
    // console.log(loading)
const dispatch = useDispatch();


    useEffect(() => {
        console.log("email-sessionStorage")
    console.log(sessionStorage["userEmail"]);
        dispatch(FetchUsers());
        dispatch(FetchItems());
        
    const e =sessionStorage["userEmail"] ;
    setEmail(e);
    const u= users.
    filter(function(p){if(p.email===e)
        {return p;}
    else
        {console.log(p.userName)}})
    setUser(u);
    console.log("user")
    console.log(user)
       const i= items.
       filter(function(p){if(p.idOwner===u[0]._id){if(p)return p;}else{console.log(p.idOwner)}})
       setItemsListOwn(i);

       const it= items.
       filter(function(p){if(p.idBorrow===u[0]._id){return p;}else{console.log(p.idBorrow)}})
       setItemsListBorrow(it);
    }, []);





    return (
        <div  >
            {/* <Button onClick={getData}></Button> */}
            <Grid container direction="row" p={0.5} rowSpacing={1} columnSpacing={{ xs: 1}}>
  <Grid item xs>
    <Itemim>
           <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">עדכון פרטים אישיים</h5>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="userName" name="userName"  value={user[0]? user[0].userName: " "} onChange={setEmail}  />
                                <label htmlFor="userName" >שם*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText dir='ltr' id="userPassword" name="userPassword"  value={user[0]? user[0].userPassword:user[0].userPassword=""} onChange={setEmail} />
                                <label htmlFor="userPassword">סיסמה*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email"  value={user[0]? user[0].email:user[0].email=""} onChange={setEmail}  />
                                <label htmlFor="email">Email*</label>
                            </span>
                        </div>
                       
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="address" name="address"  value={user[0]? user[0].address:user[0].address=""} onChange={setEmail}  />
                                <label htmlFor="address">ערים</label>
                            </span>
                        </div>
                         <div className="field">
                            <span className="p-float-label">
                                <InputText id="phone" name="phone"  value={user[0]? user[0].phone:user[0].phone=""} onChange={setEmail}  />
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
        <div >
        <Accordion className="accordion">
                <AccordionTab header="מוצרים בבעלותי" >
            <CardTable list={itemsListOwn}></CardTable>
            </AccordionTab>
                <AccordionTab header="מוצרים בהשאלתי">
            <CardTable list={itemsListBorrow}></CardTable>
            </AccordionTab>
            </Accordion>
           
            {/* <Table1 ></Table1> */}
            {/* <Table1 list={itemsListBorrow} list2={itemsListOwn}></Table1> */}
        </div>
         </Itemim>
         </Grid></Grid>
        </div>
        
    )

}
 export default PersonalDetails;
