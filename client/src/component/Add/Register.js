import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
// import '../../index.css';
import ReactDOM from 'react-dom';
import utils from '../service/utils';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { CountryService } from '../service/CountryService';

import './Add.css';
//import { use } from '../../../../server/routers/userRouter';

export const FormikFormDemo = () => {
    const [countries, setCountries] = useState([]);
    const [countries1, setCountries1] = useState([]);

    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [user, setUser] = useState(['']);

    //const  [user,setUser]=useState({userName:'',userPassword:'',email:'',address:'',phone:''})


    const countryservice = new CountryService();


    
    useEffect(() => {
     
      countryservice.getCountries().then(data => setCountries(data));
         //setCountries1(countries)  
         //console.log("countries")
         //console.log(countries)
    }, [countries]); // eslint-disable-line react-hooks/exhaustive-deps

    // const getCountriesData = async()=>
    //     {
    //         // await countryservice.getCountries().then(data => setCountries(data));
        
    //      var  res1 = await countryservice.getCountries();
    //      setCountries(res1);
         
    //     console.log("setCountries")
    //     console.log(countries.data)
    //     }
    //     useEffect( () =>  { getCountriesData();  } ,[])
       

    
    const formik = useFormik({
        initialValues: {
            userName: '',
            userPassword: '',
            email: '',
            address: null,
            phone:'',
            accept: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.userName) {
                errors.userName = 'חובה להכניס שם.';
            }

            if (!data.email) {
                errors.email = 'חובה להכניס כתובת מייל.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address. E.g. example@email.com';
            }

            if (!data.userPassword) {
                errors.userPassword = 'חובה להכניס סיסמה.';
            }

            if (!data.phone) {
                errors.phone = 'חובה להכניס טלפון.';
            }
            // if (!data.accept) {
            //     errors.accept = 'You need to agree to the terms and conditions.';
            // }

            return errors;
        },
        onSubmit: async(data) => {
           // onSubmit: (data) => {
            setUser(user.userName=data.userName);
            setUser(user.userPassword=data.userPassword);
            setUser(user.email=data.email);
            setUser(user.address=data.address);
            setUser(user.phone=data.phone);
            //setUser(user.accept=data.accept);
            
            console.log("user:")
            console.log(user)
            //setFormData(data);
            //setUser(data)
            //console.log("setFormData");
            //console.log(formData)
           
        // try{
        //     const res = await utils.createUser("http://localhost:8000/api/users/register",user);
        //     console.log(res)
        //     const data = await res.data;
        //     console.log(data)
        //     //setRegistered(true);
        //   } catch(e){
        //     console.log(e)
        //   }
        var res = await utils.createUser("http://localhost:8000/api/users/register",user)
        //var res =  utils.createUser("http://localhost:8000/api/users/register",data)

        
        console.log("res.data:")
       console.log(res.data);
        
        if (!res.data)
        {
            console.log("Email address already exist")
        }
            setShowMessage(true);

            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>בחר סיסמה</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>לפחות אות קטנה אחת</li>
                <li>לפחות אות גדולה אחת</li>
                <li>לפחות מספר אחד</li>
                <li>מינימום 8 תווים</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">משתמש חדש</h5>
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="userName" name="userName"  value={formik.values.userName} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('userName') })} />
                                <label htmlFor="userName" className={classNames({ 'p-error': isFormFieldValid('userName') })}>שם*</label>
                            </span>
                            {getFormErrorMessage('userName')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Password dir='ltr' id="userPassword" name="userPassword"  value={formik.values.userPassword} onChange={formik.handleChange} toggleMask
                                    className={classNames({ 'p-invalid': isFormFieldValid('userPassword') })} header={passwordHeader} footer={passwordFooter} />
                                <label htmlFor="userPassword" className={classNames({ 'p-error': isFormFieldValid('userPassword') })}>סיסמה*</label>
                            </span>
                            {getFormErrorMessage('password')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email"  value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                       
                        {/* <div className="field">
                            <span className="p-float-label">
                                <Calendar id="date" name="date" value={formik.values.date} onChange={formik.handleChange} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                <label htmlFor="date">Birthday</label>
                            </span>
                        </div> */}
                        <div className="field">
                            <span className="p-float-label">
                                <Dropdown id="address" name="address"  value={formik.values.address} onChange={formik.handleChange} options={countries} optionLabel="name" />
                                <label htmlFor="address">ערים</label>
                            </span>
                        </div>
                        {/* <div className="field-checkbox">
                            <Checkbox inputId="accept" name="accept" checked={formik.values.accept} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('accept') })} />
                            <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid('accept') })}>I agree to the terms and conditions*</label>
                        </div> */}
                         <div className="field">
                            <span className="p-float-label">
                                <InputText id="phone" name="phone"  value={formik.values.phone} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('phone') })} />
                                <label htmlFor="phone" className={classNames({ 'p-error': isFormFieldValid('phone') })}>טלפון*</label>
                            </span>
                            {getFormErrorMessage('phone')}
                        </div>

                        <Button type="submit" label="Submit" className="mt-2" />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default FormikFormDemo;           
// const rootElement = document.getElementById("root");
// ReactDOM.render(<FormikFormDemo />, rootElement);