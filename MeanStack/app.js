/*function hello()
{
    console.log('Hello');
}

hello();*/


//demo2
//var logger=require('./logger');
//logger('Priyanka Pimpalekar');


//Demo 3 :Path: The path module provides utilities for working with 
//file and directory paths
const path=require('path');
const pathObject=path.parse(__filename);
console.log(pathObject);

//Demo4:The OS module provides a number of operating system related utilities
const os=require('os');
const totalMemory=os.totalmem();
const freeMemory=os.freemem();

console.log(totalMemory+' '+freeMemory);


//Demo 5:

const fs=require('fs');
//fs.readdir('./',function(err,result){})
fs.readdir('./',(err,result)=>{
    if(err) console.log(err);
    else console.log(result);
})


//Demo6: Events Module
const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

//Event handler
eventEmitter.on('messageLogged',()=>{
    console.log('Mesage logged!');
})

//Raise an event
eventEmitter.emit('messageLogged');

//Demo7: http: to create web server
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.write('HelloWorld');
        res.end();
    }
    if(req.url==='/api/todos')
    {
        res.write('Todo application called');
        res.end();
    }
    // if(req.url==='/')
    // {
    //     res.write('HelloWorld');
    //     res.end();
    // }
})

server.listen(3000);
console.log('Sever running on port 3000');

