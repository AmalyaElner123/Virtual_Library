const express = require('express');
const userRouter = require('./routers/userRouter');
const itemRouter = require('./routers/itemRouter');
//const authController = require('./controllers/authController');
var cors = require('cors');

//Allows access from react(explorer)
const app = express();


app.use(cors());
app.use(express.json());

require('./configs/database');

// app.use('/api/auth',authController)
//  app.use('/api/auth/login',authController)
 app.use('/api/users',userRouter);
 app.use('/api/items',itemRouter);
app.listen('8000');




