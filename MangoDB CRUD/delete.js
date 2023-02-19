const dbConnect = require('./mongoDB')

const deleteData =async () =>{
    let data = await dbConnect()
    let deleted = await data.deleteOne({name : "express"}) // for deleting one data
    // let deleted = await data.deleteMany({name : "express"}) //for deleting many data
    console.log(deleted)

}

deleteData()