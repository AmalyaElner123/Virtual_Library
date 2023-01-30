import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";


function Cardd(data) {
  const [list,setList]=useState([]);
    const arr=[{"name":"qwe","age":5},{"name":"bhgvghv","age":7}]
    useEffect(() => {setList(data.list);
    console.log("data-card")
    console.log(data.list)
    console.log("list")
    console.log(list)},[])

     
    return (
        <div  >
          <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>openText</th>
                        <th>rating</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.openText}</td>
                            <td>{user.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
 export default Cardd;
