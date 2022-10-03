const { response } = require('express');

const express = require('express'); //import express
const app = express();
const PORT = 8000 //environment varible

const {faker} = require('@faker-js/faker'); // import faker by destructuri faker from required statement
const { request } = require('https');

app.use(express.json()); //allows us to parse JSON objects coming in from POSTS and PUT requests
app.use(express.urlencoded({extended: true})); //allows us to parse strings and arrays comig in with JSON object


const createUser = ()=>{
    return{
        _id:faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password:faker.internet.password(),
        phoneNumber:faker.phone.phoneNumber()
    }
}

const createCompany = ()=>{
    return{
        _id:faker.datatype.uuid(),
        name:faker.company.name(),
        address:{
            street: faker.address.street(),
            city:faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}
//creates a new user
app.get('/api/users/new', (req, res)=>{
    const newUser = createUser()
    res.json(newUser) // response back to the client
})

//creates a new company
app.get('/api/companies/new', (req, res)=>{
    const newCompany = createCompany()
    res.json(newCompany)
})

//creates a new company and a new user
app.get('/api/user/company', (req, res)=>{
    const newUser = createUser()
    const newCompany = createCompany()
    res.json(newUser, newCompany)
})


app.listen(PORT,()=>console.log(`Successfully connected to port ${PORT}`));