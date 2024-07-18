const mongoose=require('mongoose');

//our schema definition,
const todoSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:false
    }
});

//Convert our todoSchema into model
const Todo=module.exports=mongoose.model('Todo',todoSchema);