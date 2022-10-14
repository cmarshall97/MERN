const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type:String
    },
    price: {
        type:Number
    },
    Description: {
        type:String
    }
},{timestamps:true}) //gives us _id, createdAt and updatedAt

//Product is the name of the collection in the database
//we are running mongoose functions on that collection so that we can add, update, delete, and read them
const Product= mongoose.model('Product', ProductSchema)


module.exports = Product