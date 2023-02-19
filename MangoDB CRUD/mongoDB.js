// ----------------------- data from mongoDB---------------------------
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dataBase = 'e-comm'

async function dbConnect (){
    let result = await client.connect();
    const db = result.db(dataBase)
    const collection = db.collection('products')
    return collection
}


// dbConnect()

module.exports = dbConnect
