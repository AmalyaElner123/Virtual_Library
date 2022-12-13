import React, { useEffect, useState } from 'react';

import utils from '../../service/utils';
import UserDetails from './UserDetails';

export const Form = ({ onSubmit,data }) => {
  const [users, setUsers] = useState([])

  const getData = async() =>
        {
        var  res1 = await utils.getAllUsers("http://localhost:8000/api/users");
        setUsers(res1);
        console.log("form - users");
        console.log(users); 
        console.log("res - users");
        console.log(res1);
        }
  
  useEffect( () =>  { getData();  } ,[users]);

  return (
    <form onSubmit={onSubmit}>
     <h1>{data.name}</h1>
     פרטי  המשאיל:
     <br/>
     <h5>
      {
users.map(function(u){if(u._id===data.idOwner){return <UserDetails user={u}></UserDetails>;}else{console.log("else"); console.log(u._id);}})      }
     </h5>
     {/* {
     tasks.filter(function (item) {
                                return item.userId == props.userId}).map(function (item) {
                                return <Task title={item.title}></Task>;})} */}
    </form>
  );
};
export default Form;
