// const arr = [
//     {
//         "remark_key": "00001",
//         "description": "HEMANT CS TEST NEW",
//         "effective_date": "2022-08-25",
//         "expiry_date": "2037-08-06"
//     },
//     {
//         "remark_key": "00002",
//         "description": "CS NEW",
//         "effective_date": "2023-08-25",
//         "expiry_date": "2057-09-12"
//     }
// ]

// let remarksData = arr.map(item => returnObj(item))

// function returnObj(obj){
//     return {
//         remark_key : obj.remark_key,
//         description : obj.description.toLowerCase(),
//         effective_date : obj.effective_date,
//         expiry_date : obj.expiry_date 
//     }
// }
//to run this file --> node index.js (in terminal)

// console.log(remarksData) 

// const fs = require('fs').writeFileSync 
// fs("basicServerCreation.js",'')

//fs stands for fileSystem
//writeFileSync --> it's help us to write new file
// it's accepting two parameter 
//syntax fs.writeFileSync("File_Name","Content_of_File")
//first one is name of file
// second is content of file

// -----------dyanamic files----------------------

// const express = require('express')
// const user = {
//     name: 'Hemant Chaurasia',
//     age : 22,
//     city : 'Delhi',
//     skills : ['Java','js','html']
// }

// const app =  express();

// app.set('view engine','ejs');


// app.get('/profile',(req,res)=>{
//     res.render('people',{user})
// })
// app.get('/',(req,res)=>{
//     res.render('home',{user})
// })

// app.listen(3000)


// -----------creating connection with mangoDB---------------------

const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dataBase = 'e-comm'

async function getData(){
    let result = await client.connect()
    let db = result.db(dataBase)
    let collection = db.collection('products')
    const res = await collection.find({}).toArray()
    console.log(res)
}

getData()