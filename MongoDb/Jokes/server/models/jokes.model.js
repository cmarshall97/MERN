const mongoose = require('mongoose');

//create a new schema or blueprint
const JokeSchema = new mongoose.Schema ({
    setup: String,
    punchline: String,
},{timestamps:true})

//create a new model/collection in the database
const Joke = mongoose.model('Joke',JokeSchema)

//export for use elsewhere
module.export = Joke 
