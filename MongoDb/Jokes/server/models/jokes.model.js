const mongoose = require('mongoose');


const UserSchema = mongoose.Schema ({
    name: string,
    age:number,
    developer: Boolean
})


const User = mongoose.model('User',UserSchema)

module.export = User 
