const dbConnect = require('./mongoDB')

const updateData = async () =>{
    const db = await dbConnect()
    // const updatedData = await db.updateOne({name : "express2"},{$set : {name : "express"}}) // for updating one data
    const updatedData = await db.updateMany({name : "express2"},{$set : {name : "express"}}) //for updating many data
    console.log(updatedData)

}

updateData()