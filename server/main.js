const express = require('express');
const userRouter = require('./routers/userRouter');
const itemRouter = require('./routers/itemRouter');
//const authController = require('./controllers/authController');
const cors = require('cors');

//Allows access from react(explorer)
const app = express();



app.use(cors());
app.use(cors({ credentials: true }))

//try
// var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// var builder = WebApplication.CreateBuilder(args);
// builder.Services.AddCors(options =>
//     {
       
//     options.AddDefaultPolicy(
//         policy =>
//         {
//             policy.WithOrigins("http://localhost:19008")
//                 .AllowAnyHeader()
//                 .AllowAnyMethod();
//         });
// });
// var app1 = builder.Build();
// app1.UseCors();
//try

app.use(express.json());

require('./configs/database');
// app.use('/api/auth',authController)
//  app.use('/api/auth/login',authController)
 app.use('/api/users',userRouter);
 app.use('/api/items',itemRouter);
app.listen('8000');
console.log("ok")



