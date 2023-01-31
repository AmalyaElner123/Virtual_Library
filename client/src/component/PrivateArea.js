import React, { useState } from 'react';
import Login from './Login';
import Register from './Add/Register'
import { Splitter, SplitterPanel } from 'primereact/splitter';



const PrivateArea =(props) =>{
    

return (
    <div>
 
<Splitter style={{ height: '500px',width:'100%' }}>
    <SplitterPanel className="flex align-items-center justify-content-center"><Login/></SplitterPanel>
    <SplitterPanel className="flex align-items-center justify-content-center"><Register/></SplitterPanel>
</Splitter>
    </div>
 );
};
export default PrivateArea;
