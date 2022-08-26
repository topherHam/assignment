import mongoose from "mongoose"

const usersSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    token:{
        type: String
    }

})

const User = mongoose.model('User', usersSchema)

export default User