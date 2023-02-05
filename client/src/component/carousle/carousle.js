import './carusleJs.scss'
import utils from '../service/utils';
import React, { useState, useEffect } from 'react';
import { Base64 } from 'js-base64';
import { encode, decode } from 'js-base64';
function Carousle() {
	const [items, setItems] = useState([])
	const [srclist, setsrclist] = useState([])

	const getData = async()=>
	{
		console.log("getData")
	var  res1 = await utils.getAllItems("http://localhost:8000/api/items");
	setItems(res1);
	console.log(items);
	const src=res1.map(function(d) { return d.img});
	 setsrclist(src);
	 console.log(srclist[0])

	}
	useEffect( () =>  {console.log("useEffect"); getData();  } ,[])

    return (
        <div  >
            <div className="slider">
	<div className="slide-track">
	
			{
			 srclist.map(p =>{ if(p){console.log(srclist.indexOf(p)); return <img src={p} height="100" width="250" alt={p} />
		}}
				)
			
			
	}
        </div>
		</div>
		</div>
    )

}
 export default Carousle;
