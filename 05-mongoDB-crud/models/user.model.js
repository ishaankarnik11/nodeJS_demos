//step 1 create schema
//step 2 create model from that schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required:true
    },
    userPassword: {
        type: String,
        required:true
    }
},{
    timestamps:true
});

const User = mongoose.model("user", userSchema);

module.exports = User;