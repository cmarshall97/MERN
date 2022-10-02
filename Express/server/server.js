const express = require('express');
const app = express();

// Express Middleware functions
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json()); //allows us to parse JON objects coming in from POSTS and PUT requests
app.use(express.urlencoded({extended: true})); //allows us to parse strings and arrays comig in with JSON object

app.get("/api/welcome", (request,response)=>{
    console.log("this is the welcome API route");
    response.json({message: "Welcome to our API... THIS IS THE RESPONSE"})
})

app.post("/api/welcome", (request,response)=>{
    console.log("this is our post request");
    response.json({
        message: "MERN is great....this is our post response ",
        ourRequestBody: request.body
    })
    console.log(request.body)
})




app.listen(8000,()=>console.log("Successfully connected to port 8000"))