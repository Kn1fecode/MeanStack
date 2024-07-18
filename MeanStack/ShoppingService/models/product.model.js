const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    name:
    {type:String,
     required:true},
    cost:
    {
        type:Number,
     required:true
    },
    category:
    {type:String,
     required:false}
});

const Product=module.exports=mongoose.model('Product',productSchema);