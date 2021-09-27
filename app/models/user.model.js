
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 256
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 256
        },
        email: {
            type: String,
            required: true,
            min: 6,
            max: 256
        },
        phoneNumber: {
            type: Number,
            required: true,
            min: 8
        },
        username: {
            type: String,
            required: true,
            min: 4,
            max: 256
        },
        password: {
            type: String,
            required: true,
            min: 8,
            max: 256
        },
        role: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model("user", UserSchema)