
const mongoose = require('mongoose')

const InventorySchema = mongoose.Schema(
    {
        shipmentCode: {
            type: String,
            required: true
        },
        itemID: {
            type: String,
            required: true,
            min: 6,
            max: 256
        },
        itemType: {
            type: String,
            required: true,
            min: 6,
            max: 256
        },
        brand: {
            type: String,
            required: true,
            min: 6,
            max: 256
        },
        itemModel: {
            type: String,
            required: true,
            min: 6,
            max: 256
        },
        processor: {
            type: String,
            required: false,
            min: 8,
            max: 256
        },
        ramSize: {
            type: String,
            required: false,
            min: 2,
            max: 256
        },
        hddSize: {
            type: String,
            required: false,
            min: 2,
            max: 256
        },
        generation: {
            type: String,
            required: false,
            min: 2,
            max: 256
        },
        quantity: {
            type: Number,
            required: true
        },
        unitPrice: {
            type: Number,
            required: true
        },
        quantitySold: {
            type: Number,
            required: true
        },
        addedBy: {
            type: String,
            required: true
        },
        itemDescription: {
            type: String,
            required: true
        },
        date:  {
            type: Date,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model("Inventory", InventorySchema)
