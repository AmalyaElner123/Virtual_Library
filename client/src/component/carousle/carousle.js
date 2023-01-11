import './carusleJs.scss'
import utils from '../service/utils';
import React, { useState, useEffect } from 'react';

function Carousle() {
	const [items, setItems] = useState([])
	const [srclist, setsrclist] = useState([])

	const getData = async()=>
	{
	var  res1 = await utils.getAllItems("http://localhost:8000/api/items");
	setItems(res1);
	console.log(items);
	const src=res1.map(function(d) {return d.img});
	 setsrclist(src);
	 console.log(srclist)

	}
	useEffect( () =>  { getData();  } ,[items,srclist])
const todo = ()=>
{
	console.log(items);
	const src=items.map(function(d){if(d.img)
	 {return d.img}});
	 setsrclist(src);
	}
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
