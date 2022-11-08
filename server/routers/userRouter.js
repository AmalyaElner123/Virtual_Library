const express = require('express')
const userBL = require('../BL/userBL')
const router = express.Router();

router.route('/')
    .get(function(req, resp)
    {
        userBL.getAllUsers().then(data =>
            {
                return resp.json(data)
            })
    })


router.route('/:id')
    .get(function(req, resp)
    {
        let id = req.params.id;

        userBL.getUser(id).then(data =>
            {
                return resp.json(data)
            })
    })


router.route('/')
    .post(function(req, resp)
    {
        let obj = req.body;
        console.log("obj")
        console.log(obj)
        userBL.createUser(obj).then(data =>
            {
                console.log(resp.json(data))
                return resp.json(data)
            })
    })

router.route('/:id')
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
    .delete(function(req, resp)
    {
        let id = req.params.id;

        userBL.deleteUser(id).then(data =>
            {
                return resp.json(data)
            })
    })

    router.route('/login')
    .post(function(req, resp)
    {
        const {username, password} = req.body;
        userBL.login(username, password).then(data=>
            {
                console.log(resp)
                console.log(data)
                return resp.json(data)
            })
            .catch(err =>resp.status(400).send(err));
    })
    

    
    


    module.exports = router;