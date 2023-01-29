import { Button } from "@mui/material";
import { useState } from "react";
import React from "react";


function Cardd(data) {
  const [list,setList]=useState([]);
    const arr=[{"name":"qwe","age":5},{"name":"bhgvghv","age":7}]
 const load=()=>{setList(data);
    console.log("data")
    console.log(data)
    console.log("list")
    console.log(list)

     return<div> {list.map(function(p){ return p.name})}</div>}
    return (
        <div  >
            <input type="button" onClick={load} value="push"></input>
            try
          
        </div>
    )

}
 export default Cardd;
