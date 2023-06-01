// import logo from './logo.svg';
//import '../App.css';
import { BrowserRouter ,Link,Route, Routes } from 'react-router-dom';
import Login from './Login';
import Items from './Items';
import Register from './Add/Register';
// import Register from './Register';

import AddItem from './Add/AddItemMain';
// import AddItem from './AddItem1';
// import AddItem from './Add/AddItemMUI';
import utils from './service/utils'

import ShowItems from './ShowItems/ItemsMain'
import {RouterLink,Router} from '@mui/material';
import { StaticRouter } from 'react-router-dom/server';
import PrivateArea from './PrivateArea';
import Carousle from './carousle/carousle';
import Users from './Redux/Users'
import PersonalDetails from './personalDetails';
import PersonalDetailRouter from './PersonalDetailRouter';
// import Home from './Home'
import Home from './HomePage'
//import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import Photo from './Add/photo'

function MainPage() {

    return (
        <div className='itemsMain'>
            <h1 >מערכת השאלות חברתית</h1>
            {/* <PersonalDetailRouter></PersonalDetailRouter> */}
        <BrowserRouter>
         <nav className="link-nav">
         <Link className='link' to="/"> דף הבית </Link>
         <Link className='link' to="/PrivateArea"> אזור אישי</Link>
         <Link className='link' to="/Register"> משתמש חדש </Link>
         <Link className='link' to="/AddItem"> הוספת מוצר </Link>
         <Link className='link' to="/ShowItems"> רשימת מוצרים </Link>
         <Link className='link' to="/PersonalDetailRouter"> אזור אישי </Link>
         <Link className='link' to="/Photo"> העלאת תמונות </Link>
         </nav>
             
        <Routes>
         <Route exact path="/" element={<Home/>} ></Route>

        <Route exact path="/PrivateArea" element={<PrivateArea/>} ></Route>
         <Route exact path="/Register" element={<Register/>} ></Route>
         <Route exact path="/AddItem" element={<AddItem/>} ></Route>
         <Route exact path="/ShowItems" element={<ShowItems/>} ></Route>
         <Route exact path="/PersonalDetails" element={<PersonalDetails/>} ></Route>
         <Route exact path="/PersonalDetailRouter" element={<PersonalDetailRouter/>} ></Route>
         <Route exact path="/Photo" element={<Photo/>} ></Route>

        </Routes>
        </BrowserRouter>

<Carousle></Carousle>       

 <Users></Users>
   
 </div>
    );
}
export default MainPage;
