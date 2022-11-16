const express = require('express')
const itemBL = require('../BL/itemBL')
const router = express.Router();

router.route('/')
    .get(function(req, resp)
    {
        itemBL.getAllItems().then(data =>
            {
                return resp.json(data)
            })
    })


router.route('/:id')
    .get(function(req, resp)
    {
        let id = req.params.id;

        itemBL.getItem(id).then(data =>
            {
                return resp.json(data)
            })
    })


router.route('/')
    .post(function(req, resp)
    {
        let obj = req.body;
        itemBL.createItem(obj).then(data =>
            {
                // console.log(resp.json(data))
                return resp.json(data)
            })
    })

router.route('/:id')
    .put(function(req, resp)
    {
        let obj = req.body;
        let id = req.params.id;

        itemBL.updateItem(id,obj).then(data =>
            {
                
                return resp.json(data)
            })
    })


router.route('/:id')
    .delete(function(req, resp)
    {
        let id = req.params.id;

        itemBL.deleteItem(id).then(data =>
            {
                return resp.json(data)
            })
    })


    module.exports = router;