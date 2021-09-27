

const salesController = require('../controller/sale.controller')

module.exports = (app) =>{
    app.post('/saveSale',salesController.saveSale)
    app.get('/getSales',salesController.getAllSales)
    app.get('/findSaleByCustomer',salesController.findSaleByCustomer)
}