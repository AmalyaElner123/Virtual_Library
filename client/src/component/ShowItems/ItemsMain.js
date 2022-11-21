import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import  './TrigerButton/DataTableDemo.css'
import '../../index.css'
import utils from '../utils'
import CustomerService from './Sortable/SortService'
import Container from '../ShowItems/TrigerButton/Container'


export const ItemsMain = () => {

    const [items, setItems] = useState([])
    const [itemsForSort, setitemsForSort] = useState([])
    const [nameFilter,setNameFilter]= useState();
    const [openTextFilter,setOpenTextFilter]= useState();
    const [rateFilter,setRateFilter]= useState(0);
    const [statusFilter,setStatusFilter]= useState(false);
    
   //var categoryFilter;
   const setStatusFilterF =()=>{setStatusFilter(!statusFilter)}
        const getData = async()=>
        {
        var  res1 = await utils.getAllItems("http://localhost:8000/api/items");
        setItems(res1);
        setitemsForSort(res1);
        }
        
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
       useEffect( () =>  { getData();  } ,[])

    const actionBodyTemplate = (data) => {
        return <Container type="button" icon="pi pi-cog" data={data}></Container>
    }
    
    return (
        <div>
            שם :<input type="text" onChange={e => setNameFilter({...nameFilter, nameFilter : e.target.value}) }></input>
            <button onClick={getNameFilter}>===</button><br/>
            דירוג :<input type="number" onChange={e => setRateFilter({...rateFilter, rateFilter : e.target.value}) }></input>
            <button onClick={getRateFilter}>===</button><br/>
            מכיל :<input type="text" onChange={e => setOpenTextFilter({...openTextFilter, openTextFilter : e.target.value}) }></input>
            <button onClick={getOpenTextFilter}>===</button><br/>
            לא מושאל :<input type="checkbox"  onChange={setStatusFilterF }></input>
            <button onClick={getStatusFilter}>===</button>

            {/* קטגוריה :<input type="text" onChange={()=>setCategoryFilterF()}></input> */}
         <DataTable value={items}>
             <Column field="idItem" header="קוד" sortable></Column>
             <Column field="name" header="שם" sortable></Column>
             <Column field="category" header="קטגוריה" sortable></Column>
             <Column field="status" header="האם מושאל" sortable></Column>
             <Column field="rate" header="דירוג" sortable></Column>
             <Column field="openText" header="תאור המוצר" sortable></Column>
             <Column field="borrowsNum" header="מספר השאלות" sortable></Column>
             <Column field="uploadDate" header=" תאריך העלאה" sortable></Column>
             <Column field="details" header="פרטי המוצר" body={actionBodyTemplate(items)}></Column>
             {/* <Column field="details" header="פרטי המוצר" body={actionBodyTemplate(items.map(item =>{
              return item.idItem=== ??????;
            }))}></Column> */}
        </DataTable>
         </div>
    );

}; export default ItemsMain;
 

// const DataTableDemo = () => {
//     const [customers, setCustomers] = useState(null);
//     const [selectedCustomers, setSelectedCustomers] = useState(null);
//     const [filters, setFilters] = useState({
//         'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
//         'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
//         'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
//         'representative': { value: null, matchMode: FilterMatchMode.IN },
//         'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
//         'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
//         'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
//         'activity': { value: null, matchMode: FilterMatchMode.BETWEEN }
//     });
//     const [globalFilterValue, setGlobalFilterValue] = useState('');
//     const [loading, setLoading] = useState(true);
//     const representatives = [
//         {name: "Amy Elsner", image: 'amyelsner.png'},
//         {name: "Anna Fali", image: 'annafali.png'},
//         {name: "Asiya Javayant", image: 'asiyajavayant.png'},
//         {name: "Bernardo Dominic", image: 'bernardodominic.png'},
//         {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
//         {name: "Ioni Bowcher", image: 'ionibowcher.png'},
//         {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
//         {name: "Onyama Limba", image: 'onyamalimba.png'},
//         {name: "Stephen Shaw", image: 'stephenshaw.png'},
//         {name: "XuXue Feng", image: 'xuxuefeng.png'}
//     ];

//     const statuses = [
//         'חדש', 'במצב חדש', 'שמור', 'negotiation', 'renewal', 'proposal'
//     ];

//     const customerService = new CustomerService();

//     useEffect(() => {
//         customerService.getCustomersLarge().then(data => { setCustomers(getCustomers(data)); setLoading(false) });
//     }, []); // eslint-disable-line react-hooks/exhaustive-deps

//     const getCustomers = (data) => {
//         return [...data || []].map(d => {
//             d.date = new Date(d.date);
//             return d;
//         });
//     }

//     const formatDate = (value) => {
//         return value.toLocaleDateString('en-US', {
//             day: '2-digit',
//             month: '2-digit',
//             year: 'numeric',
//         });
//     }

//     const formatCurrency = (value) => {
//         return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
//     }

//     const onGlobalFilterChange = (e) => {
//         const value = e.target.value;
//         let _filters = { ...filters };
//         _filters['global'].value = value;

//         setFilters(_filters);
//         setGlobalFilterValue(value);
//     }

//     const renderHeader = () => {
//         return (
//             <div className="flex justify-content-between align-items-center">
//                 <h5 className="m-0">Customers</h5>
//                 <span className="p-input-icon-left">
//                     <i className="pi pi-search" />
//                     <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
//                 </span>
//             </div>
//         )
//     }

//     const countryBodyTemplate = (rowData) => {
//         return (
//             <React.Fragment>
//                 <img alt="flag" src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
//                 <span className="image-text">{rowData.country.name}</span>
//             </React.Fragment>
//         );
//     }

//     const representativeBodyTemplate = (rowData) => {
//         const representative = rowData.representative;
//         return (
//             <React.Fragment>
//                 <img alt={representative.name} src={`images/avatar/${representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
//                 <span className="image-text">{representative.name}</span>
//             </React.Fragment>
//         );
//     }

//     const representativeFilterTemplate = (options) => {
//         return (
//             <React.Fragment>
//                 <div className="mb-3 font-bold">Agent Picker</div>
//                 <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />
//             </React.Fragment>
//         );
//     }

//     const representativesItemTemplate = (option) => {
//         return (
//             <div className="p-multiselect-representative-option">
//                 <img alt={option.name} src={`images/avatar/${option.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
//                 <span className="image-text">{option.name}</span>
//             </div>
//         );
//     }

//     const dateBodyTemplate = (rowData) => {
//         return formatDate(rowData.date);
//     }

//     const dateFilterTemplate = (options) => {
//         return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
//     }

//     const balanceBodyTemplate = (rowData) => {
//         return formatCurrency(rowData.balance);
//     }

//     const balanceFilterTemplate = (options) => {
//         return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />
//     }

//     const statusBodyTemplate = (rowData) => {
//         return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
//     }

//     const statusFilterTemplate = (options) => {
//         return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
//     }

//     const statusItemTemplate = (option) => {
//         return <span className={`customer-badge status-${option}`}>{option}</span>;
//     }

//     const activityBodyTemplate = (rowData) => {
//         return <ProgressBar value={rowData.activity} showValue={false}></ProgressBar>;
//     }

//     const activityFilterTemplate = (options) => {
//         return (
//             <React.Fragment>
//                 <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
//                 <div className="flex align-items-center justify-content-between px-2">
//                     <span>{options.value ? options.value[0] : 0}</span>
//                     <span>{options.value ? options.value[1] : 100}</span>
//                 </div>
//             </React.Fragment>
//         )
//     }

//     const representativeRowFilterTemplate = (options) => {
//         return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterApplyCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" maxSelectedLabels={1} />;
//     }

//     const statusRowFilterTemplate = (options) => {
//         return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
//     }

//     const actionBodyTemplate = () => {
//         return <Button type="button" icon="pi pi-cog"></Button>;
//     }

//     const header = renderHeader();

//     return (
//         <div className="datatable-doc-demo">
//             <div className="card">
//                 <DataTable value={customers} paginator className="p-datatable-customers" header={header} rows={10}
//                     paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}
//                     dataKey="id" rowHover selection={selectedCustomers} onSelectionChange={e => setSelectedCustomers(e.value)}
//                     filters={filters} filterDisplay="menu" loading={loading} responsiveLayout="scroll"
//                     globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} emptyMessage="No customers found."
//                     currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
//                     <Column selectionMode="multiple" selectionAriaLabel="name" headerStyle={{ width: '3em' }}></Column>
//                     <Column field="name" header="שם" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
//                     <Column field="country.name" header="קטגוריה" sortable filterField="country.name" style={{ minWidth: '14rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
//                     <Column field="date" header="תאריך פרסום" sortable filterField="date" dataType="date" style={{ minWidth: '8rem' }} body={dateBodyTemplate}
//                         filter filterElement={dateFilterTemplate} />
//                     <Column field="balance" header="מספר השאלות" sortable dataType="numeric" style={{ minWidth: '8rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
//                     <Column field="status" header="סטטוס" sortable filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '10rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
//                     <Column field="activity" header="תאור" sortable showFilterMatchModes={false} style={{ minWidth: '10rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
//                     <Column headerStyle={{ width: '4rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} />
//                 </DataTable>
//             </div>
//         </div>
//     );
// }
                
// const rootElement = document.getElementById("root");
// ReactDOM.render(<DataTableDemo />, rootElement); 
// export default DataTableDemo;