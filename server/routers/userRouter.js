const express = require('express');
const userBL = require('../BL/userBL')
const router = express.Router();

const jwt = require('jsonwebtoken');
const app = express();
const accessTokenSecret = 'somerandomaccesstoken';

const authenticateJWT = (req, res, next) => {


// const authHeader = req.token;

 var authHeader = req.headers['token'];
  
   if (authHeader)
   {
    // const token = authHeader.split(' ')[1];

    jwt.verify(authHeader, accessTokenSecret, (err, user) => {
        if (err) {
            
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
   }
    else{
        res.sendStatus(401);   
        // res("you must enter throw login") 
        
    }
}
router.route('/')
    .get(authenticateJWT,function(req, resp)
    // .get(function(req, resp)
    {
        userBL.getAllUsers().then(data =>
            {
                return resp.json(data);
            })
    })


router.route('/:id')
     .get(authenticateJWT,function(req, resp)
    // .get(function(req, resp)
    {
        let id = req.params.id;

        userBL.getUser(id).then(data =>
            {
                return resp.json(data)
            })
    })


// router.route('/')
//     .post(authenticateJWT,function(req, resp)
router.route('/')
    .post(function(req, resp)
    {
        let obj = req.body;
        userBL.createUser(obj).then(data =>
            {
                // console.log(resp.json(data))
                return resp.json(data)
            })
    })

router.route('/:id')
    // .put(authenticateJWT,function(req, resp)
    .put(function(req, resp)
    {
        let obj = req.body;
        let id = req.params.id;

        userBL.updateUser(id,obj).then(data =>
            {
                
                return resp.json(data)
            })
    })


router.route('/:id')
    // .delete(authenticateJWT,function(req, resp)
    .delete(function(req, resp)
    {
        let id = req.params.id;

        userBL.deleteUser(id).then(data =>
            {
                return resp.json(data)
            })
    })

    router.route('/register')
    .post(function(req,resp)
    {
        let obj = req.body
        userBL.createUser(obj).then(data =>
            {
                return resp.json(data)
                // .catch(err => resp.status(400).send(err));
            })
    })

    router.route('/login')
    .post(function(req, resp)
    {
        const {email, userPassword} = req.body;
        userBL.login(email, userPassword).then(data=>
            {
                return resp.json(data)
            })
            .catch(err =>resp.status(400).send(err));
    })
  
    module.exports = router;