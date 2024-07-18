const express=require('express');

//Creating application object
const app=express();
const mongoose=require('mongoose');
// const cors=require('cors');
//mongoose connection code
mongoose.connect('mongodb://localhost:27017/mean_asmt');
//Events
mongoose.connection.on('connected',()=>{
    console.log('Connected with mongoDb databse');
})
mongoose.connection.on('error',(err)=>{
    console.log(err);
})

app.use(express.json());
//creating application object
const router=express.Router();
const cust1=require('./routes/cust.route')
const custRoutes=express.Router();
//const empRoutes=express.Router();
// //Middleware (anything relatedto api.todos will get 
// //redirected to todoroutes folder)

app.use('/api/cust',cust1)
//app.use('/api/emp',empRoutes)
app.get('/',(req,res)=>{
    res.send('Hello world!');
})


app.listen(3004,()=>{
    console.log('Server running on port 3004');
})