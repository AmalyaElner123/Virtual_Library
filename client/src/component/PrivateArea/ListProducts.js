import React from 'react';
import Product from './Product';
import classes from './ListProducts.module.css';

const ListProducts = (props) => {
  return (
    <ul className={classes['product-list']}>
      {props.products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          openText={product.openText}
        />
      ))}
    </ul>
  );
};

export default ListProducts;
