const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    picture: String,
});

module.exports = mongoose.model('Product', productSchema)