// import logo from './logo.svg';
import '../App.css';
import { BrowserRouter, Link ,Route, Routes } from 'react-router-dom';
import Login from './Login';
import Items from './Items';
import Register from './Register';

function MainPage() {
    return (
        <div className="App">
            <h1>Welcome to Virtual Library web site</h1>
        <BrowserRouter>
         <nav>
         <Link to="/"> Login </Link>
         <Link to="/Register"> Register </Link>
         <Link to="/Items"> Items </Link>
         </nav>
             
        <Routes>
         <Route exact path="/" element={<Login/>} ></Route>
         <Route exact path="/Register" element={<Register/>} ></Route>
         <Route exact path="/Items" element={<Items/>} ></Route>
        </Routes>
        </BrowserRouter>
         
        </div>
    );
}
export default MainPage;

