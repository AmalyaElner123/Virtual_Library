// import logo from './logo.svg';
import '../App.css';
import { BrowserRouter, Link ,Route, Routes } from 'react-router-dom';
import Login from './Login';
import Items from './Items';
import Register from './Register';
import AddItem from './AddItem/AddItemMain';
import ShowItems from './ShowItems/ItemsMain';

function MainPage() {
    return (
        <div className="App">
            <h1>Welcome to Virtual Library web site</h1>
        <BrowserRouter>
         <nav>
         <Link to="/"> Login </Link>
         <Link to="/Register"> Register </Link>
         <Link to="/Items"> Items </Link>
         <Link to="/AddItem"> Add Item </Link>
         <Link to="/ShowItems"> Show Items </Link>
         </nav>
             
        <Routes>
         <Route exact path="/" element={<Login/>} ></Route>
         <Route exact path="/Register" element={<Register/>} ></Route>
         <Route exact path="/Items" element={<Items/>} ></Route>
         <Route exact path="/AddItem" element={<AddItem/>} ></Route>
         <Route exact path="/ShowItems" element={<ShowItems/>} ></Route>
        </Routes>
        </BrowserRouter>
         
        </div>
    );
}
export default MainPage;

