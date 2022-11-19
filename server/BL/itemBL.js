const itemModel = require('../models/itemModel')

exports.getAllItems = function()
{
    return new Promise((resolve, reject) =>
    {
        itemModel.find({}, function(err, data)
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

exports.getItem = function(id)
{
    return new Promise((resolve, reject) =>
    {
        itemModel.findById(id, function(err, data)
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

exports.createItem = function(obj)
{
    return new Promise((resolve, reject) =>
    {
        let item = new itemModel({
            idItem   : obj.idItem ,
            idOwner  : obj.idOwner ,
            idBorrow : obj.idBorrow ,
            name     : obj.name ,
            category : obj.category ,
            status   : obj.status ,
            rate     : obj.rate ,
            borrowsNum : obj.borrowsNum ,
            openText   : obj.openText,
            uploadDate : obj.uploadDate,
            img        : obj.img
        });
        
        item.save(function(err)
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


exports.updateItem = function(id,obj)
{
    return new Promise((resolve, reject) =>
    {

        itemModel.findByIdAndUpdate(id,
            {
                idItem   : obj.idItem ,
                idOwner  : obj.idOwner ,
                idBorrow : obj.idBorrow ,
                name     : obj.name ,
                category : obj.category ,
                status   : obj.status ,
                rate     : obj.rate ,
                borrowsNum : obj.borrowsNum ,
                openText   : obj.openText ,
                uploadDate : obj.uploadDate,
                img        : obj.img
                
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



exports.deleteItem = function(id)
{
    return new Promise((resolve, reject) =>
    {

        itemModel.findByIdAndDelete(id,function(err)
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