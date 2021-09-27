
const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2
        },
        address: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        storeName: {
            type: String,
            required: false
        },
        date:  {
            type: Date,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model("Customer", CustomerSchema)