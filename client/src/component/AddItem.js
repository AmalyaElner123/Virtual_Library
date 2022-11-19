import { useState } from "react";
import utils from './utils';

function AddItem() {

//   const  [date1,setDate1] =  useState('')
  const  [item,setItem]=useState({idItem:'',name:'',category:'',openText:'',uploadDate:'',img:''})

  const  AddItemFunc= async() =>
    {
        
// var today = new Date,date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var today = new Date,date1 = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
        
        setItem({...item,uploadDate:date1.value})
        
        console.log("bef_new_item:")
        console.log(item)
       
        var res = await utils.createItem("http://localhost:8000/api/items",item)
        console.log("add_new_item");
        console.log(res);
        
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
            
            שם מוצר:    <input type="text" onChange={e=>setItem({...item,name:e.target.value})}></input><br/>
            קטגוריה:    <input type="text" onChange={e=>setItem({...item,category:e.target.value})}></input><br/>
            תאור המוצר: <input type="text" onChange={e=>setItem({...item,openText:e.target.value})}></input><br/>
            העלה תמונה :<input type="text" onChange={e=>setItem({...item,img:e.target.value})}></input><br/>

            <button type="button"  onClick={AddItemFunc} >ADD ITEM</button>
            <button onClick={onClickAllItems}>GETALLITEMS</button>
        </div>

    );
}
export default AddItem;