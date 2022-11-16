const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken');

exports.getAllUsers = function()
{
    return new Promise((resolve, reject) =>
    {
        userModel.find({}, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}
exports.getUser = function(id)
{
    return new Promise((resolve, reject) =>
    {
        userModel.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}
exports.createUser =  async (obj) =>
{
    const users = await this.getAllUsers().then(data => {return data},function(err,data)
    {
      if (err)
      {
        reject(err)
      }
    
    })  ;
    const email = users.find(u => { return u.email === obj.email },function(err,data)
    {
      if(err)
      {
         reject(err)
      }
      else
      {
        // resolve(data)
        resolve("Existing email !")
      }
    });
    if (!email)
    {
    
      return new Promise((resolve, reject) =>
        {
        let user = new userModel({
            userName    : obj.userName,
            userPassword    : obj.userPassword,
            email       : obj.email,
            address     : obj.address,
            phone       : obj.phone,
            rating      : obj.rating
        });
        
        user.save(function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Created !")
            }
        })
    })
  }
}
exports.updateUser = function(id,obj)
{
    return new Promise((resolve, reject) =>
    {

        userModel.findByIdAndUpdate(id,
            {
                userName    : obj.userName,
                userPassword: obj.userPassword,
                email       : obj.email,
                address     : obj.address,
                phone       : obj.phone,
                rating      : obj.rating
            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve("Updated !")
                }
            })

    })
}
exports.deleteUser = function(id)
{
    return new Promise((resolve, reject) =>
    {

        userModel.findByIdAndDelete(id,function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve("Deleted !")
                }
            })

    })
}
exports.login = function(email,userPassword)
{
    return new Promise(async(resolve,reject)=>
    {
     var users = await this.getAllUsers().then(data=>{return data});
     
     const accessTokenSecret = 'somerandomaccesstoken';
     const user = users.find(u => { return u.email === email && u.userPassword === userPassword});

     if(user) 
     {
        //generate an access token 
        const accessToken = jwt.sign({email: user.eamil, userPassword: user.userPassword},accessTokenSecret);

        resolve ({token : accessToken});
        // resolve.status(200).send({ token: accessToken});
     }
     else 
     {
        
        // reject("email or password incorect!");
        // return;

        resolve ("email or password incorect!");
     }
    })
}
// router.post('/login', function(req,res) {
  
//     const username = req.body.username;
//     const password = req.body.password;
//     console.log("in_authController")
//     console.log("username")
//     console.log("password")
//     //if (validateEmailAndPasswird()){
//     if (true)
//     {
//         //const userId = findUserIdForUserNAme(username);
//         const userId = "someuserid";

//         //Get the real secret key from db or enviroment variable...
//         const RSA_PRIVATE_KEY = 'somekey';

//         var tokenData = jwt.sign({ id: userId },RSA_PRIVATE_KEY,{expiresIn: 7200}//expires in 2 hours
//                                 );
//         res.status(200).send({ token: tokenData, "userrole" : "IT Admin" });

//     } 
//     else
//     {
//         res.sendStatus(401);
//     }
    
// });
//module.exports = router;