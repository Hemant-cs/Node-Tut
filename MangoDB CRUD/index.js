const express = require('express');
const app = express();
const renderFilter = require('./middleware')
const route = express.Router() //for applying multiple page

// ---------------------to apply, all over application------------------
// (this is will be inside middleware function)
// const renderFilter = (req,res,next)=>{
//     if(!req.query.age){
//         res.send('you are not allowed to access this page')
//     }else if(req.query.age < 18){
//         res.send('user should be 18+')
//     }else{
//         next();
//     }
    

// }

// app.use(renderFilter)

// app.get('/',(req,res)=>{
//     res.send('welcome developer')
// })

// app.get('/profile',(req,res)=>{
//     res.send('profiles')
// })

// ----------------------------------------------------


// -------------------to apply only on one route-------


// app.get('/',(req,res)=>{
//     res.send('welcome developer')
// })

// app.get('/profile', renderFilter,(req,res)=>{ //this will apply only on one profile page
//     res.send('profiles')
// })

// ---------------------------------


// -------------------for applying multiple page---------------

// route.use(renderFilter)
// app.get('/',(req,res)=>{
//     res.send('welcome developer')
// })

// route.get('/profile',(req,res)=>{  //for applying route
//     res.send('profiles')
// })

// app.get('/about',(req,res)=>{
//     res.send("it's all about us")
// })

// route.get('/contanct-us',(req,res)=>{ //for applying route
//     res.send('for more info, pls ring at +91xxxxxxx')
// })

// app.use('/',route)

// app.listen(3001)


// -----------creating connection with mangoDB---------------------

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url)
// const dataBases =  'e-comm';
const  dbConnect  = require('./mongoDB')

async function getData(){
    let collection =await dbConnect()
    const resp = await collection.find({}).toArray()
    console.log(resp)
}

getData();

