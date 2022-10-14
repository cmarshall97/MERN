const Product = require('../models/product.model')

module.exports= {
    getAllProducts: (req,res) =>{
        Product.find()
        .then((result)=>{
            res.json({result})
        }).catch((err)=>{
            console.log(err)
        })
    },
    getOneProduct: (req,res) => {
        Product.findById(req.params.id)
        .then((result)=>{
            res.json({result})
        }).catch((err)=>{
            console.log(err)
        })
    },
    createProduct: (req,res) => {
        Product.create(req.body)
        .then((result)=>{
            res.json({result})
        }).catch((err)=>{
            console.log(err)
        })
    },
    updateProduct: (req,res) => {
        Product.updateOne({_id:req.params.id}, req.body) //req.body is what the data we pass to update
        .then((result)=>{
            res.json({result})
        }).catch((err)=>{
            console.log(err)
        })
    },
    deleteProduct: (req,res) => {
        Product.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json({result})
        }).catch((err)=>{
            console.log(err)
        })
    }
}
