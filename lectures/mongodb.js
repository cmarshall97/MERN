// mongoDB -> databases (within mongodb )-> collections (within databases) -> documents (within collections)

// server.js setup
const express = require('express');
const mongoose = require('mongoose');
const { userInfo } = require('os');
const app= express();
const PORT = 8000

//middleware functions allo us to add post data in to our requests
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//below line you can create a database just by naming it below in th 'testdb' part

mongoose.connect('mongodb/://localhost/testdb',()=>(
    console.log('connected to MongDB')
))

//first thing needs to create is a MongoDB schema (blueprint) -> then we need to create MongoDB model

//create a schema on how we want to structure the data of the object being passed through
const UserSchema = mongoose.Schema ({
    name: string,
    age:number,
    developer: Boolean
})

//function to create a colllection in the database
//pass the above schema in to the model below

const User = mongoose.model('User',UserSchema)

//route to fill out a form to create a user below
//userInfo.create is  mongoose function to create a new document / since we dont have a form yet we have to pass teh body of teh request object to the function below
app.post('/api/addUser',(req,res)=>{
    User.create(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/api/allUsers',(req,res)=>{
    User.find(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
})

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`)
})
