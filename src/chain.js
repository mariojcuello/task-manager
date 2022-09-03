require('../src/db/mongoose')
const Task = require('./models/task')
const User = require('./models/user')
const e = require("express");

// Task.findByIdAndDelete('630bb04a25b3b020493f5e52').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('630bb0f308b0e8534be82238').then((count) => {
    console.log('tasks remaining:', count)
}).catch((e) => {
    console.log(e)
})

// updateAgeAndCount('630bb04a25b3b020493f5e52', 2).then((count) => {
//     console.log('count', count)
// }).catch((e) => {
//     console.log('e',e)
// })