import React from 'react';
import classes from './Product.module.css';

const Product = (props) => {
  return (
    <li className={classes.product}>
      <h2>{props.name}</h2>
      <p>{props.openText}</p>
    </li>
  );
};

export default Product;
