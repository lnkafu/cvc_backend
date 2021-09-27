const CustomerModel = require('../models/customer.model')


let generateCustomerID = () => {
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

exports.saveCustomer = async (req, res, next) => {
    console.log('inside save inventory')
    let payload = req.body
   
    console.log('inventory is ', payload)
    CustomerModel.create(payload)
        .then(result => {
            res.status(201).json({
                "Message": "Success",
                "data": result
            })
            console.log('Successfully inserted customer')
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({
                "Message": "Error",
                "Error": err
            })
        })
}

exports.getCustomers = async (req, res) => {
    //console.log('inside getting all customers')
    let allCustomers = await CustomerModel.find()
        .then(result => {
              console.log('**** Successfully got customers *****')
              console.log(result)
            return res.status(200).json({
                'Message': "Search successful",
                "Data": result
            })
          
        }).catch(err => {
            console.log(err)
            res.status(400).json({
                'Error': err
            })
        })
    // console.log(allInventory.body)
}