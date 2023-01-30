import { DataView, DataViewLayoutOptions } from 'primereact/dataview';

import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { DataScroller } from 'primereact/datascroller';
import './card.css';


  function CardTable(data1) {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
setProducts(data1.list);console.log("card- prime");  console.log(data1.list);console.log(products)  }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (data) => {
        return (
            
            <div className="product-item">
                {/* <img src={`https://primereact.org/images/product/${data.image}`} alt={data.name} /> */}
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.openText}</div>
                    <Rating value={data.rate} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag pi-calendar-times"></i><span className="product-category">  תאריך העלאה - {data.uploadDate}</span>
                </div>
                <div className="product-action">
                    <span className="product-price">מס' השאלות-{data.borrowsNum}</span>
                    {/* <Button icon="pi pi-user" label="   מושאל?" disabled={data.status === 'false'}></Button><br/> */}
                    <div className='product-description'>{data.status}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="card datascroller-demo">
            <DataScroller value={products} itemTemplate={itemTemplate} rows={2} buffer={0.4} header="List of Products" />
        </div>
    )
}export default CardTable;
        