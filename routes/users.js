const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");


mongoose.connect("mongodb+srv://amansharma1503:sharmaji@cluster0.wfgtlr2.mongodb.net/?retryWrites=true&w=majority")

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    File:{
        type:String,
        default:""
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }],
    likes:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }
});

userSchema.plugin(plm);

module.exports = mongoose.model("user",userSchema);