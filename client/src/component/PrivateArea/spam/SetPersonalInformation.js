import React, { useState } from 'react';
import './SetPersonalInformation.css';

const SetPersonalInformation = (props) => {

const [enteredName,setEnteredName] = useState('');
const [enteredPassword,setEnteredPassword] = useState('');
const [enteredEmail,setEnteredemail] = useState('');
const [enteredAddress,setEnteredAddress] = useState('');
const [enteredPhon,setEnteredPhon] = useState('');

const nameChange =(event) =>{
    setEnteredName(event.target.value);   
}
const PassowrdChange =(event) =>{
    setEnteredPassword(event.target.value);   
}
const emailChange =(event) =>{
    setEnteredemail(event.target.value);   
}

const addressChange =(event) =>{
    setEnteredAddress(event.target.value);   
}

const phonChange =(event) =>{
    setEnteredPhon(event.target.value);   
}

const submitHandler = (event) => {
 event.preventDefault();

 const PersonalInformation ={
    name: enteredName,
    password: enteredPassword,
    email: enteredEmail, 
    address: enteredAddress,
    Phon: enteredPhon
  };

 props.onSavePersonalInformation(PersonalInformation);
 setEnteredName('');
 setEnteredPassword('');
 setEnteredemail('');
 setEnteredAddress('');
 setEnteredPhon('');

};

return (
 <form onSubmit = {submitHandler}>
    <div className='change-personal__controls'>
        <div className='change-personal__control'>
            <label> שינוי שם משתמש</label>
            <input 
            type='text'
            value={enteredName} 
            onChange={nameChange}
            />
        </div>
        <div className='change-personal__control'>
            <label>שינוי סיסמה</label>
            <input 
            type='text'  
            value={enteredPassword} 
            onChange={PassowrdChange}
            />
        </div>
    <div className='change-personal__control'>
        <label>שינוי כתובת מייל</label>
        <input 
        type='text'
        value={enteredEmail} 
        onChange={emailChange} 
        />
    </div>

    <div className='change-personal__control'>
        <label>שינוי כתובת מגורים</label>
        <input 
        type='text'
        value={enteredAddress} 
        onChange={addressChange} 
        />
    </div>

    <div className='change-personal__control'>
        <label>שינוי מספר טלפון</label>
        <input 
        type='text'
        value={enteredPhon} 
        onChange={phonChange} 
        />
    </div>
    </div>
    <div className='change-personal__actions'>
    <button type='button' onClick={props.onCancel} >יציאה</button>
    <button type='submit'>עדכן פרטים</button>
    </div>
 </form>
    );
};
export default SetPersonalInformation;