const express = require('express');
require('./config')
const productModel = require('./Product');

const app = express();
app.use(express.json())


// app.post('/create',async (req,res)=>{
//     console.log(req.body)
//     const data = new productModel(req.body)
//     const result = await data.save()
//     res.send(result)
// })

// app.get('/',async(req,res)=>{
//     const data = await productModel.find({})
//     res.send(data)
// })

// app.delete('/delete/:_id',async(req,res)=>{
//     const data = await productModel.deleteOne(req.params) //http://localhost:3000/delete/633170cc31c62bbc1b960126
//     res.send(data)
// })

// app.put('/update/:_id',async (req,res)=>{
//     app.use(express.json())
//     let data = await productModel.updateOne(req.params,{
//         $set : req.body
//     })
//     res.send(data)
// })


// ------------------------------------search API-------------------------------------

app.get('/:key',async (req,res)=>{
    const data = await productModel.find({"$or":[
        {
            "name":{$regex : req.params.key}
        },
        {
            "brand" :{$regex : req.params.key}
        }
    ]})    
    res.send(data)
})
app.listen(3000)