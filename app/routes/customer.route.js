const customerController = require('../controller/customer.controller')


module.exports = (app)=>{
    app.post('/customer', customerController.saveCustomer)
    app.get('/customers', customerController.getCustomers)
}