import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
//import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
//import for primeReact website-design
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { InputText } from 'primereact/inputtext';
// import { Dropdown } from 'primereact/dropdown';
// import { InputNumber } from 'primereact/inputnumber';
// import { Button } from 'primereact/button';
// import { ProgressBar } from 'primereact/progressbar';
// import { Calendar } from 'primereact/calendar';
// import { MultiSelect } from 'primereact/multiselect';
// import { Slider } from 'primereact/slider';
import  './TrigerButton/DataTableDemo.css'
import '../../index.css'
import utils from '../service/utils'
import Container from '../ShowItems/TrigerButton/Container'
//import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
// import for mui website- design
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Buttons from '@mui/material/Button';
import {Checkbox,Grid,TextField} from '@mui/material';
import Itemim from "@mui/material/Grid"
//import SortService from './sortService';


export const ItemsMain = () => {

    const [items, setItems] = useState([])
    //const [selectedProducts, setSelectedProducts] = useState([])
    const [itemsForSort, setitemsForSort] = useState([])
    const [nameFilter,setNameFilter]= useState();
    const [openTextFilter,setOpenTextFilter]= useState();
    const [rateFilter,setRateFilter]= useState(0);
    const [statusFilter,setStatusFilter]= useState(false);
    const getData = async()=>
        {
        var  res1 = await utils.getAllItems("http://localhost:8000/api/items");
        setItems(res1);
        setitemsForSort(res1);
        }
        useEffect( () =>  { getData();  } ,[])

        const setStatusFilterF =()=>{setStatusFilter(!statusFilter)}
   
        
        const getNameFilter= ()=>
        {
           const data=itemsForSort
           .filter(function(d) {if (d.name===nameFilter.nameFilter  ) {
            console.log(d.name);
             return d;}
             else (console.log("hhhh"))});
            setItems(data);
        }
        const getOpenTextFilter= ()=>
        {
           const data=itemsForSort
           .filter(function(d) {if (d.openText.includes(openTextFilter.openTextFilter)  ) {
            console.log(d.openText);
             return d;}
             else (console.log("hhhh"))});
            setItems(data);
        }
        const getRateFilter= ()=>
        {
           const data=itemsForSort
           .filter(function(d) {if (d.rate===Number(rateFilter.rateFilter)  ) {
            console.log(d.rate);
             return d;}
             else (console.log("hhhh"))});
            setItems(data);
        }
        const getStatusFilter= ()=>
        {
           const data=itemsForSort
           .filter(function(d) {if (d.status===statusFilter  ) {
            console.log(d.status);
             return d;}
             else (console.log("hhhh"))});
            setItems(data);
        }
   
    const actionBodyTemplate = (data) => {
        return <Container type="button" icon="pi pi-cog" data={data}></Container>
    }
    const filters = {
        'name': { value: null, matchMode: FilterMatchMode.STARTS_WITH }
    }
    return (
        <div >
            <br/>
            
<Grid container direction="row" p={0.5} rowSpacing={1} columnSpacing={{ xs: 1}}>
  <Grid item xs>
    <Itemim>
       <Grid p={0.5} container direction="column" className='filter' rowSpacing={1} columnSpacing={{ xs: 1}}> 
          <Grid p={0.5} item xs>
            <Itemim>
            < TextField  style={{direction:"rtl",padding:"5"}} type="text" label="???? ????????" size="small" onChange={e => setNameFilter({...nameFilter, nameFilter : e.target.value}) }></TextField>
            < Buttons variant="outlined" onClick={getNameFilter}>===</Buttons>
            </Itemim>
          </Grid>
          <Grid p={0.5} item xs>
            <Itemim>
              <TextField  style={{direction:"rtl"}} type="number" label="??????????" size="small" onChange={e => setRateFilter({...rateFilter, rateFilter : e.target.value}) }></TextField>
              <Buttons variant="outlined" onClick={getRateFilter}>===</Buttons>
            </Itemim>
          </Grid>
          <Grid p={0.5} item xs>
            <Itemim>
              <TextField type="text" label="????????" size="small" onChange={e => setOpenTextFilter({...openTextFilter, openTextFilter : e.target.value}) }></TextField>
              <Buttons variant="outlined" onClick={getOpenTextFilter}>===</Buttons>
            </Itemim>
          </Grid>
       </Grid>
       <Grid p={0.5} item xs>
         <Itemim>
           ?????????? :<Checkbox  onChange={setStatusFilterF }></Checkbox>
           <Buttons variant="outlined" onClick={getStatusFilter}>===</Buttons>
         </Itemim>
        </Grid>
    </Itemim>           
 </Grid>
  
  <Grid item rowSpacing={1} columnSpacing={{ xs: 1}}>
    <Itemim>
        <Grid p={0.5}>
            <Itemim>
    <DataTable value={items} style={{direction:"rtl",width:1000}} size="small" className="p-datatable-customers" selectionMode="multiple" filters={filters} rows={10} 
    paginator currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" emptyMessage="??????????????, ???? ?????????? ?????????? ?????????????? ????????????"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowHover>
             <Column field="idItem" header="??????" sortable></Column>
             <Column field="name" header="????" sortable filter></Column>
             <Column field="category" header="??????????????" sortable></Column>
             <Column field="status" header="?????? ??????????" sortable></Column>
             <Column field="rate" header="??????????" sortable></Column>
             <Column field="openText" header="???????? ??????????" sortable></Column>
             <Column field="borrowsNum" header="???????? ????????????" sortable></Column>
             <Column field="uploadDate" header=" ?????????? ??????????" sortable></Column>
             <Column field="details" header="???????? ??????????" body={(data,props)=>actionBodyTemplate(items[props.rowIndex])} ></Column>
             {/* <SortService></SortService> */}
        </DataTable>
        </Itemim>
        </Grid>
    </Itemim>
  </Grid>
  
</Grid>
        </div>
    );

}; export default ItemsMain;

