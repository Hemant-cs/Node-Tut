const fs = require('fs');
const path = require('path');
const colors = require('colors');

const dirPath = path.join(__dirname,'CRUD')
const filePath = `${dirPath}/dataCRUD.txt`

// creation of file

fs.writeFileSync(filePath,'File created, under CRUD operation')

//to read this file

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
//     if(!err) console.log('operation Successful!!!'.green)
// })

// to update this file

// fs.appendFile(filePath,' and now I am updating the file',(err)=>{
//     if(!err) console.log('operation Successful!!!'.green)
// })

// to rename this file

// fs.rename(filePath,`${dirPath}/CRUD.txt`,(err)=>{
//     if(!err) console.log('operation Successful!!!'.green)
// })

// to delete this file

// fs.unlinkSync(`${dirPath}/CRUD.txt`)
