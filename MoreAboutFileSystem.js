const fs = require('fs');
const colors = require('colors');

const input = process.argv

if(input[2] == 'add'){
    console.log('Created!!!'.green)
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]== 'remove'){
    console.log('Deleted!!!'.green)
    fs.unlinkSync(input[3])
}
else{
    console.log('are bhai kar kya raha hai???'.red)
}