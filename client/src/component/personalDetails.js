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
//import Card1 from "./PrivateArea/card/card";
//import Cardd from './PrivateArea/card/card1'
import CardTable from './PrivateArea/card/card'
//import Table1 from "./PrivateArea/table";

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
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';


function PersonalDetails() {
const [email,setEmail]=useState("");//email taht typed
const [loginpassword,setLoginpassword]=useState("");//email taht typed
const [itemsListOwn,setItemsListOwn]=useState([]);//רשימת מוצרים בבעלותי
const [itemsListBorrow,setItemsListBorrow]=useState([]);//רשימת מוצרים שהשאלתי
//const [user,setUser]=useState([{userName:"aaa",email:"12",userPassword:"1234",address:"sdf",phone:"123456789"}]);//משתמש- אובגקט
const [user,setUser]=useState([]);//משתמש- אובגקט
const [f,setF]=useState();//משתמש- אובגקט
const users= useSelector(state => state.users);
const items= useSelector(state => state.items);
const loading = useSelector(state => state.loading);
const [email1,setEmail1]=useState();
const [name,setName]=useState();
const [phone,setPhone]=useState();
const [address,setAddress]=useState();
const [password,setPassword]=useState();


    // console.log("loading:")
    // console.log(loading)
const dispatch = useDispatch();
const appData = useSelector(state=>state);


    useEffect(() => {
    console.log("email-sessionStorage")
    console.log(sessionStorage["userEmail"]);
    // dispatch(FetchUsers());
    // dispatch(FetchItems());
    console.log("appData")
    console.log(appData)
    setEmail(appData.userEmail);
    setLoginpassword(appData.userPassword)
    console.log(email)
    // const u= users.
    // filter(function(p){if(p.email===appData.userEmail&&p.userPassword===appData.userPassword)
    //     {return p;}
    // else
    //     {console.log(p.userName);}})
    setUser(appData.user);
    console.log("user")
    console.log(user)
       const i= items.
       filter(function(p){if(p.idOwner===appData.user[0]._id){if(p)return p;}else{console.log(p.idOwner)}})
       setItemsListOwn(i);

       const it= items.
       filter(function(p){if(p.idBorrow===appData.user[0]._id){return p;}else{console.log(p.idBorrow)}})
       setItemsListBorrow(it);
    }, []);


const change = async()=>{
    console.log("phone")
    console.log(phone)
    console.log("email1")
    console.log(email1)
    console.log("name")
    console.log(name)
    console.log(user[0]);

    user[0].userPassword= password?password.password:user[0].userPassword;
    user[0].userName= name?name.name:user[0].userName;
    user[0].address= address?address.address:user[0].address;
    user[0].phone= phone?phone.phone:user[0].phone;
    user[0].email= email?email.email:user[0].email;
    user[0].rating= 5;
    console.log(user[0]);
    const res = await utils.updateUser("http://localhost:8000/api/users/"+user[0]._id,user[0]) 

    console.log(res);
    // setUser(user.userName=data.name);
    //      setItem(item.category=selectedCategory)
    //      setItem(item.openText=data.openText)
    //     //  setItem({...item, uploadDate:date1 });
    //      //setItem({...item,data})
        
    //     console.log("item:")
    //     console.log(item)
    //     setItem(item.uploadDate=date1)
    //     console.log("item__with_date:")
    //     console.log(item)
        

        // var res = await utils.createItem("http://localhost:8000/api/items",item)


        // console.log("add_new_item");
        
        // AddItem.resetForm();
} 


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
                            <Inplace>
                            <InplaceDisplay>שם: {user[0]? user[0].userName: " "}</InplaceDisplay>
                            <InplaceContent>שם: {user[0]? user[0].userName: " "}<br/>
                                
                                <InputText id="userName" name="userName" onChange={e => setName({...name, name : e.target.value})}  />
                             </InplaceContent></Inplace>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                            <Inplace>
                            <InplaceDisplay>סיסמא : {user[0]? user[0].password:" "}</InplaceDisplay>
                            <InplaceContent>סיסמא : {user[0]? user[0].password:" "}<br/>
                                
                                <InputText id="userName" name="userName" onChange={e => setPassword({...password, password : e.target.value})}  />
                             </InplaceContent></Inplace>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                            <Inplace>
                            <InplaceDisplay>כתובת  : {user[0]? user[0].address:" "}</InplaceDisplay>
                            <InplaceContent>כתובת : {user[0]? user[0].address:" "}<br/>
                                
                                <InputText id="userName" name="userName" onChange={e => setAddress({...address, address : e.target.value})}  />
                             </InplaceContent></Inplace>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                            <Inplace>
                            <InplaceDisplay>טלפון : {user[0]? user[0].phone:" "}</InplaceDisplay>
                            <InplaceContent>טלפון : {user[0]? user[0].phone:" "}<br/>
                                
                                <InputText id="userName" name="userName" onChange={e => setPhone({...phone, phone : e.target.value})}  />
                             </InplaceContent></Inplace>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                            <Inplace>
                            <InplaceDisplay>אימייל : {user[0]? user[0].email:" "}</InplaceDisplay>
                            <InplaceContent>אימייל : {user[0]? user[0].email:" "}<br/>
                                
                                <InputText id="userName" name="userName" onChange={e => setEmail({...email, email : e.target.value})}  />
                             </InplaceContent></Inplace>
                            </span>
                        </div>
                       
                        </div>
<br/>
                        <Button type="submit" label="Submit" className="mt-2" onClick={change}/>
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
