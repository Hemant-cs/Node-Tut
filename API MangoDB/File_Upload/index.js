// const express = require('express');
// const multer  = require('multer');

// const app = express()

// const upload = multer({ //we have to use as middleware
//     storage : multer.diskStorage({
//         destination : (req,file,cb)=>{
//             cb(null,'upload')
//         },
//         filename : (req,file,cb)=>{
//             cb(null,file.fieldname+"_"+Date.now()+".jpg")
//         }
//     })
// }).single('user')

// app.post('/upload',upload,(req,res)=>{
//     res.send('File Uploaded Successfully!!')
// })

// app.listen(3000);


// --------------------------OS----------------------------
// const os = require('os');
// console.log(os)
// console.log(os.homedir())
// console.log(os.platform())
// console.log(os.arch())
// console.log(os.freemem()/(1024*1024*1024))
// console.log(os.totalmem()/(1024*1024*1024))
// console.log(os.userInfo())



// ------------------------- event and event Emitter -----------------------

const express = require('express')
const EventEmitter = require('events')

const app = express();
const event = new EventEmitter()

let count = 0
event.on('events',()=>{
    count++
    console.log('event called',count)
})

app.get('/',(req,res)=>{
    res.send('API called')
    event.emit('events')
})

app.listen(3000)