const mongoose = require('mongoose').default
/** @member {Object} */
const validator = require('validator').default

const Task = mongoose.model('Task', {
    description: {
        type: String ,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Task