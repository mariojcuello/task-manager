const mongodb = require('mongodb')
const { MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const id = new ObjectId()

console.log(id)
console.log(id.getTimestamp())

// noinspection JSCheckFunctionSignatures
MongoClient.connect(connectionURL, { useUnifiedTopology: true}, (error,client) => {
    if (error) {
        return console.log(error)
    }

    const db = client.db(databaseName)
})

