const fs = require("fs")
const path = require("path")
const dirPath = path.join(__dirname, "Files")

for (i = 0; i <= 2; i++) {
    fs.writeFileSync(`${dirPath}/hello${i}.txt`, `my file with value of ${i}`)
}

fs.readdir(dirPath,(err,files)=>{
    console.log(err)
    console.log(files)
}) 

//readdir ---> read + dir 
//it will return array of files