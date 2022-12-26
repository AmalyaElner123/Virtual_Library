import React, { useEffect, useState } from 'react';
import  './DataTableDemo.css'
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
users.map(function(u){if(u._id===data.idOwner){console.log(u);return <UserDetails user={u}></UserDetails>;}else{console.log("else"); console.log(u._id);}})      }
     </h5>
     <div class="dropdown">
  <img src={data.img}  width="100" height="50"/>
  <div class="dropdown-content">
  <img src={data.img} alt={data.img} width="300" height="200"/>
  <div class="desc">{data.img}</div>
  </div>
</div>
     
     {/* {
     tasks.filter(function (item) {
                                return item.userId == props.userId}).map(function (item) {
                                return <Task title={item.title}></Task>;})} */}
    </form>
  );
};
export default Form;
