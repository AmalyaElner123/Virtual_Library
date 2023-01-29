import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import './card.css';


const Card1 = (data) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
         setProducts(data)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    
    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={item.image} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.openText}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="mb-2">${item.borrowsNum}</h6>
                    <span className={`product-badge status-${item.status.toLowerCase()}`}>{item.status}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="orderlist-demo">
            <div className="card">
                <h1>Try</h1>
                <OrderList value={products} header="List of Products" dragdrop listStyle={{height:'auto'}} dataKey="id"
                    itemTemplate={itemTemplate} onChange={(e) => setProducts(e.value)}></OrderList>
            </div>
        </div>
    );
    }
    export default Card1
                