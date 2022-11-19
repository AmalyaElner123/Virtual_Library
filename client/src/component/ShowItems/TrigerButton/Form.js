import React from 'react';

export const Form = ({ onSubmit,data }) => {
  return (
    <form onSubmit={onSubmit}>
     <h1>{data.map((item, index) =>
            {
              return <li key={index}>{item.name}</li>
            })}</h1>
    </form>
  );
};
export default Form;
