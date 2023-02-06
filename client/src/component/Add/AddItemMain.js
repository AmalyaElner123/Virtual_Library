import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
// import '../../index.css';
import ReactDOM from 'react-dom';
import { Base64 } from 'js-base64';
import { encode, decode } from 'js-base64';

import React, { useState ,useRef} from 'react';
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
import { MultiSelect } from 'primereact/multiselect';
//import { CountryService } from '../service/CountryService';
import './Add.css';
import utils from '../service/utils';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Tooltip } from 'primereact/tooltip';
import axios from 'axios';
import PersonalDetailRouter from '../PersonalDetailRouter';




export const AddItem= () => {
       
      const [item, setItem] = useState([]);
      const [selectedCategory, setselectedCategory] = useState(null);
    //   const  [item,setItem]=useState({name:'',category:'',openText:'',img:'',uploadDate:Date})

         
    const AddItem = useFormik({
        initialValues: {
            name: '',
            //category: [''],
            category: '',
            openText:'',
            img:'',
            uploadDate:Date
        },
        validate: (data) => {
            let errors = {};
            if (!data.name) {
                errors.name = 'חובה למלא שם.';
            }
            // if (!data.category) {
            //     errors.category = 'חובה לבחור קטגוריה.';
            // }
             if (!data.openText) {
                errors.openText = 'חובה למלא תאור.';
            }
            return errors;
        },
        
         onSubmit:  async (data) => {


        var today = new Date,date1 = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()

        //       setItem(data)
         setItem(item.name=data.name);
         setItem(item.category=selectedCategory)
         setItem(item.openText=data.openText)
        //  setItem({...item, uploadDate:date1 });
         //setItem({...item,data})
        
        console.log("item:")
        console.log(item)
        setItem(item.uploadDate=date1)
        console.log("item__with_date:")
        console.log(item)
        

        var res = await utils.createItem("http://localhost:8000/api/items",item)


        console.log("add_new_item");
        
        AddItem.resetForm();
        }

    });

    const isFormFieldValid = (name) => !!(AddItem.touched[name] && AddItem.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{AddItem.errors[name]}</small>;
    };
    
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };
      const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setItem({ ...item, img: base64 });
      };
   
    
       return (
        <div className="form-demo">
            <div className="flex justify-content-center">
                <div className="card" float="right">
                    <PersonalDetailRouter/>
                    <h5 className="text-center">הוספת מוצר חדש</h5>
                    <form onSubmit={AddItem.handleSubmit} className="p-fluid">
                        <div className="field" >
                            <span className="p-float-label">
                            {/* <input type="text" onChange={e=>setItem({...item,name:e.target.value})}></input><br/>    */}
                             <InputText dir="r2l" id="name" name="name" value={AddItem.values.name}  onChange={AddItem.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                             <label middlehtmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>שם*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>

                        <div className="field"> 
                           <span className="p-float-label">
                        {/* <h5>Chips</h5> */}
                            <MultiSelect id="category" name="category" value={selectedCategory} options={categories} onChange={(e) => setselectedCategory(e.value)} optionLabel="name" placeholder="בחר קטגוריה" display="chip" /> 
                            {/* <MultiSelect id="category" name="category" value={AddItem.values.category} options={categories} onChange={AddItem.handleChange} optionLabel="name" placeholder="בחר קטגוריה" display="chip" autoFocus className={classNames({ 'p-invalid': isFormFieldValid('category') })} />  */}
                            {/* <MultiSelect id="category" value={AddItem.values.category} options={categories} onChange={AddItem.handleChange} optionLabel="name" placeholder="בחר קטגוריה" display="chip" /> */}

                            <label htmlFor="category" className={classNames({ 'p-error': isFormFieldValid('category') })}>קטגוריה*</label>
                           </span>
                           {getFormErrorMessage('category')}
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="openText" name="openText" value={AddItem.values.openText} onChange={AddItem.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('openText') })} />
                                <label htmlFor="openText" className={classNames({ 'p-error': isFormFieldValid('openText') })}>תאור*</label>
                            </span>
                            {getFormErrorMessage('openText')}
                        </div>
                      
                        {/* <div>
                          <Toast ref={toast}></Toast>
                          <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
                          <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
                          <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />
                          <div className="card">
                            <h5>Advanced</h5>
                                <FileUpload name="demo[]" url="https://github.com/AmalyaElner123/Virtual_Library/tree/main/Images" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000} 
                                               emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                          </div>   
                        </div>    */}
                        
                         <div>
                         {/* <input type="file" onChange={onFileChange} /> */}
                         <input type="file" label="Image" name="img" accept=".jpeg, .png, .jpg" onChange={(e) => handleFileUpload(e)}/>
                         {/* <button onClick={onFileUpload}> Upload!</button>
                         {fileData} */}
                         </div> 
                        <Button type="submit" label="הוספה" className="mt-2" ></Button>
                        {/* <button >ADD ITEM</button> */}

                    </form>
                </div>
            </div>
        </div>
    );
};
// const categories = [
//     { name: 'ספרים' , code: '0'},
//     { name: 'רהיטים' ,code: '1'},
//     { name: 'מכשירי חשמל' , code: '2' },
//     { name: 'תינוקות' , code: '3'},
//     { name: 'לבית' , code: '4'},
//     { name: 'מכשירי עבודה', code: '5' },
//     { name: 'אביזרי לבוש' , code: '6'}
// ];
const categories = [
    { name: 'ספרים' },
    { name: 'רהיטים' },
    { name: 'מכשירי חשמל' },
    { name: 'תינוקות' },
    { name: 'לבית'  },
    { name: 'מכשירי עבודה'},
    { name: 'אביזרי לבוש' }
];


export default AddItem;              
// const rootElement = document.getElementById("root");
// ReactDOM.render(<AddItem />, rootElement);