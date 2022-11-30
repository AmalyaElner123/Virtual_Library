import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import ReactDOM from 'react-dom';

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
import './AddNewItem.css';
import utils from '../utils';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Tooltip } from 'primereact/tooltip';
import axios from 'axios';




export const AddItem= () => {
       
     const [item, setItem] = useState({});
     const [image,setImage] = useState(['']);
     
     const toast = useRef(null);
     const fileUploadRef = useRef(null);
    // const  [item,setItem]=useState({name:'',category:[''],openText:'',uploadDate:''})
    // const  [item,setItem]=useState({name:'',category:'',openText:'',uploadDate:''})
       const categories = [
        { name: 'ספרים' },
        { name: 'רהיטים' },
        { name: 'מכשירי חשמל' },
        { name: 'תינוקות' },
        { name: 'לבית' },
        { name: 'מכשירי עבודה' },
        { name: 'אביזרי לבוש' }
    ];
    const AddItem = useFormik({
        initialValues: {
            name: '',
            category: [''],
            openText:'',
            img:''
        },
        validate: (data) => {
            let errors = {};
            if (!data.name) {
                errors.name = 'חובה למלא שם.';
            }
            if (!data.category) {
                errors.category = 'חובה לבחור קטגוריה.';
            }
                        if (!data.openText) {
                errors.openText = 'חובה למלא תאור.';
            }
            return errors;
        },
        
        onSubmit:  async (data) => {
        var today = new Date,date1 = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
        console.log("bef_new_item:")
        console.log(data)
        setItem({...item,uploadDate:date1.value})

        console.log(item)

        //var res = await utils.createItem("http://localhost:8000/api/items",item)

        console.log("add_new_item");
        
        AddItem.resetForm();
        }

    });

    const isFormFieldValid = (name) => !!(AddItem.touched[name] && AddItem.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{AddItem.errors[name]}</small>;
    };
    //try
    // const state = {
  
    //   // Initially, no file is selected
    //   selectedFile: null
    // };
    // // On file select (from the pop up)
    //  const onFileChange =  event => {
     
    //     // Update the state
    //     this.setState({ selectedFile: event.target.files[0] });
       
    //   };
       
    //   // On file upload (click the upload button)
    //   const onFileUpload = () => {
       
    //     // Create an object of formData
    //     const formData = new FormData();
       
    //     // Update the formData object
    //     formData.append(
    //       "myFile",
    //       this.state.selectedFile,
    //       this.state.selectedFile.name
    //     );
       
    //     // Details of the uploaded file
    //     console.log(this.state.selectedFile);
       
    //     // Request made to the backend api
    //     // Send formData object
    //     axios.post("api/uploadfile", formData);
    //   };
       
    //   // File content to be displayed after
    //   // file upload is complete
    //   const fileData = () => {
       
    //     if (this.state.selectedFile) {
            
    //       return (
    //         <div>
    //           <h2>File Details:</h2>
    //           <p>File Name: {this.state.selectedFile.name}</p>
    
    //           <p>File Type: {this.state.selectedFile.type}</p>
    
    //           <p>
    //             Last Modified:{" "}
    //             {this.state.selectedFile.lastModifiedDate.toDateString()}
    //           </p>
    
    //         </div>
    //       );
    //     } else {
    //       return (
    //         <div>
    //           <br />
    //           <h4>Choose before Pressing the Upload button</h4>
    //         </div>
    //       );
    //     }
    //   };
      //try
    // const onImageChange = (e) =>
    // {
    //     console.log("e.target.files")  
    //     console.log(e.target.files)  

    //   setImage([...e.target.files]);
    //   console.log("image:")
    //   console.log(image)
    // }
    // const onFileSelected = (e) => {
    //     const files = e.target.files;
    //     if (!files || !files[0]) {
    //       console.log('no files selecting, early exit');
    //       return;
    //     }
    
    
    const onUpload = (e) => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
        console.log("e.url")
        console.log(e.url)
        console.log("e.name:")
        console.log(e.name)

        axios.post(e.url, e.name);

        
      }

       return (
        <div className="form-demo">
            <div className="flex justify-content-center">
                <div className="card" float="right">
                    <h5 className="text-center">הוספת מוצר חדש</h5>
                    <form onSubmit={AddItem.handleSubmit} className="p-fluid">
                        <div className="field" >
                            <span className="p-float-label">
                             <InputText id="name" name="name" value={AddItem.values.name} onChange={AddItem.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                             <label  htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>שם*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>

                        <div className="field"> 
                           <span className="p-float-label">
                        {/* <h5>Chips</h5> */}
                            {/* <MultiSelect id="category" name="category" value={selectedCategory} options={categories} onChange={(e) => setselectedCategory(e.value)} optionLabel="name" placeholder="בחר קטגוריה" display="chip" />  */}
                            <MultiSelect id="category" name="category" value={AddItem.values.category} options={categories} onChange={AddItem.handleChange} optionLabel="name" placeholder="בחר קטגוריה" display="chip" autoFocus className={classNames({ 'p-invalid': isFormFieldValid('openText') })} /> 
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
                      
                        <div>
                          <Toast ref={toast}></Toast>
                          <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
                          <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
                          <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />
                          <div className="card">
                            <h5>Advanced</h5>
                                <FileUpload name="demo[]" url="https://github.com/AmalyaElner123/Virtual_Library/blob/main/Images" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000} 
                                               emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                          </div>   
                        </div>   
                        
                          {/* <div>
                         <input type="file" onChange={onFileChange} />
                         <button onClick={onFileUpload}> Upload!</button>
                         {fileData}
                         </div> */}
                       
                        <Button type="submit" label="Submit" className="mt-2" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;              
// const rootElement = document.getElementById("root");
// ReactDOM.render(<AddItem />, rootElement);