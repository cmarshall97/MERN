const Joke = require('../models/jokes.model')


const addJoke = (req,res)=> {
    Joke.create(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const getAllJokes = (req, res)=> {
    Joke.find(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const findById = (req, res)=> {
    Joke.findOne({_id:req.params.id})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const updateById = (req, res)=> {
    Joke.updateOne({_id:req.params.id})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const deleteById = (req, res)=> {
    Joke.remove({_id:req.params.id})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

//functions exported so we can use them elsewhere
module.exports ={
    addJoke,
    getAllJokes,
    findById,
    updateById,
    deleteById
}