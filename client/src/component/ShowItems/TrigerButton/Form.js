import React from 'react';

export const Form = ({ onSubmit,data }) => {
  return (
    <form onSubmit={onSubmit}>
     <h1>{data.idOwner}</h1>
    </form>
  );
};
export default Form;
