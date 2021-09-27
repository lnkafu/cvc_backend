const salesModel = require("../models/sales.model")

let generateConfirmationNumber = () => {
    var result = '';
    let length = 15
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;

}

exports.saveSale = async (req, res) => {
    //console.log(req.body)
    const retrievedSale = req.body
    let extractedCart = retrievedSale.cart
  //  console.log('extracted Cart is ', extractedCart)
   // console.log('retrievedSale is: ', retrievedSale)
    let sale = {
        confirmationNumber: generateConfirmationNumber(),
        customerName: retrievedSale.customer.name,
        customerNumber: retrievedSale.customer.number,
        itemsSoldSummary: retrievedSale.soldItemsSummary,
        total: retrievedSale.total,
        soldBy: retrievedSale.soldBy

    }
    //console.log('sale is: ',sale)
    await salesModel.create(sale).then(result => {
        res.status(200).json({
            "message": "Sale record successfully saved",
            "Items Sold": result
        })
    }).catch(err => res.status(400).json({
        "Message": "Sale record not saved.",
        "Error": err
    }))
}

exports.findSaleByCustomer = async (req, res) => {
    let sales = await salesModel.findOne(req.params.customerName)
    if (!sales) {
        return res.status(200).json({
            "Message": "Sales record not found",
        })
    }
    return res.status(200).json({
        "Message": "Sales record found",
        "Sales": sales
    })
}
exports.getAllSales = async (req, res) => {
   // console.log('inside getting all sales')
    let sales = await salesModel.find().then(result => {
        res.status(200).json({
            "Message": "Retrive successful",
            "Sales": result
        })
    }).catch(err => {
        console.log(err)
        res.status(400).json({
            "Message": "Error",
            "Error": err
        })
    })
}