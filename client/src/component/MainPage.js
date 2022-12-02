// import logo from './logo.svg';
import '../App.css';
import { BrowserRouter ,Link,Route, Routes } from 'react-router-dom';
import Login from './Login';
import Items from './Items';
import Register from './Register';
import AddItem from './AddItem/AddItemMain';
import ShowItems from './ShowItems/ItemsMain'
import {RouterLink,Router} from '@mui/material';
import { StaticRouter } from 'react-router-dom/server';
import PrivateArea from './PrivateArea/PrivateArea';


function MainPage() {
    return (
        <div className="link-nav">
            <h1 >Welcome to Virtual Library web site</h1>
        <BrowserRouter>
         <nav className="link-nav">
         <Link className='link' to="/"> משתמש רשום </Link>
         <Link className='link' to="/PrivateArea"> אזור אישי</Link>
         <Link className='link' to="/Register"> משתמש חדש </Link>
         <Link className='link' to="/AddItem"> הוספת מוצר </Link>
         <Link className='link' to="/ShowItems"> רשימת מוצרים </Link>
         </nav>
             
        <Routes>
        <Route exact path="/PrivateArea" element={<PrivateArea/>} ></Route>
         <Route exact path="/" element={<Login/>} ></Route>
         <Route exact path="/Register" element={<Register/>} ></Route>
         <Route exact path="/AddItem" element={<AddItem/>} ></Route>
         <Route exact path="/ShowItems" element={<ShowItems/>} ></Route>
        </Routes>
        </BrowserRouter>
         
        </div>
    );
}
export default MainPage;

