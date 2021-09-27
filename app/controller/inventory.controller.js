const InventoryModel = require('../models/inventory.model')


let generateItemID = () => {
    let length = 5
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;

}

exports.saveinventory = async (req, res, next) => {
    let payload = req.body
 
    let inventories = await payload.map((item, index) => {
        let inventory = item
        inventory.itemID = generateItemID()
        return inventory
    })
    InventoryModel.insertMany(inventories)
        .then(result => {
            res.status(201).json({
                "Message": "Success",
                "data": result
            })
            console.log('Successfully inserted inventories')
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({
                "Message": "Error",
                "Error": err
            })
        })
}

exports.getInventories = async (req, res) => {
    let allInventory = await InventoryModel.find()
        .then(result => {
              //console.log('**** Successfully got inventories *****')
            //  console.log(result)
            return res.status(200).json({
                'Message': "Search successful",
                "Data": result
            })
          
        }).catch(err => {
            res.status(400).json({
                'Error': err
            })
        })
    // console.log(allInventory.body)
}

exports.updateInventory = async (req, res, next) => {
    let payload = req.body
 
    let inventories = await payload.map((item, index) => {
        let inventory = item
        inventory.itemID = generateItemID()
        return inventory
    })
    InventoryModel.updateMany(inventories)
        .then(result => {
            res.status(201).json({
                "Message": "Update Successful",
                "data": result
            })
            console.log('Successfully updated inventories')
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({
                "Message": "Update Error",
                "Error": err
            })
        })
}