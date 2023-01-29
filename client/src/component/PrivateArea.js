import React, { useState } from 'react';
import Login from './Login';
import Register from './Add/Register'

// import for mui website- design
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Buttons from '@mui/material/Button';
import {Checkbox,Grid,TextField} from '@mui/material';
import Itemim from "@mui/material/Grid"

const PrivateArea =(props) =>{
    

return (
    <div>
        <Grid container direction="row" p={0.5} rowSpacing={1} columnSpacing={{ xs: 1}}>
  <Grid item xs>
<Itemim>
<Login></Login>
</Itemim>
</Grid>
<Grid item xs>
<Itemim>
<Register>
</Register>
</Itemim>
</Grid>
</Grid>
    </div>
 );
};
export default PrivateArea;
