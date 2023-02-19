
// --------------------------class-1---------------------------
// const express = require('express')
// const app = express();

// app.get('/',(req,res)=>{
//     console.log(req.query,'req')
//     res.send(`<h1>welcome ${req.query.name}, This is a home page </ h1>`)
// })

// app.get('/about',(req,res)=>{
//     res.send({name:'Hemant Chaurasia',age:20})
// })

// app.get('/help',(req,res)=>{
//     res.send('pls call me')
// })

// app.listen(5000)

// -------------------------------class-2------------------------------

// const express = require('express');
// const path = require('path');

// const indexPath = path.join(__dirname,'../public')

// console.log(indexPath)
// const app = express();

// app.get('/',(req,res)=>{
//     res.send(express.static.indexPath)    
// })

// app.use(express.static(indexPath))

// app.listen(5000)

// --------------------------------class-3----------------------------

const express = require('express');
const path =  require('path');

const indexPath = path.join()
const app = express()

app.get('/',(req,res)=>{
    res.sendFile(``)
})