import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link ,Route, Routes } from 'react-router-dom';
import LoginComp from './Login';
import ProductsComp from './Products';

function MainPageComp() {
    return (
        <div className="App">
            <h1>Welcome to Virtual Library web site</h1>
            <BrowserRouter>
      <nav>
         {/* <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/products">products</Link></li>
         </ul> */}
         <Link to="/"> Login </Link>
         <Link to="/products"> products </Link>

      </nav>
              {/* <Switch> */}
        <Routes>
         <Route exact path="/" element={<LoginComp></LoginComp>} ></Route>
         <Route path="/products" element={<ProductsComp></ProductsComp>} ></Route>
        </Routes>
      </BrowserRouter>
            {/* <switch>
              <Route exact path="/">
                <LoginComp></LoginComp>
              </Route>
              <Route path="/products"> 
                <ProductsComp></ProductsComp>
              </Route>
            </switch> */}
        </div>
    );
}
export default MainPageComp;

