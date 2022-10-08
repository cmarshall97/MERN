const User = require('../models/user.model')


const addUser = (req,res)=> {
    User.create(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const getAllUsers = (req, res)=> {
    User.find(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const findById = (req, res)=> {
    User.findOne({id:req.params.id})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

//functions exported so we can use them elsewhere
module.exports ={
    addUser,
    getAllUsers,
    findById
}