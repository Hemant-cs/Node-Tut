// const express = require('express');
// const dbConnect = require('../MangoDB CRUD/mongoDB');
// const app = express();
// const mongoDb = require('mongodb')

// app.use(express.json())

// app.get('/',async (req, res)=>{
//     const db = await dbConnect();
//     const data = await db.find({}).toArray()
//     res.send(data)
// })

// app.post('/',async (req,res)=>{
//     const db = await dbConnect()
//     const result =await db.insert(req.body)
//     res.send(result.acknowledged)
// })

// app.put('/:name',async (req,res)=>{ //using URL params
//     const db = await dbConnect()
//     const result = await db.updateOne({name:req.params.name},{$set:req.body})
//     res.send(result)
// })

// app.put('/',async (req,res)=>{ //usng hardcoded value
//     const db = await dbConnect()
//     const result = await db.updateOne({name:"Nord31"},{$set:req.body})
//     res.send(result)
// })

// app.delete('/:id',async (req,res)=>{
//     const db = await dbConnect()
//     const result = await db.deleteOne({_id: new mongoDb.ObjectId(req.params.id)})
//     res.send(result)
// })

// app.listen(3000)



//---------------------------using mongoose------------------------


// const mongoose = require('mongoose');

// const main = async ()=>{
//     await mongoose.connect('mongodb://localhost:27017/e-comm')
//     const productSchema = new mongoose.Schema({
//         name : String
//     })
//     const productModel = mongoose.model('products',productSchema)
//     const data = new productModel({name : 'v8'})
//     // const result = await data.save()
//     console.log(data)
// }

// main()


// ---------------------CRUD_with_mongoose-------------------------------------

const mongoose = require('mongoose')

const productSchema =  mongoose.Schema({
    name : String,
    price : Number,
    brand : String,
    catogary : String
})

const saveInDB = async ()=>{ // for creating a new data
    await mongoose.connect('mongodb://localhost:27017/e-comm')
    const productModel =  mongoose.model('products',productSchema)
    const data = new productModel({
        name : "v28",
        price : 32067,
        brand : "vivo",
        catogary : "mobile"
    })
    const result = await data.save()
    console.log(result)
}

// saveInDB()

const updateInDB = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/e-comm');
    const productModel = mongoose.model('products',productSchema)
    const data = await productModel.updateOne({name:"v28"},{$set :{name:'v8', price: 3500}})
    console.log(data)
}

// updateInDB();

const deleteInDB = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/e-comm')
    const productModel = mongoose.model('products',productSchema);
    const data = await productModel.deleteOne({name:"v8"})
    console.log(data)
}

// deleteInDB();

const findInDB = async ()=>{ //for reading any data
    await mongoose.connect('mongodb://localhost:27017/e-comm')
    const productModel = mongoose.model('products',productSchema);
    const data = await productModel.find()
    console.log(data)
}

findInDB();