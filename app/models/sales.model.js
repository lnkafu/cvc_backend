
const mongoose = require('mongoose')

const SalesSchema = mongoose.Schema(
    {
        total: {
            type: Number,
            required: true
        },
        soldBy: {
            type: String,
            required: true,
            min: 6,
            max: 256
        },
        customerName: {
            type: String,
            required: true
        },
        customerNumber: {
            type: String,
            required: true
        },
        confirmationNumber: {
            type: String,
            required: true
        },
        itemsSoldSummary: {
            type: String,
            required: true
        },
        date:  {
            type: Date,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model("Sales", SalesSchema)

