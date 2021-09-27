
const InventoryController = require('../controller/inventory.controller')

module.exports = (app)=>{
    app.post('/saveInventory', InventoryController.saveinventory)
    app.get('/getInventories', InventoryController.getInventories)
    app.put('/updateInventory', InventoryController.updateInventory)
}