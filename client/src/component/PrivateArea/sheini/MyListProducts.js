import './MyListProducts.css';
import React, { useState } from 'react';
import ListProducts from './ListProducts';
import react from 'react';


const MyListProducts = (props) =>{       
    
    const [products, setProducts] =useState([]);
    const [isLoading, setIsLoading] =useState(false);

    async function fetchProductsHandler(){
        setIsLoading(true);    
        const response = await fetch('http://localhost:8000/api/items/');
        const data = await response.json();

        const transformedProducts = data.results.map((productData) => {
        return {
            id: productData.epsiode_id,
            name: productData.name,
            openText: productData.openText
        };
    });
    setProducts(transformedProducts);
    setIsLoading(false);
}   
return (
    <div>
        <section>
        {!isLoading && products.length>0 && <ListProducts products= {products} />}
        {isLoading &&  products.length===0 && <p>לא נמצאו מוצרים</p>}
        {isLoading && <p>Loading...</p>}
        </section>
  
<button onClick={fetchProductsHandler}>הצג מוצרים שהעלית</button>
<button type='button' onClick={props.onCancel} >יציאה</button>
</div>
);
}
export default MyListProducts;