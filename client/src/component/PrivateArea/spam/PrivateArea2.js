import React, { useState } from 'react';
import MyListProducts from './MyListProducts';
import SetPersonal from "./SetPersonalInformation";
import './SetPersonalInformation.css';


const PrivateArea2 =(props) =>{
    const[isEditingInformation,setIsEditingInformation]=useState(false);
    const[isEditingLent,setIsEditingLent]=useState(false);
    const[isEditingProduct,setIsEditingProduct]=useState(false);
    const savePersonalData = (enteredPersonalData) => {
       const PersonalData = {
            ...enteredPersonalData,
        };
       props.onChangePersonal(PersonalData);
       setIsEditingInformation(false);
    };
    const saveListProducts = (enteredProductsData) => {
        const ProductsData = {
            ...enteredProductsData};
    props.onMyListProducts(ProductsData)
        setIsEditingProduct(false);
     };

    const startEditingInformationHandler = () =>{
        setIsEditingInformation(true);
    };
    const stopInformationEditingHandler = () =>{
        setIsEditingInformation(false);
    };
    const startProductEditingHandler = () =>{
        setIsEditingProduct(true);
    };
    const stopProductEditingHandler = () =>{
        setIsEditingProduct(false);
    };

    const startLentEditingHandler = () =>{
        setIsEditingLent(true);
    };
    const stopLentEditingHandler = () =>{
        setIsEditingLent(false);
    };

return (
    <div>
<div>
    {!isEditingInformation && <button onClick={startEditingInformationHandler}>
    <h2> עדכון פרטים אישיים</h2>
      לעריכת פרטי כניסה: שם, סיסמא, אימייל, כתובת וטלפון
        </button>}
        {isEditingInformation && <SetPersonal onSaveExpenseData={savePersonalData} onCancel={stopInformationEditingHandler}/>}
</div>
<div >
    {!isEditingProduct && <button onClick={startProductEditingHandler}>
    <h2>המוצרים שלי</h2>
    לצפייה במוצרים שהעלית, עדכון פרטי מוצר ופרטי לקוח  
    </button>}
    {isEditingProduct && <MyListProducts onMyListProducts={saveListProducts} onCancel={stopProductEditingHandler}/>}
    </div>
<div >   
    {!isEditingLent && <button onClick={startLentEditingHandler}>
        <h2>ההשאלות שלי</h2>
    לצפייה במוצרים ששאלת, דירוג המוצר ובעליו 
    </button>}
    {isEditingLent && <MyListProducts onCancel={stopLentEditingHandler}/>}
    </div>
    </div>
 );
};
export default PrivateArea2;
