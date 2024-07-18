


const express=require('express');

//Creating application object
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
//mongoose connection code
mongoose.connect('mongodb://localhost:27017/expresstodo');
//Events
mongoose.connection.on('connected',()=>{
    console.log('Connected with mongoDb databse');
})
mongoose.connection.on('error',()=>{
    console.log(err);
})


const todoRoutes=require('./routes/todo.route');
app.use(cors());
 app.use(express.json());
//creating application object
const router=express.Router();
// //Middleware (anything relatedto api.todos will get 
// //redirected to todoroutes folder)
app.use(express.json());
app.use('/api/todos',todoRoutes)

app.get('/',(req,res)=>{
    res.send('Hello world!');
})


app.listen(3000,()=>{
    console.log('Server running on port 3000');
})