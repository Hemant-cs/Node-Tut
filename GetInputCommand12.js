var colors = require('colors');

//console.log(process) //it will console everything from process object

//console.log(process.argv) // it will console only arguments 

//argv stands for Argument vector
// in this vector you will receive 2 things by default
// 1. node.exe files location
// 2. current file location from third you will find your give argument from command line eg

console.log(process.argv) // pls run this command ---> node GetInputCommand12 Hemant CS

//output --> 

// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\2107050\\Desktop\\node-tut\\GetInputCommand12',
//     'Hemant',
//     'CS'
// ]

// as you can see at 2nd and 3rd position you passed argument is there

console.log(process.argv[2].rainbow)
