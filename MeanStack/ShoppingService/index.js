const express=require('express');
const app=express();
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/ShoppingDB');
mongoose.connection.on('connected',()=>
{
    console.log('Connected with database');
})

mongoose.connection.on('error',(err)=>
{
    console.log(err);
})


app.get('/',(req,res)=>{
    res.send('Hello!');
})


const productRoutes=require('./routes/product.route');
app.use(express.json());
app.use('/products',productRoutes);



app.listen(3001,()=>{
console.log("Listening to port 3001");
})