
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
//import './OrderListDemo.css';


function Table1() {
    //     const [products, setProducts] = useState([]);
    
       
         const itemTemplate = (item) => {
    //         return (
    //             <div className="product-item">
    //                 <div className="image-container">
    //                     <img src={item.img} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
    //                 </div>
    //                 <div className="product-list-detail">
    //                     <h5 className="mb-2">{item.name}</h5>
    //                     <i className="pi pi-tag product-category-icon"></i>
    //                     <span className="product-category">{item.category}</span>
    //                 </div>
    //                 <div className="product-list-action">
    //                     <h6 className="mb-2">השאלות{item.borrowsNum}</h6>
    //                     <span className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}>{item.status}</span>
    //                 </div>
    //             </div>
    //         );
         }
     return (
      <div className="orderlist-demo">
            {/* <div className="card">
                 <OrderList value={itemsB} header="List of Products" dragdrop listStyle={{height:'auto'}} dataKey="id" 
                     itemTemplate={itemTemplate} ></OrderList> 
                     {/* onChange={(e) => setProducts(e.value)} 
         </div> */}
        <h1>ההשאלות שלי</h1>
        </div>
     )

     
    

}
 export default Table1;
