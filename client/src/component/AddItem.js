import { useState } from "react";
import utils from './utils';

function AddItem() {

  const  [item,setItem]=useState({idItem:'',name:'', idOwner:'',category:'',openText:'',img:''})
 
  const  AddItemFunc= async() =>
    {
        console.log("bef_new_item:")
        console.log(item)
        var res = await utils.createItem("http://localhost:8000/api/items",item)
        console.log("add_new_item");
        console.log(res);
        // if (!res)
        // {
        //     console.log("Email address already exist")
        // }
        
            
         
    }
    const onClickAllItems= async() =>
    {
        var res = await utils.getAllItems("http://localhost:8000/api/items")
        console.log("getAllItems");
        console.log(res);
    }

    return (
        <div className="App">
            <h3>הוספת מוצר חדש</h3>
            קוד מוצר: <input type="text" onChange={e=>setItem({...item,idItem:e.target.value})}></input><br/>
            שם מוצר:  <input type="text" onChange={e=>setItem({...item,name:e.target.value})}></input><br/>
            קוד בעל המוצר:<input type="text" onChange={e=>setItem({...item,idOwner:e.target.value})}></input><br/>
            קטגוריה: <input type="text" onChange={e=>setItem({...item,category:e.target.value})}></input><br/>
            {/* סטטוס מוצר:<input type="text" onChange={e=>setItem({...item,status:e.target.value})}></input><br/> */}
            מצב המוצר:<input type="text" onChange={e=>setItem({...item,openText:e.target.value})}></input><br/>
            העלה תמונה : <input type="text" onChange={e=>setItem({...item,img:e.target.value})}></input><br/>

            <button type="button"  onClick={AddItemFunc} >ADD ITEM</button>
            <button onClick={onClickAllItems}>GETALLITEMS</button>
        </div>

    );
}
export default AddItem;