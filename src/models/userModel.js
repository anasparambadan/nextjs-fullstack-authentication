import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        requred:[true,"Please Provide a username"],
        unique:true
    },
    email:{
        type:String,
        required:[true, 'Please provide a Email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please Enter a password']
    },
    isVerified:{
        type:Boolean,
        default:fasle
    },
    isAdmin:{
        default:false,
        type:Boolean
    }
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User;

