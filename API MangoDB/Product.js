const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    brand : String,
    price : Number,
    catogary : String
})

module.exports = mongoose.model('products',productSchema)