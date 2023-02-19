const dbConnect = require('./mongoDB')

const insert = async ()=>{
    const db = await dbConnect();
    // db.insert({name:"z60",brand:'lava',catogary:"mobile",price:7000}) //old method,for inserting one element
    // db.insert([
    //     {name:"z60",brand:'lava',catogary:"mobile",price:7000},
    //     {name:"express2",brand:'micromax',catogary:"mobile",price:5988},
    //     {name:"zolo",brand:'micromax',catogary:"mobile",price:4600}
    // ]) //old method, for inserting multiple records
    // db.insertOne({name:"z60",brand:'lava',catogary:"mobile",price:7000}) //latest method, 
    const result = await db.insertMany([
        {name:"z60",brand:'lava',catogary:"mobile",price:7000},
        {name:"express2",brand:'micromax',catogary:"mobile",price:5988},
        {name:"zolo",brand:'micromax',catogary:"mobile",price:4600}
    ]) // latest method
    if(result.acknowledged){
        console.log('data inserted successfully')
    }
}

insert();