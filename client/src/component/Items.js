// import logo from './component/logo.svg' ;
import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import utils from './utils'

function Items() {

  const [items, setItems] = useState([])

  useEffect(async () => {
  

    // let resp =  utils.getAllItems()
    var resp = await utils.getAllItems("http://localhost:8000/api/items");
    console.log("items:")
    console.log(resp)
    


    setItems(resp);

  }, [])

  return (
    <div className="App">
        <h3>Items Page</h3>
        <ul>
          {
            items.map((item, index) =>
            {
              console.log("item:")
              console.log(item)
              console.log("index:")
              console.log(index)

              return <li key={index}>{item.name}</li>
            })
          }
        </ul>
    </div>
  );
}

export default Items;
