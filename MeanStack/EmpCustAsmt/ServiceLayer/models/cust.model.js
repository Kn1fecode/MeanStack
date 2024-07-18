const mongoose=require('mongoose');

//our schema definition,
const todoSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:false
    },
    contact:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    gender:{
        type:String,
        required:false
    }
});

//Convert our todoSchema into model
const Todo=module.exports=mongoose.model('cust',todoSchema);